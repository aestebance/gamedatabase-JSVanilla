/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/**
 * Función a la que se le llama cuando se pulsa en "more" en algún juego.
 * @param {*} e Variable que contiene el evento.
 */
function createfrontFrame(e) {
    showLoading();
    httpRequest('https://api.rawg.io/api/games/' + e.srcElement.id, showModal, false, false);
}

/**
 * Función a la que se le llama cuando se pulsa en un dropdown.
 * @param {*} e Variable que contiene el evento
 */
function clickDropDown(e) {
    showLoading();
    const db = document.getElementById('dropdownMenuButton');
    db.innerText = e.srcElement.innerText;
    const newUrl = removeNumbersUrl(url);
    url = newUrl + e.srcElement.id;
    httpRequest(url, showGames, true);
}

/**
 * Función a la que se le llama cuando se hace click en un enlace del navbar
 * @param {*} e Variable que contiene el evento
 */
const navbarEvent = function(e) {
    e.preventDefault();
    e.stopPropagation();
    router('/' + e.srcElement.innerText);
};

/**
 * Función a la que se llama para agregar más juegos al hacer scrolldown
 * @param {*} e Variable que contiene el evento
 */
const updateComponents = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.key === 'Enter') {
        window.scrollTo(0, 0);
        showLoading();
        next = null;
        (e.target.value.length >= 1)?
            httpRequest(url + '&search=' + e.target.value, showGames, true) :
            httpRequest(url, showGames, true);

        e.target.value = '';
    }
};

/**
 * Función a la que se llama cuando se hace scroll para ver si estamos al final
 * de la página
 * @param {*} e Variable que contiene el evento
 */
function scrollEventListener(e) {
    const app = document.getElementsByTagName('html')[0];
    if (app.scrollTop + app.clientHeight >= app.scrollHeight) {
        showLoading();
        (next) ? httpRequest(next, showGames) : showLoading(false);
    }
}
