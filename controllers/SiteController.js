const SiteController = {};
const Employee = require("../models/Employee.js")
const Week = require("../models/Week.js")

SiteController.Index = async function(req, resp){
  const employees = await Employee.All()
  const week = await Week.FindThisWeek()

  resp.render('index.ejs', {employees, week})
}



module.exports = SiteController;


