function httpRequest(url, callback) {
    fetch(url).then((response) => response.json()).then((myJson) => callback(myJson)).catch((e) => console.log(e));
}
