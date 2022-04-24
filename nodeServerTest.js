//Node server! ctrl + C to close server
//import
let http = require("http")
//Node server. req = request, res = respons
let ourApp = http.createServer(function(req, res){
    if (req.url == "/") {
        res.end("Hello this is a good website")
    }

    if (req.url == "/about") {
        res.end("Thank you for the interest!")
    }

    res.end("Cant find the page")
})
//listen to incoming requests. 3000 = port
ourApp.listen(3000)
