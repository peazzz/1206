var express = require("express");

server = express();

server.use(express.static("CurryBibimbap"));//web root

server.listen(8080, function(){
    console.log("Server is running at port 8080!")
})