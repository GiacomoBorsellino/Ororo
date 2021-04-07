import fetch from "node-fetch";

exports.handler = async event => {
  const apiKey =  process.env.apiKey

  const response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`)

  const pass = (response) => {
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  }

  return pass(response)
}

// la restituzione si attiva? .()
// cityName da dove viene preso?
// import serve?
// Lo statusCode serve?
// ...e il body?