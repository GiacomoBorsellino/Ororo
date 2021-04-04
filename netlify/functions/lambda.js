import fetch from "node-fetch";

const apiKey = process.env.apiKey;

const API_ENDPOINT = `https://api.waqi.info/feed/${cityName}/?token=${apiKey}`;

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: `${data}`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};