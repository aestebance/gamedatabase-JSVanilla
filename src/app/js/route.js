function router(route, data = null) {
    switch(route) {
        case '/home':
            document.getElementById('app').appendChild(createHeader(updateComponents));
            document.getElementById('app').appendChild(createAlbum());
            httpRequest(url, showGames);
            window.addEventListener('scroll', scrollEventListener); 
            break;
        default:
            break;
    }
}