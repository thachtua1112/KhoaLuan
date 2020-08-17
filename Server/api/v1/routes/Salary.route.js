const express = require("express");

const SalaryController= require("../controllers/Salary.controller")

const SalaryRoute = express.Router();


SalaryRoute.route("/")
.get(SalaryController.get)
.post(SalaryController.create)
.put()
.patch()
.delete()


SalaryRoute.route("/payroll")
.get()
.post(SalaryController.getListEmployeePayroll,SalaryController.getSalaryListProfilePayroll,SalaryController.payroll)
.put()
.patch()
.delete()



module.exports = SalaryRoute;