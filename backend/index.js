const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;
const ABI = require("./abi.json");


app.use(cors());
app.use(express.json());


app.get("/getNameAndBalance", async (req, res) => {
    const { userAddress } = req.query;

  const response = await Moralis.EvmApi.utils.runContractFunction({
   
    address: "0x805Cdc684a25AD7dea390fF57319D812Bc45737B",
    functionName: "getMyName",
    abi: ABI,
    params: { _user: userAddress },
  });

  const jsonResponseName = response.raw;
  
  const jsonRespnse = {
    name : jsonResponseName,
  }

    return res.status(200).json(jsonRespnse);
});



Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});