/**
 * 
 * @param {*} e 
 */
const navbarEvent = function(e) {
    console.log(e.srcElement.innerText);
}

/**
 * 
 * @param {*} e 
 */
const updateComponents = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.value.length <1) {
        url = 'https://api.rawg.io/api/games?page_size=18';
    } else {
        url = 'https://api.rawg.io/api/games?page_size=18&search=' + e.target.value;
    }
    window.scrollTo(0,0);
    showLoading();
    httpRequest(url, showGames, true);
};

/**
 * 
 * @param {*} e 
 */
function scrollEventListener(e) {
    const app = document.getElementsByTagName('html')[0];
    if (app.scrollTop + app.clientHeight >= app.scrollHeight) {
        showLoading();
        httpRequest(url, showGames);
    }
}