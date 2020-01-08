var express = require ('express');
// set up express app

var app = express();

// this is heroku process.env.PORT or if running local will be on port 3000.
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.send("welcome to my API this morning");
})


app.get('/coffee', (req,res)=>{
    res.json({
        name: "Coffe Milione",
        bestDrink: true
    })
})


app.listen(PORT,function(){
    console.log("spun up server" + PORT);
})