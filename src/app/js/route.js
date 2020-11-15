/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/**
 * Funcion que enruta en función del enlace pinchado
 * @param {*} route Dirección de la ruta que hay que mostrar
 */
function router(route) {
    renderLayout(function() {
        window.addEventListener('scroll', scrollEventListener);

        switch (route) {
        case '/All':
            window.scrollTo(0, 0);
            activateRoute(route);
            hiddeDropDown();
            url = 'https://api.rawg.io/api/games?page_size=18';
            httpRequest(url, showGames, true);
            break;
        case '/Genre':
            window.scrollTo(0, 0);
            activateRoute(route);
            httpRequest('https://api.rawg.io/api/genres', activateDropDown, true, false);
            url = 'https://api.rawg.io/api/games?page_size=18&genres=';
            break;
        case '/Platform':
            window.scrollTo(0, 0);
            activateRoute(route);
            httpRequest('https://api.rawg.io/api/platforms/lists/parents', activateDropDown, true, false);
            url = 'https://api.rawg.io/api/games?page_size=18&parent_platforms=';
            break;
        case '/Store':
            window.scrollTo(0, 0);
            activateRoute(route);
            httpRequest('https://api.rawg.io/api/stores', activateDropDown, true, false);
            url = 'https://api.rawg.io/api/games?page_size=18&stores=';
            break;
        default:
            break;
        }
    });
}
