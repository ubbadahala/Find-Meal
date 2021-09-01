class searchHeader extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="px-8 text-center">
            <h3 class="pt-4 pb-4 uppercase tracking-tighter text-3xl text-green-500 font-black">Find Your Meals</h3>
                <p class="text-sm text-gray-700">
                    Just type down your favorite meal down here and find out how to make it from the instruction below and even the Youtube video tutorial! Or you can leave it blank to see all foods available.
                </p>
        </div>
        `
  }
}

customElements.define('search-header', searchHeader)
