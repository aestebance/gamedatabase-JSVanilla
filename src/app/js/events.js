/**
 * 
 * @param {*} e 
 */
function clickDropDown(e) {
    showLoading();
    const db = document.getElementById('dropdownMenuButton');
    db.innerText = e.srcElement.innerText;
    const newUrl = removeNumbersUrl(url);
    url = newUrl + e.srcElement.id;
    httpRequest(url, showGames, true);
    showLoading(false);
}

/**
 * 
 * @param {*} e 
 */
const navbarEvent = function(e) {
    e.preventDefault();
    e.stopPropagation();
    router('/' + e.srcElement.innerText);
}

/**
 * 
 * @param {*} e 
 */
const updateComponents = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.key === 'Enter') {
        window.scrollTo(0,0);
        showLoading();
        next = null;
        (e.target.value.length >= 1)? httpRequest(url + '&search=' + e.target.value, showGames, true) : httpRequest(url, showGames, true);
    }
};

/**
 * 
 * @param {*} e 
 */
function scrollEventListener(e) {
    const app = document.getElementsByTagName('html')[0];
    if (app.scrollTop + app.clientHeight >= app.scrollHeight) {
        showLoading();
        (next) ? httpRequest(next, showGames) : showLoading(false);
    }
}