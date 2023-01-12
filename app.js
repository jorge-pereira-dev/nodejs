const express = require('express'); 
require('dotenv').config();
const app = express();              

app.set('view engine', 'ejs');
app.use(express.static(__dirname, { index: false }));

app.listen(process.env.PORT || 3000, function() {       
    var port = (process.env.PORT) ? process.env.PORT : "3000";
    console.log("Server running on port " + port);
});


app.get('/', (req, res) => {        
    res.sendFile(__dirname + "/index.html");  
});

var data = { 
    date: Date().toLocaleString(), 
    ambte: process.env.AMBTE 
};

app.post("/redirect",  function(req, res){
    res.render("redirect", {
        data: data
    });
});

app.post("/return",  function(req, res){
    res.redirect("/");
});