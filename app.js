const express = require('express'); 
const app = express();              

app.get('/', (req, res) => {        
    res.sendFile(__dirname + "/index.html");  
});

app.listen(process.env.PORT || 3000, function() {       
    var port = (process.env.PORT) ? process.env.PORT : "3000";
    console.log("Server running on port " + port);
});