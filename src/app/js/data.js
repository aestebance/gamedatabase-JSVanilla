let url = 'https://api.rawg.io/api/games?page_size=18';

function httpRequest(url, callback, clear = false) {
    fetch(url).then((response) => response.json()).then((myJson) => callback(myJson, clear)).catch((e) => console.log(e));
}
