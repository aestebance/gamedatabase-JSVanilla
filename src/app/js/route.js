function router(route, data = null) {
    renderLayout(function () {

        switch (route) {
            case '/home':
                httpRequest(url, showGames, true);
                window.addEventListener('scroll', scrollEventListener);
                break;
            default:
                break;
        }
    });
}
