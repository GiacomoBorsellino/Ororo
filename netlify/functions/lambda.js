  exports.handler = async function call() {
  const apiKey =  process.env.apiKey

  let fet = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`);
  let result = fet.json();

  let pass = function(result) {
    return {
      statusCode = 200,
      body: JSON.stringify(result)
    }
  }
  let b = 5
  return b;
}