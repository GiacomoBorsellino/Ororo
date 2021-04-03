exports.handler = async () => {
  const apiKey =  process.env.apiKey

  const response = {apiKey: apiKey}

  const pass = (result) => {
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  }

  return pass(response)
}