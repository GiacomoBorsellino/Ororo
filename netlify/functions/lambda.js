exports.handler = async event => {
  const apiKey =  process.env.apiKey

  const fet = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`)
  const response = await fet.json() 

  // La funzione fa da back-end: elaboriamo dei dati e li rimandiamo al front-end in formato JSON
  // con uno statusCode 200, cioè "successo".
  const pass = (body) => {
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  }

  return pass(result)
}