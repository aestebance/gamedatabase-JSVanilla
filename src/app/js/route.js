function router(route, data = null) {
    switch(route) {
        case '/home':
            const h = new Header(updateComponents);
            document.getElementById('app').appendChild(h.get());
            document.getElementById('app').appendChild(createAlbum());
            showLoading();
            httpRequest(url, showGames);
            window.addEventListener('scroll', scrollEventListener);
            showLoading(false);
            break;
        default:
            break;
    }
}