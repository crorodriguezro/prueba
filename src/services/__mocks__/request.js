const fs = require('fs')

export function request (callback) {
  fs.readFile(`./src/services/__mockData__/menu.json`, 'utf8', (err, data) => {
    if (err) throw err
    callback(JSON.parse(data).menu)
  })
}
