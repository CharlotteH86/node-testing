//import express
let express = require("express")
//A server called myApp
let myApp = express()

//Enableing this feature in express so user input is easyily avalialbe
myApp.use(express.urlencoded({extended: false}))

//.get have two arguments. First is the url or main page = / to be on the lookout for and second is a function that express run when someone sends a request to the url
myApp.get('/', function(req, res){
    //action is where you get sent. POST and GET. GET mean getting information from the web. POST is when I send data, like posting the form
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit</button>
    </form>
    `)
})

//function is a respons whe beign sent to /answer
myApp.post('/answer', function(req, res){
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <p>Congratulations that is the right answer</p>
        <a href="/">Back to first page</a>
        `)
    }else {
        res.send(`
        <p>Not right, sorry.</p>
        <a href="/">Back to first page</a>
        `)}
})

myApp.get('/answer', function(req, res){
    res.send("Are you lost?")
})

myApp.listen(3000)