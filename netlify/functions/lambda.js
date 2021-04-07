const fetch = require("node-fetch");
const cityName = require("../../src/index");

exports.handler = async event => {
  const apiKey =  process.env.apiKey

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

// la restituzione si attiva? .()
// cityName da dove viene preso?
// import serve?
// Lo statusCode serve?
// ...e il body?