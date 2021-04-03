  exports.handler = async function call() {
  const apiKey =  process.env.apiKey

  let fet = await fetch(`https://api.waqi.info/feed/${cityName}/?token=${apiKey}`);
  let result = fet.json();
    return result
}