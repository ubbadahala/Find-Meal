class copyrightData extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <hr class="mb-6 border-t" />
        <div class="text-center">
            <a class="inline-block text-sm text-green-500 align-baseline hover:text-green-800" href="https://themealdb.com/api.php" target="_blank">
                Database provided by themealdb.com/api.php
            </a>
        </div>
        <div class="text-center">
            <a class="inline-block text-sm text-green-500 align-baseline hover:text-green-800" href="https://source.unsplash.com" target="_blank">
                Random food images provided by source.unsplash.com
            </a>
        </div>
        `
  }
}

customElements.define('copyright-data', copyrightData)
