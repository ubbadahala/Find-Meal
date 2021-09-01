/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-len */
class DataSource {
  static searchFood (keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals)
        }

        return Promise.reject(`${keyword} is not found`)
      })
  }
}

export default DataSource
