import fetch from "node-fetch";

const API_ENDPOINT = `https://api.waqi.info/feed/rome/?token=${apiKey}`;

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(result => ({
      statusCode: 200,
      body: JSON.stringify(result)
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};