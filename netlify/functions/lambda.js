exports.handler = async () => {
  const apiKey =  process.env.apiKey

  const fet = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`);

  const pass = (response) => {
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  }

  return pass(response)
}