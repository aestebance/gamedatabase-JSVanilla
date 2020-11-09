function router(route, data = null) {
    switch (route) {
    case '/home':
        const header = new Header(updateComponents);
        document.getElementById('app').appendChild(header.get());
        document.getElementById('app').appendChild(createAlbum());
        showLoading();
        pausecomp(3000);
        httpRequest(url, showGames);
        window.addEventListener('scroll', scrollEventListener);
        break;
    default:
        break;
    }
}
