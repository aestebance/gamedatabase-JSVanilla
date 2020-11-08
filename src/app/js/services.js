let url = "https://api.rawg.io/api/games?page_size=18";

/**
 * 
 * TO DO:    MAKE  JS-DOCs
 * 
 */

const linkHandler = function(event) {
    event.preventDefault();
    event.stopPropagation();

    const element = document.getElementById('row');
    if (element) {
        element.remove();
    }
};

function showLoading(loading = true) {
    const row = document.getElementById('row');
    row.innerHTML = '';
    if(loading) {
        row.classList.add('loading');
        row.appendChild(createLoading());
    } else {
        row.classList.remove('loading');
    }
}

function scrollEventListener(e) {
    let app = document.getElementsByTagName('html')[0];
    if (app.scrollTop + app.clientHeight >= app.scrollHeight) {
        httpRequest(url, showGames);
    }
}