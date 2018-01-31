export function request (callback) {
  var xhttp
  xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        const data = JSON.parse(this.responseText)
        callback(data)
      } else {
        callback(null, xhttp.statusText)
      }
    }
  }
  xhttp.open('GET', 'http://localhost:9000/menu', true)
  xhttp.send()
}
