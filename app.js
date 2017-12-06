const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const app = express()

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

//set static path. place to put static resources like css and jquery
app.use(express.static(path.join(__dirname, "/public")))

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//Load Models below 
//ex. const Question = require("./models/questions.js")

//Run Migration
async function migrate(){
	// await Question.CreateTable();
	// await Icebreaker.CreateTable();
	// await IcebreakerResponse.CreateTable();
}
migrate();

// Load Controllers below
const SiteController = require("./controllers/SiteController.js")

// Routes
app.get("/", SiteController.Index)

app.listen(3000, function (){
	console.log("server started on port 3000...");
})

module.exports = app