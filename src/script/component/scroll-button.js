class scrollBtn extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <button @click="scrolltoTop" class="p-1 fixed bottom-10 right-10 animate-bounce z-10 rounded-full shadow-md bg-gray-100 hidden" id="topButton">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18">
                </path>
            </svg>
            <div x-data="scrollProgress" class="justify-center overflow-hidden rounded-full">
                <!-- Building a Progress Ring: https://css-tricks.com/building-progress-ring-quickly/ -->
                <svg class="w-10 h-10">
                <circle
                  class="text-gray-300"
                  stroke-width="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="10"
                  cx="20"
                  cy="20"
                />
                <circle
                  class="text-green-600"
                  stroke-width="5"
                  :stroke-dasharray="circumference"
                  :stroke-dashoffset="circumference - percent / 100 * circumference"
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="10"
                  cx="20"
                  cy="20"
                />
              </svg>
            </div>
        </button>
        `
  }
}

customElements.define('scroll-button', scrollBtn)
