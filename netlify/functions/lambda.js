import fetch from "node-fetch";

const apiKey = process.env.apiKey;

exports.handler = async (event) => {
  return await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`)
    .then(response => response.json())
    .then(result => ({
      statusCode: 200,
      body: JSON.stringify(result)
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};