/* eslint-disable linebreak-style */
/* eslint-disable valid-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/**
 * Función que rellena y muestra el modal cuando se pincha en un juego
 * @param {*} game variable de tipo Game con los datos del juego
 */
function showModal(game) {
    const g = new Game(game);
    const mHeader = document.getElementById('staticBackdropLabel');
    (g.name) ? mHeader.innerText = g.name : mHeader.innerText = 'n/a';
    const mBody = document.getElementById('mBody');
    if (g.clips) {
        const media = createComponent(undefined, [
            {'key': 'src', 'value': g.clips.clip},
            {'key': 'id', 'value': 'video'},
            {'key': 'controls', 'value': 'controls'},
        ], 'video');
        mBody.appendChild(media);
    } else {
        const imgDiv = createComponent(undefined, [], 'div');
        imgDiv.className = 'img-modal';
        const img = createComponent(undefined, [
            {'key': 'src', 'value': g.backgroundImage},
            {'key': 'alt', 'value': g.name},
        ], 'img');
        img.className = 'img-modal';
        imgDiv.appendChild(img);
        mBody.appendChild(imgDiv);
    }

    const divRelMeta = createComponent(undefined, [], 'div');
    divRelMeta.className = 'divRelMeta';
    mBody.appendChild(divRelMeta);

    const divReleased = createComponent(undefined, [], 'div');
    divReleased.className = 'divReleased';
    let released = '';
    if (g.released) {
        released = new Date(g.released);
        released = 'Released on: ' + released.toLocaleDateString('es-ES');
    } else {
        released = 'Released on: n/a';
    }

    const button = createComponent(undefined, [
        {'key': 'type', 'value': 'button'},
        {'key': 'disabled', 'value': ''},
    ], 'button');
    button.className = 'btn btn-outline-warning';
    button.innerText = released;
    divReleased.appendChild(button);
    divRelMeta.appendChild(divReleased);
    // No se comprueba porque no puede ser null al tener asignación en la clase
    const divMeta = createComponent(undefined, [], 'div');
    divMeta.className = 'divMeta';
    const button2 = createComponent(undefined, [
        {'key': 'type', 'value': 'button'},
    ], 'button');
    button2.className = 'btn btn-outline-success';
    button2.innerText = 'Metacritic: ' + g.metacritic;
    divMeta.appendChild(button2);
    divRelMeta.appendChild(divMeta);

    if (g.description) {
        const textDiv = createComponent(undefined, [], 'div');
        textDiv.className = 'textDiv';
        textDiv.innerHTML = '<span class="textDescription">Description: </span>' + g.description;
        mBody.appendChild(textDiv);
    }

    const listDiv = createComponent(undefined, [], 'div');
    listDiv.className = 'listDiv';
    mBody.appendChild(listDiv);
    const lists = ['genres', 'platforms', 'publishers', 'developers'];
    lists.forEach((element) => {
        if (g[element].length > 0) {
            const childDiv = createComponent(undefined, [], 'div');
            childDiv.className = 'childDiv';
            listDiv.appendChild(childDiv);
            const ul = createComponent(undefined, [], 'ul');
            ul.className = 'list-group';
            const li = createComponent(undefined, [], 'li');
            li.className = 'list-group-item list-group-item-dark active';
            li.innerText = element + ':';
            ul.appendChild(li);
            g[element].forEach((e)=>{
                const subli = createComponent(undefined, [], 'li');
                let liText = '';
                if (element === 'platforms') {
                    liText = createComponent(e.platform.name);
                } else {
                    liText = createComponent(e.name);
                }
                subli.appendChild(liText);
                subli.className = 'list-group-item list-group-item-dark';
                ul.appendChild(subli);
            });
            childDiv.appendChild(ul);
        }
    });

    const divImages = createComponent(undefined, [], 'div');
    divImages.className = 'divImages';
    mBody.appendChild(divImages);
    const imgDiv1 = createComponent(undefined, [], 'div');
    imgDiv1.className = 'imgDiv';
    divImages.appendChild(imgDiv1);
    const img1 = createComponent(undefined, [
        {'key': 'src', 'value': g.backgroundImage},
    ], 'img');
    img1.className = 'imgMin';
    imgDiv1.appendChild(img1);
    const imgDiv2 = createComponent(undefined, [], 'div');
    imgDiv2.className = 'imgDiv';
    divImages.appendChild(imgDiv2);
    const img2 = createComponent(undefined, [
        {'key': 'src', 'value': g.backgroundImage2},
    ], 'img');
    img2.className = 'imgMin';
    imgDiv2.appendChild(img2);

    const storeDiv = createComponent(undefined, [], 'div');
    storeDiv.className = 'StoreDiv';
    mBody.appendChild(storeDiv);

    if (g.stores) {
        const pStore = createComponent(undefined, [], 'p');
        pStore.innerText = 'Stores:';
        storeDiv.appendChild(pStore);
        g.stores.forEach((element)=> {
            const a = createComponent(undefined, [
                {'key': 'href', 'value': element.url},
                {'key': 'target', 'value': '_blank'},
            ], 'a');
            const button = createComponent(undefined, [
                {'key': 'type', 'value': 'button'},
            ], 'button');
            button.className = 'btn btn-secondary btnmodal';
            button.innerText = element.store.name;
            a.appendChild(button);
            storeDiv.appendChild(a);
        });
    }

    $('#modal').modal('show');
    showLoading(false);
}
/**
 * Función que oculta el dropDown cuando se está en la página principal
 */
function hiddeDropDown() {
    const db = document.getElementById('dropdownMenuButton');
    db.classList.add('hidden');
}
/**
 * Función que activa el drowndown y lo rellena con los datos del array
 * @param {*} arr Datos a mostrar en el dropdown
 * @param {*} clear Indica si se deben borrar los juegos.
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
        const a = createComponent(undefined, [
            {'key': 'href', 'value': '#'},
            {'key': 'id', 'value': element.id},
        ], 'a');
        a.classList = 'dropdown-item';
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
 * Función que resalta el enlace activo en la navbar
 * @param {*} route Ruta a resaltar
 */
function activateRoute(route) {
    const ul = document.getElementById('routes');
    ul.childNodes.forEach((element) => {
        (element.innerText === route.slice(1)) ? element.classList.add('active') : element.classList.remove('active');
    });
}
/**
 * Función que muestra y oculta la ventana de cargando
 * @param {*} loading True or False. Indica si se debe mostrar u ocultar
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
 * Función que crea el álbum vacío para insertar luego juegos dentro
 */
function createAlbum() {
    const album = createComponent(undefined, [], 'div');
    album.className = 'album py-5';
    const container = createComponent(undefined, [
        {'key': 'id', 'value': 'container'},
    ], 'div');
    container.className = 'container-lg';
    const row = createComponent(undefined, [
        {'key': 'id', 'value': 'row'},
    ], 'div');
    row.className = 'row';
    album.appendChild(container);
    container.appendChild(row);
    return album;
}

/**
 * Función que borra todos los juegos en pantalla
 */
function clearGames() {
    const row = document.getElementById('row');
    row.innerHTML = '';
}

/**
 * Función que recibe el parámetro de la API en formato json y construye un grupo de objetos
 * de tipo game con los datos.
 * @param {*} json JSON extraído de la API
 * @return {array} Array de objetos tipo Game
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
 * Función que recibe un array de objetos tipo Game y lo recorre para crear una
 * tarjeta por cada juego y luego las muestra
 * @param {*} gamesArr Array de objetos tipo Game
 * @param {boolean} clear True or False. Indica si debe borrarse la pantalla
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
 * Función que renderiza la página y muestra la ventana loading hasta que finaliza el
 * renderizado
 * @param {callback} renderDone Función a la que llama cuando se ha terminado de renderizar la página
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
 * Función que crea un componente según los parámetros recibidos.
 * @param {string} text - Si este parámetro contiene un texto crea un Node.
 * @param {array} attributes - Array que contiene los atributos a agregar al componente.
 * @param {string} type - String que indica el tipo de componente que estamos crteando
 * @return {Element} Devuelve el componente creado.
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
