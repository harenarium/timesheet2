const db = require("../config/db.js")

class Employee{

  static CreateTable() {
    const sql = `CREATE TABLE IF NOT EXISTS employees (
      id INTEGER PRIMARY KEY,
      name TEXT
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
    const sql = `INSERT INTO employees (name) VALUES (?)`
    return new Promise(function(resolve){
      db.run(sql, [self.name], function(err, result){
        self.id = this.lastID
        resolve(self)
      })
    })
  }

 //  static Find(id){
 //   const sql = "select * FROM questions WHERE id = ?"

 //   return new Promise(function(resolve){
 //       db.get(sql, [id], function(err, results){ 
 //         const question = new Question() 
 //         question.id = results.id 
 //         question.content = results.content
 //         resolve(question)
 //     })
 //   })
 // }

 //  static All(id){
	// 	const sql = "select * FROM questions"

	// 	return new Promise(function(resolve){
	// 	  db.all(sql, function(err, results){ 
 //          let questions = results.map(function(row){
 //            let q = new Question()
 //            q.content = row.content
 //            q.id = row.id
 //            return q
 //          })
				
	// 			resolve(questions)
	// 	 	})
	// 	})
	// }


}

module.exports = Employee;
