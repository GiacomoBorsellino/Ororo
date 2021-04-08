const fetch = require("node-fetch");

exports.handler = async (event) => {
  const apiKey =  process.env.apiKey;

  const response = await fetch(`https://api.waqi.info/feed/geo:${event.queryStringParameters.lon};${event.queryStringParameters.lat}/?token=${apiKey}`)
  const result = await response.json() 

  const pass = (result) => {
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  }

  return pass(result)
}

