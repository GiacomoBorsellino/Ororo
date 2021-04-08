const fetch = require("node-fetch");

exports.handler = async (event) => {
  const apiMeteo =  process.env.apiMeteo;

  const responseO = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${event.queryStringParameters.lat}&lon=${event.queryStringParameters.lon}&appid=${apiMeteo}`)
  const resultO = await responseO.json() 

  const pass = (resultO) => {
    return {
      statusCode: 200,
      body: JSON.stringify(resultO)
    }
  }

  return pass(resultO)
}

