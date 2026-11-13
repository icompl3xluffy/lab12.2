// Import express 
import express from 'express' 


const app =express();
const port= 3000


// app.use(express.static('./public'));

 
app.get("/", (req, res)=>{
   // res.send("hello") 
   const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
});



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});