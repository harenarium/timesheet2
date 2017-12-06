const SiteController = {};
//const Question = require("../models/questions.js")

SiteController.Index = async function(req, resp){
  //const questions = await Question.All()
  resp.render('index.ejs', {welcomePhrase: "Welcome to the Home Page"})
}



module.exports = SiteController;


