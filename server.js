var express = require("express");
var bodyParser=require("body-parser");
const res = require("express/lib/response");

server = express();

server.use(express.static("CurryBibimbap"));//web root
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

var DB = require("nedb-promises");
var Users = DB.create("users.db")
var Contact = DB.create("contact.db")

server.get("/portfolio", function(req, res){
    portfolios= [
        { imgSrc: "images/4.png", title: "陳暐中", text: "1410722042" },
        { imgSrc: "images/1.png", title: "楊竣丞", text: "1410822039" },
        { imgSrc: "images/5.png", title: "鄒嘉威", text: "1410822041" },
        { imgSrc: "images/3.png", title: "丁子萱", text: "1410822046" },
        { imgSrc: "images/2.png", title: "吳承憲", text: "1410822047" }       
    ]
   res.send(portfolios);
})

server.get("/contact",function(req,res){
    res.send("call contact");
    res.redirect("/");
})

server.post("/contact_me", function(req, res){
    console.log(req.body);
    //check 
    Contact.insert(req.body);
    res.end()
})

server.listen(80, function(){
    console.log("Server is running at port 8080!")
})