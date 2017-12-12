const db = require("../config/db.js")

class Employee{

	static CreateTable() {
		const sql = `CREATE TABLE IF NOT EXISTS employees (
			id INTEGER PRIMARY KEY,
			name TEXT,
			phone TEXT
		)`
		return new Promise(function(resolve){
			
			db.run(sql, function(){
				console.log("employees table created")
				resolve("employees table created")
			})
		})
	}


	insert(){
		const self = this
		const sql = `INSERT INTO employees (name, phone) VALUES (?, ?)`
		return new Promise(function(resolve){
			db.run(sql, [self.name, self.phone], function(err, result){
				self.id = this.lastID
				resolve(self)
			})
		})
	}

    static All(id){
		const sql = "select * FROM employees"

		return new Promise(function(resolve){
		  db.all(sql, function(err, results){ 
          let employees = results.map(function(row){
            let e = new Employee()
            e.name = row.name
            e.phone = row.phone
            e.id = row.id
            return e
          })
				
				resolve(employees)
		 	})
		})
	}

  static Find(id){
   const sql = "select * FROM employees WHERE id = ?"

   return new Promise(function(resolve){
       db.get(sql, [id], function(err, results){ 
         const employee = new Employee() 
         employee.id = results.id 
         employee.name = results.name
         employee.phone = results.phone

         resolve(employee)
     })
   })
 }




}

module.exports = Employee;
