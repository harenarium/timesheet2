const db = require("../config/db.js")

class Week{

	static CreateTable() {
		const sql = `CREATE TABLE IF NOT EXISTS weeks (
			id INTEGER PRIMARY KEY,
			saturday TEXT UNIQUE,
			sunday TEXT,
			monday TEXT,
			tuesday TEXT,
			wednesday TEXT,
			thursday TEXT,
			friday TEXT
		)`
		return new Promise(function(resolve){
			
			db.run(sql, function(){
				console.log("weeks table created")
				resolve("weeks table created")
			})
		})
	}


	insert(){
		const self = this
		const sql = `INSERT OR IGNORE INTO weeks (saturday, sunday, monday, tuesday, wednesday, thursday, friday ) VALUES (?, ?, ?, ?, ?, ?, ?)`
		return new Promise(function(resolve){
			db.run(sql, [self.saturday, self.sunday, self.monday, self.tuesday, self.wednesday, self.thursday, self.friday], function(err, result){
				self.id = this.lastID
				resolve(self)
			})
		})
	}

 //    static All(id){
	// 	const sql = "select * FROM weeks"

	// 	return new Promise(function(resolve){
	// 	  db.all(sql, function(err, results){ 
 //          let weeks = results.map(function(row){
 //            let week = new Week()
 //            week.name = row.name
 //            week.phone = row.phone
 //            week.id = row.id
 //            return week
 //          })
				
	// 			resolve(weeks)
	// 	 	})
	// 	})
	// }

 //  static Find(id){
 //   const sql = "select * FROM weeks WHERE id = ?"

 //   return new Promise(function(resolve){
 //       db.get(sql, [id], function(err, results){ 
 //         const week = new Week() 
 //         week.id = results.id 
 //         week.name = results.name
 //         week.phone = results.phone

 //         resolve(week)
 //     })
 //   })
 // }

  static MakeSat(date){
 	let sat = date
  	if(date.getDay() < 7){
  		sat.setDate(date.getDate()-(date.getDay()+1))
  	}
  	return sat
  }


  static async FindThisWeek(){
  	let today = new Date
 	let sat = this.MakeSat(today) //this?
 	let day = sat

	let week = new Week()
     week.saturday = sat.toDateString()
     day.setDate(day.getDate()+1)
     week.sunday = day.toDateString()
     day.setDate(day.getDate()+1)
     week.monday = day.toDateString()
     day.setDate(day.getDate()+1) 
     week.tuesday = day.toDateString()
     day.setDate(day.getDate()+1)
     week.wednesday = day.toDateString()
     day.setDate(day.getDate()+1)
     week.thursday = day.toDateString()
     day.setDate(day.getDate()+1)
     week.friday = day.toDateString()
     await week.insert()
     return week
   

 //   const sql = "SELECT * FROM weeks WHERE saturday = ?"

	// let satString = sat.toDateString()

 //   return new Promise(function(resolve){
 //       db.get(sql, [satString], function(err, results){ 
 //         const week = new Week() 
 //         week.id = results.id 
 //         week.saturday = results.saturday
 //         week.sunday = results.sunday
 //         week.monday = results.monday
 //         week.tuesday = results.tuesday
 //         week.wednesday = results.wednesday
 //         week.thursday = results.thursday
 //         week.friday = results.friday

 //         resolve(week)
 //     })
 //   })
 }




}

module.exports = Week;
