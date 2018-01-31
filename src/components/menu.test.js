jest.mock('../services/request')
const menuService = require('../services/menuService')
const menu = require('./menu')

describe('#getMenu()', () => {
  it('Debe convertir el json en nodos', (done) => {
    const callback = (data) => {
      const menuComponent = menu.getMenu(data)
      expect(menuComponent).toBeDefined()
      expect(menuComponent.lastChild).toBeDefined()
      expect(menuComponent.lastChild.firstChild).toBeDefined()
      expect(menuComponent.lastChild.firstChild.firstChild).toBeDefined()
      const textFirstLink = menuComponent.lastChild.firstChild.firstChild.textContent
      expect(textFirstLink).toEqual('soat')
      done()
    }
    menuService.getMenuData(callback)
  })
})
