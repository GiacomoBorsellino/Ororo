import fetch from 'node-fetch';

const apiKey =  process.env.apiKey



exports.handler = async (event, context) => {

  const response = await fetch(`https://api.waqi.info/feed/${context.query.cityName}/?token=${apiKey}`)
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