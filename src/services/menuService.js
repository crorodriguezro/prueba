export function getMenuData(callback) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            callback(data);
        }
    };
    xhttp.open("GET", "http://localhost:9000/menu", true);
    xhttp.send();
}