import '../component/search-bar.js'
import '../component/search-header.js'
import '../component/copyright-data.js'
import '../component/food-list.js'
import '../component/scroll-button.js'

import DataSource from '../data/data-source.js'

const main = () => {
  const searchElement = document.querySelector('search-bar')
  const foodListElement = document.querySelector('food-list')

  const renderResult = (results) => {
    foodListElement.foods = results
  }

  const fallbackResult = (message) => {
    foodListElement.renderError(message)
  }

  // eslint-disable-next-line space-before-function-paren
  const onButtonSearchClicked = async() => {
    try {
      const result = await DataSource.searchFood(searchElement.value)
      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  searchElement.clickEvent = onButtonSearchClicked
}

export default main
