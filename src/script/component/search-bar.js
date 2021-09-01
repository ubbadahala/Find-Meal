/* eslint-disable no-tabs */
/* eslint-disable accessor-pairs */
class SearchBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  /**
     * @param {any} event
     */
  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get value () {
    return this.querySelector('#searchElement').value
  }

  render () {
    this.innerHTML = `
        <div id="search-container">
            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700">
                    Food Name
				</label>
                <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="searchElement" type="search" placeholder="Enter Food Name..." />
            </div>
            <div class="mb-6 text-center">
                <button class="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline" id="searchButtonElement" type="submit">
					Search
				</button>
            </div>
        </div>
        `

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent)
  }
}

customElements.define('search-bar', SearchBar)
