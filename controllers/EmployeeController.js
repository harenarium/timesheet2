const EmployeeController = {};
const Employee = require("../models/Employee.js")

EmployeeController.New = async function(req, resp){
	resp.render('employees/new.ejs', {})
}


EmployeeController.Create = async function(req, resp){
	const employee = new Employee();
	employee.name = req.body.newEmployeeName
	if(req.body.newEmployeePhone){
		employee.phone = req.body.newEmployeePhone
	} else{
		employee.phone = " "
	}
	
	await employee.insert()
	
	resp.redirect("/")  
}


EmployeeController.ShowAll = async function(req, resp){
  const employees = await Employee.All()
  resp.render('employees/edit.ejs', {employees})
}

EmployeeController.ShowOne = async function(req, resp){
  const employee = await Employee.Find(req.query.employeeID)
  resp.render('employees/editEmployee.ejs', {employee})
}

EmployeeController.Delete = async function(req, resp){
	const employee = new Employee();
	employee.name = req.body.newEmployeeName
	employee.phone = req.body.newEmployeePhone
	await employee.insert()
	
	resp.redirect("employees/edit")  
}



module.exports = EmployeeController;


