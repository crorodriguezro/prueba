import {getMenu} from './components/menu'
import {getMenuData} from './services/menuService'

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menuContainer')
  getMenuData((response, err) => {
    if (err != null) {
      alert('Error cargando: ' + err)
    } else {
      const menuComponent = getMenu(response)
      menuContainer.appendChild(menuComponent)
      const loadingDiv = document.getElementById('loading')
      loadingDiv.className = 'hidden'
    }
  })
}, false)
