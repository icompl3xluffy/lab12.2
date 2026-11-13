// Import express 
import express from 'express' 


const app =express();
const port= 3000


// app.use(express.static('./public'));

 
app.get("/api/funfact", async (req, res)=>{
   // res.send("hello") 
   const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

    //try catch for api response
try {
    const apiResponse = await fetch(url);
    // make conditions to make sure theres no errors
    if (apiResponse.status === 404) {
      return res.status(404).json({ message: 'fun fact was not found' });
    }
    if (!apiResponse.ok) {
      throw new Error(`External API returned status ${apiResponse.status}`)
    }
     const funFact = await apiResponse.json();

     } catch (error) {
    console.error('Error fetching fun facts:', error);
    res.status(500).json({ message: 'Failed to fetch data from the external API.' });
  }
})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});