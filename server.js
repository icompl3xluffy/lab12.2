// Import express 
import express from 'express' 


const app =express();
const port= 3000


// app.use(express.static('./public'));

 
app.get("/", (req, res)=>{
   // res.send("hello") 
   const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
});

try {
    const apiResponse = await fetch(url);
    // make conditions to make sure theres no errors
    if (apiResponse.status === 404) {
      return res.status(404).json({ message: 'fun fact was not found' });
    }



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});