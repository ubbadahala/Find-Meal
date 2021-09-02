/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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

const topBtn = document.getElementById('topButton')
window.onscroll = function () {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? topBtn.classList.remove('hidden')
    : topBtn.classList.add('hidden')
}

document.addEventListener('alpine:init', () => {
  Alpine.data('topBtn', () => ({
    scrolltoTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }))
})

const scrollProgress = Alpine.data('scrollProgress', () => {
  return {
    init () {
      window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        this.percent = Math.round((winScroll / height) * 100)
      })
    },
    circumference: 10 * 2 * Math.PI,
    percent: 0
  }
})

document.addEventListener('DOMContentLoaded', main)
