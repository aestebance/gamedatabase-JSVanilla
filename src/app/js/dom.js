/* eslint-disable linebreak-style */
/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/**
 *
 * @param {*} game
 * @param {*} clear
 */
function showModal(game, clear=false) {
    const g = new Game(game);
    console.log(g);

    const mHeader = document.getElementById('staticBackdropLabel');
    (g.name) ? mHeader.innerText = g.name : mHeader.innerText = 'n/a';
    const mBody = document.getElementById('mBody');
    if (g.clips) {
        const media = createComponent(undefined, [], 'video');
        media.setAttribute('src', g.clips.clip);
        media.setAttribute('id', 'video');
        media.setAttribute('controls', '');
        mBody.appendChild(media);
    } else {
        const imgDiv = createComponent(undefined, [], 'div');
        imgDiv.className = 'img-modal';
        const img = createComponent(undefined, [], 'img');
        img.setAttribute('src', g.backgroundImage);
        img.setAttribute('alt', g.name);
        img.className = 'img-modal';
        imgDiv.appendChild(img);
        mBody.appendChild(imgDiv);
    }

    const divRelMeta = createComponent(undefined, [], 'div');
    divRelMeta.className = 'divRelMeta';
    mBody.appendChild(divRelMeta);

    if (g.released) {
        const divReleased = createComponent(undefined, [], 'div');
        divReleased.className = 'divReleased';
        const released = new Date(g.released);
        const button = createComponent(undefined, [], 'button');
        button.className = 'btn btn-outline-warning';
        button.innerText = 'Released on: ' + released.toLocaleDateString('es-ES');
        button.setAttribute('type', 'button');
        button.setAttribute('disabled', '');
        divReleased.appendChild(button);
        divRelMeta.appendChild(divReleased);
    }
    // No se comprueba porque no puede ser null al tener asignación en la clase
    const divMeta = createComponent(undefined, [], 'div');
    divMeta.className = 'divMeta';
    const button = createComponent(undefined, [], 'button');
    button.className = 'btn btn-outline-success';
    button.innerText = 'Metacritic: ' + g.metacritic;
    button.setAttribute('type', 'button');
    divMeta.appendChild(button);
    divRelMeta.appendChild(divMeta);

    if (g.description) {
        const textDiv = createComponent(undefined, [], 'div');
        textDiv.className = 'textDiv';
        textDiv.innerHTML = '<span class="textDescription">Description: </span>' + g.description;
        mBody.appendChild(textDiv);
    }

    const listDiv = createComponent(undefined, [], 'div');
    listDiv.className = 'listDiv';
    const genreDiv = createComponent(undefined, [], 'div');
    genreDiv.className = 'genreDiv';
    const platformsDiv = createComponent(undefined, [], 'div');
    platformsDiv.className = 'platformsDiv';
    mBody.appendChild(listDiv);
    listDiv.appendChild(genreDiv);
    listDiv.appendChild(platformsDiv);

    if (g.genres) {
        const ulGenre = createComponent(undefined, [], 'ul');
        ulGenre.className = 'list-group';
        const genLi = createComponent(undefined, [], 'li');
        genLi.className = 'list-group-item list-group-item-dark active';
        genLi.innerText = 'Genres:';
        ulGenre.appendChild(genLi);
        g.genres.forEach((element) =>{
            const li = createComponent(undefined, [], 'li');
            const litext = createComponent(element.name);
            li.appendChild(litext);
            li.className = 'list-group-item list-group-item-dark';
            ulGenre.appendChild(li);
        });
        genreDiv.appendChild(ulGenre);
    }

    if (g.platforms) {
        const ulPlatforms = createComponent(undefined, [], 'ul');
        ulPlatforms.className = 'list-group';
        const platLi = createComponent(undefined, [], 'li');
        platLi.className = 'list-group-item list-group-item-dark active';
        platLi.innerText = 'Platforms:';
        ulPlatforms.appendChild(platLi);
        g.platforms.forEach((element)=> {
            const li = createComponent(undefined, [], 'li');
            const litext = createComponent(element.platform.name);
            li.appendChild(litext);
            li.className = 'list-group-item list-group-item-dark';
            ulPlatforms.appendChild(li);
        });

        platformsDiv.append(ulPlatforms);
    }
    const imgDiv = createComponent(undefined, [], 'div');
    imgDiv.className = 'imgDiv';
    mBody.appendChild(imgDiv);
    const img1 = createComponent(undefined, [], 'img');
    img1.setAttribute('src', g.backgroundImage);
    img1.className = 'rounded float-left imgMin';
    imgDiv.appendChild(img1);
    const img2 = createComponent(undefined, [], 'img');
    img2.setAttribute('src', g.backgroundImage2);
    img2.className = 'rounded float-right imgMin';
    imgDiv.appendChild(img2);

    const storeDiv = createComponent(undefined, [], 'div');
    storeDiv.className = 'StoreDiv';
    mBody.appendChild(storeDiv);

    if (g.stores) {
        const pStore = createComponent(undefined, [], 'p');
        pStore.innerText = 'Stores:';
        storeDiv.appendChild(pStore);
        g.stores.forEach((element)=> {
            const a = createComponent(undefined, [], 'a');
            a.setAttribute('href', element.url);
            a.setAttribute('target', '_blank');
            const button = createComponent(undefined, [], 'button');
            button.className = 'btn btn-secondary btnmodal';
            button.innerText = element.store.name;
            button.setAttribute('type', 'button');
            a.appendChild(button);
            storeDiv.appendChild(a);
        });
    }

    $('#modal').modal('show');
    showLoading(false);
}
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
 * @param {*} clear
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
    arr.results.forEach((element) => {
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
    ul.childNodes.forEach((element) => {
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
        while (document.getElementById('loading')) {
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
    if (document.getElementById('modal') == null) {
        const modal = new Modal();
        app.appendChild(modal.get());
    }
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
