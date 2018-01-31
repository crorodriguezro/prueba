jest.mock('./request')
const menuService = require('./menuService')

describe('#getMenuData()', () => {
  it('Debe cargar los datos del menu', (done) => {
    const callback = (data) => {
      expect(data).toBeDefined()
      expect(data[0].name).toEqual('soat')
      done()
    }
    menuService.getMenuData(callback)
  })
})
