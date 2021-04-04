const fetch = require('node-fetch');

exports.handler = async event => {

  const apiKey =  process.env.apiKey
  
  const response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`)
  const result = await response.json() 

  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  }

  return pass(result)
}