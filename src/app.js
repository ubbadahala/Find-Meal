import 'regenerator-runtime'
import 'tailwindcss/dist/tailwind.min.css'
import 'alpinejs/dist/cdn.min.js'
import './styles/style.css'

import main from './script/view/main.js'

const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none')
  }, 3000)
})

document.addEventListener('DOMContentLoaded', main)
