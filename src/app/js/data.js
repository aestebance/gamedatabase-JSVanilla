let url = 'https://api.rawg.io/api/games?page_size=18';
let next = null;
let ordering = null;

function httpRequest(rUrl, callback, clear = false, order = true) {
    order ? (ordering ? rUrl += '&ordering=' + ordering : null) : null;
    fetch(rUrl).then((response) => response.json()).then((myJson) => callback(myJson, clear)).catch((e) => console.log(e));
}
