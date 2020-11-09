let url = "https://api.rawg.io/api/games?page_size=18";

function showLoading(loading = true) {
    const row = document.getElementById('row');
    row.innerHTML = '';
    if(loading) {
        row.classList.add('loading');
        const lo = new Loading();
        row.appendChild(lo.get());
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