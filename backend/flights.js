const router=express.Router();
const express=require('express');
const flightData=require('../flightsData');
 router.get('/getFlightsData/:source/:destination/:date',async (req,res)=>{
    const source = req.params.source;
    const destination = req.params.destination;
    const date = new Date(req.params.date);
    if(!source || !destination||!date){
      return res.status(400).json({message:"either source or destiantion is missing"});
    }
    else {
      try {
        //getting the data from flightData collection 
        const matchingFlightsdata=await flightsData.find({
          source: source,
          destination: destination,
          date: date,
        });
        if(matchingFlightsdata){
          const flightsInfo = matchingFlightsdata.map(flight => ({
            flight_name: flight.flight_name,
            price: flight.price,
          }));
          res.status(200).json(flightsInfo);
        }
        else{
          return res.status(200).json({message:"no flight found"});
        }
      } catch (error) {
        return res.status(400).json({error:"some error occured"});
      }
    }
  })