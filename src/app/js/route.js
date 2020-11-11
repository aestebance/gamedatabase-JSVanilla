function router(route, data = null) {
    renderLayout(function () {
        window.addEventListener('scroll', scrollEventListener);

        switch (route) {
            case '/All':
                window.scrollTo(0,0);
                activateRoute(route);
                httpRequest(url, showGames, true);
                break;
            case '/Genre':
                window.scrollTo(0,0);
                activateRoute(route);
                httpRequest(url, showGames, true);
                break;
            case '/Platform':
                window.scrollTo(0,0);
                activateRoute(route);
                httpRequest(url, showGames, true);
                break;
            case '/Manufactured':
                window.scrollTo(0,0);
                activateRoute(route);
                httpRequest(url, showGames, true);
                break;
            default:
                break;
        }
    });
}
