const fetch = require("node-fetch");
const apiKey =  process.env.apiKey;
const cityName = document.getElementById("cityName").value;

exports.handler = async (event) => {

  const response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`)
  const result = await response.json() 

  const pass = (result) => {
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  }

  return pass(result)
}

// cityName da dove viene preso?
