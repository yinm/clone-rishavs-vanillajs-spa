'use strict'

import About from './views/pages/About.js'
import Error404 from './views/pages/Error404.js'
import Home from './views/pages/Home.js'
import PostShow from './views/pages/PostShow.js'

import Navbar from './views/components/Navbar.js'
import Bottombar from './views/components/Bottombar.js'

import Utils from './services/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': Home,
  '/about': About,
  '/p/:id': PostShow,
}

const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementById('header_container')
  const content = null || document.getElementById('page_container')
  const footer = null || document.getElementById('footer_container')

  // Render the header and footer of the page
  header.innerHTML = await Navbar.render()
  await Navbar.after_render()
  footer.innerHTML = await Bottombar.render()
  await Bottombar.after_render()

  const request = Utils.parseRequestURL()
  const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '')

  const page = routes[parsedURL] ? routes[parsedURL] : Error404
  content.innerHTML = await page.render()
  await page.after_render()
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
