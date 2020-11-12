/**
 * 
 * @param {*} e 
 */
function createfrontFrame(e) {
    const l = createComponent(undefined, [], 'div');
    l.classList = 'prueba';
    l.setAttribute('style', 'width: ' + (screen.width - 40) +'px; height: ' + (screen.height - 60) + 'px;');
    div = document.getElementById('app');
    div.appendChild(l);
    l.appendChild(videoDiv(''));
}

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
        e.target.value = '';
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