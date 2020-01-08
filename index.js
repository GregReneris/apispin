var express = require ('express');
// set up express app

var app = express();

const PORT = 3000;

app.get('/',(req,res) =>{
    res.send("welcome to my API this morning");
})


app.get('/spinach', (req,res)=>{
    res.json({
        name: "spinach",
        bestFood: true
    });
})










app.listen(PORT,function(){
    console.log("spun up server" + PORT);
})