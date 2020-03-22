let url = 'https://swapi.co/api/people/1'
fetch(url)
  .then(function (response) {
    if (response.ok) {
      // true when response.code === 200
      return response.json()
    }
    throw new Error('Cannot process')
  })
  .then(function (data) {
    // do stuff with the 'data' object
  })
  .catch(function (error) {
    console.error(error.message)
  })
