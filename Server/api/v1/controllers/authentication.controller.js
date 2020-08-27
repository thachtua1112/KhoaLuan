const User = require("../models/user.model");
const UserOnline = require("../models/UserOnline.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../routes");
const { json } = require("body-parser");

module.exports.login = async (req, res) => {
  const { username, password } = req.query;

  try {
    const user = await User.findOne({ username: username });
    //KT TON TAI TAI KHOAN KO
    if (!user) return res.json("TAI KHOAN K TON TAI");
    const passwordVerify = await bcrypt.compare(password, user.password);
    // XAC THUCJ MAT KHAU
    if (!passwordVerify) return res.json("MAT KHAU KO CHINH XAC");
    const payload = {
      username: user.username,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1m",
    });

    const timeExpiresIn = 60 * 1;

    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: timeExpiresIn,
    });

    const timeExpireAt = new Date(new Date().getTime() + timeExpiresIn * 6000);

    const newUserOnline = {
      expireAt: timeExpireAt,
      username: user.username,
      ip: req.connection.remoteAddress,
      refreshToken: refreshToken,
    };

    const userLogin = await UserOnline.create(newUserOnline);

    console.log(req.headers);
    if (userLogin) {
      res.cookie("access_token", accessToken, {
        maxAge: 365 * 24 * 60 * 60 * 100, // thời gian sống
        httpOnly: true, // chỉ có http mới đọc được token
        //secure: true; //ssl nếu có, nếu chạy localhost thì comment nó lại
      });

      res.cookie("refresh_token", refreshToken, {
        maxAge: 365 * 24 * 60 * 60 * 100, // thời gian sống
        httpOnly: true, // chỉ có http mới đọc được token
        //secure: true; //ssl nếu có, nếu chạy localhost thì comment nó lại
      });

      return res.json({ ms: "LOGIN THANH CONG" });
    }

    return res.json({ ms: "LOGIN KO THANH CONG" });
  } catch (err) {
    console.log(err);
    res.json(403);
  }
};

module.exports.register = async (req, res) => {
  const { username, password, password_confirm } = req.query;

  ///chua them validator len dugn tam/////////////////
  ///kt thieu du lieu ko
  if (!username || !password || !password_confirm)
    return res.json("thieu du lieu");
  const filter = { username };
  /////////////////////////////////

  try {
    //KT TON TAI USER KO

    const isExist = await User.findOne(
      filter, // find a document with that filter
    );
    if (isExist) return res.json("USE DA TON TAI");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      password: hashedPassword,
      password_confirm: hashedPassword,
      role: "admin",
    };

    const result = await User.create(newUser);

    if (result)
      return res.json({
        ms: "TAO THANH CONG",
      });
    res.json({ ms: "TAO KHONG THANH CONG" });
  } catch (err) {
    console.log(err);
    res.json(403);
  }
};

module.exports.logout = async (req, res) => {
  const refresh_token = req.cookies.refresh_token;
  try {
    const result = await UserOnline.findOneAndDelete({
      refreshToken: refresh_token,
    });
    res.cookie("access_token", null, { maxAge: 0 });
    res.cookie("refresh_token", null, { maxAge: 0 });
    res.json({ ms: "LOGOUT" });
  } catch (err) {
    console.log(err);
    res, json(403);
  }
};

module.exports.checkLogged = async (req, res) => {
  const access_token = req.cookies;
  console.log("TOKEN", access_token);
  res.json({ ms: "CHECK LOGGED", header: access_token });
};
