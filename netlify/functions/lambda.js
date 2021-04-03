exports.handler = async () => {
  const apiKey =  process.env.apiKey

  const response = {apiKey: apiKey}

  const pass = (data) => {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }

  return pass(response)
}