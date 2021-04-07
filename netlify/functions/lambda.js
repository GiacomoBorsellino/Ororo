const fetch = require("node-fetch");

exports.handler = async event => {
  const apiKey =  process.env.apiKey

  let cityName = document.getElementById("cityName").value; // Valore casella ricerca I
  
  const response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`)
  const data = await response.json() 

  const pass = (data) => {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }

  return pass(data)
}

// la restituzione si attiva? .()
// cityName da dove viene preso?
// import serve?
// Lo statusCode serve?
// ...e il body?