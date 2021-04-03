exports.handler = async () => {
  const apiKey =  process.env.apiKey

  const response = {apiKey: apiKey}

  const pass = (res) => {
    return {
      statusCode: 200,
      body: JSON.stringify(res)
    }
  }

  return pass(response)
}