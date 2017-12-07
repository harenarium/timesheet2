const EmployeeController = {};
const Employee = require("../models/Employee.js")

EmployeeController.New = async function(req, resp){
	resp.render('employees/new.ejs', {})
}


EmployeeController.Create = async function(req, resp){
	const employee = new Employee();
	employee.name = req.body.newEmployeeName
	await employee.insert()
	
	resp.redirect("/")  
}



module.exports = EmployeeController;


