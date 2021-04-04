const urlApi = `https://api.waqi.info/feed/${cityName}/?token=${apiKey}`

exports.handler = async function call(event, context) {

  const response = await fetch(urlApi);
  const result = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(result)
};

}