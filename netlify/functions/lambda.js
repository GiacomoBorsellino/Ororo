const urlApi = `https://api.waqi.info/feed/${cityName}/?token=${apiKey}`

exports.handler = async (event, context) => {
  return fetch(urlApi)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: Json.stringify(data)
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};