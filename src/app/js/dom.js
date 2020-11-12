/**
 * 
 */
function hiddeDropDown() {
    const db = document.getElementById('dropdownMenuButton');
    db.classList.add('hidden');
}
/**
 * 
 * @param {*} arr 
 */
function activateDropDown(arr, clear = false) {
    const dd = document.getElementById('dropdown');
    const db = document.getElementById('dropdownMenuButton');
    db.innerText = arr.results[0].name;
    url += arr.results[0].id;
    if (clear) {
        clearGames();
    }

    db.classList.remove('hidden');
    const div = dd.lastChild;
    div.innerHTML = '';
    arr.results.forEach(element => {
        const a = createComponent(undefined, [], 'a');
        a.classList = 'dropdown-item';
        a.setAttribute('href', '#');
        a.setAttribute('id', element.id);
        a.innerText = element.name;
        a.addEventListener('click', clickDropDown);
        div.appendChild(a); 
    });
    httpRequest(url, showGames, true);

    if (document.getElementById('loading')) {
        showLoading(false);
    }
}
/**
 * 
 * @param {*} route 
 */
function activateRoute(route) {
    const ul = document.getElementById('routes');
    ul.childNodes.forEach(element => {
        (element.innerText === route.slice(1)) ? element.classList.add('active') : element.classList.remove('active');
    });
}
/**
 * 
 * @param {*} loading 
 */
function showLoading(loading = true) {
    const app = document.getElementById('app');
    if (loading) {
        const lo = new Loading();
        app.insertBefore(lo.get(), app.childNodes[0]);
    } else {
        while(document.getElementById('loading')) {
            const lo = document.getElementById('loading');
            app.removeChild(lo);
        }
    }
}

/**
 * 
 */
function createAlbum() {
    const album = createComponent(undefined, [], 'div');
    album.className = 'album py-5';
    const container = createComponent(undefined, [], 'div');
    container.className = 'container-lg';
    container.setAttribute('id', 'container');
    const row = createComponent(undefined, [], 'div');
    row.className = 'row';
    row.setAttribute('id', 'row');
    album.appendChild(container);
    container.appendChild(row);
    return album;
}

/**
 * 
 */
function clearGames() {
    const row = document.getElementById('row');
    row.innerHTML = '';
}

/**
 * 
 * @param {*} json 
 */
function createGames(json) {
    const games = [];
    json.results.forEach(function(game) {
        const gam = new Game(game);
        games.push(gam);
    });
    return games;
}

/**
 * 
 * @param {*} gamesArr 
 */
function showGames(gamesArr, clear = false) {
    const row = document.getElementById('row');
    if (clear) {
        clearGames();
    }

    const games = createGames(gamesArr);
    if (gamesArr.next !== null) {
        next = gamesArr.next;
    } else {
        next = null;
    }

    games.forEach(function(game) {
        const productElement = new GameComponent(game, createfrontFrame);
        row.appendChild(productElement.get());
    });

    if (document.getElementById('loading')) {
        showLoading(false);
    }
}

/**
 * 
 * @param {*} renderDone 
 */
function renderLayout(renderDone) {
    showLoading();
    const app = document.getElementById('app');
    if (document.querySelector('.header') == null) {
        const header = new Header(updateComponents);
        app.appendChild(header.get());
    }
    if (document.querySelector('.navbar') == null) {
        const nav = new Navbar(navbarEvent);
        const head = document.getElementById('header');
        head.appendChild(nav.get());
    }
    if (document.querySelector('.album') == null) {
        app.appendChild(createAlbum());
    }
    renderDone();

}

/**
 * This function creates a web component
 * @param {string} text - if the component is a textNode you must to enter the text here.
 * @param {array} attributes - add the attributes to component. Accept a Json array like this [{'key' : '', 'value' : ''}]
 * @param {string} type - enter the type of the component. textNode for default.
 * @return {Element}
 */
function createComponent(text = undefined, attributes, type) {
    let component;

    if (text != undefined) {
        component = document.createTextNode(text);
    } else {
        component = document.createElement(type);
        attributes.forEach(function(attribute) {
            component.setAttribute(attribute.key, attribute.value);
        });
    }
    return component;
}
