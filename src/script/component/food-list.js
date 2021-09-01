/* eslint-disable accessor-pairs */
import './food.item.js'

class FoodList extends HTMLElement {
  /**
     * @param {any} foods
     */
  set foods (foods) {
    this._foods = foods
    this.render()
  }

  render () {
    this.innerHTML = ''
    this._foods.forEach((food) => {
      const foodItemElement = document.createElement('food-item')
      foodItemElement.food = food
      this.appendChild(foodItemElement)
    })
  }

  renderError (message) {
    this.innerHTML = `
        <div class="modal z=2 animate-bounce fixed text-white px-6 py-4 border-0 rounded-2xl items-center inset-x-1.5 mx-10 lg:mx-96 md:mx-60 sm:mx-40 bottom-20 mb-4 bg-red-500">
            <span class="text-xl inline-block items-center mr-5 align-middle">
                <i class="fas fa-bell" />
            </span>
            <span class="inline-block items-center align-middle">
                <b class="capitalize">Error!</b> ${message}!
            </span>
        </div>
        `
  }
}

customElements.define('food-list', FoodList)
