let url = "https://api.rawg.io/api/games?page_size=20";

/**
 * 
 * TO DO:    MAKE  JS-DOCs
 * 
 */
const updateComponents = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.value.length <1) {
        url = 'https://api.rawg.io/api/games?page_size=20';
    } else {
        url = 'https://api.rawg.io/api/games?page_size=20&ordering=-rating&search=' + e.target.value;
    }

    const element = document.getElementById('games');
    if (element) {
        element.remove();
    }
    
    httpRequest(url, showGames);
};

const linkHandler = function(event) {
    event.preventDefault();
    event.stopPropagation();

    const element = document.getElementById('games');
    if (element) {
        element.remove();
    }
};

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

/**
 * @param {Function} callback
 * @return {Element}
 */
function createHeader(callback) {
    const component = createComponent(undefined, [{'key': 'class', 'value': 'nav'}], 'div');
    const search = createComponent(undefined, [{'key': 'class', 'value': 'search'}], 'div');
    const input = createComponent(undefined, [{'key': 'type', 'value': 'textarea'}], 'input');
    input.addEventListener('input', callback);

    component.appendChild(search);
    search.appendChild(input);

    return component;
}

/**
 *
 * @param {string} name - name of the game
 * @param {string} imgSrc - img url of the game
 * @param {string} gameUrl - game url for windows
 * @param {string} releasedDate - data of released in format YYY-MM-DD
 * @param {number} rating - rating of the game
 * @param {function} callback
 * @return {Element}
 */
function createGameComponent(name, imgSrc, releasedDate, rating, callback) {
    const component = createComponent(undefined, [{'key': 'class', 'value': 'component'}], 'div');
    const header = createComponent(undefined, [{'key': 'class', 'value': 'header'}], 'header');
    const link = createComponent(undefined, [{'key': 'href', 'value': ''}], 'a');
    link.addEventListener('click', callback);
    const img = createComponent(undefined, [{'key': 'src', 'value': imgSrc}, {'key': 'alt', 'value': name},
        {'key': 'class', 'value': 'img-class'}], 'img');

    const data = createComponent(undefined, [{'key': 'class', 'value': 'data'}], 'div');
    const gameName = createComponent(undefined, [{'key': 'class', 'value': 'title'}], 'p');
    const textName = createComponent(name);
    const date = new Date(releasedDate);
    const released = createComponent(undefined, [], 'p');
    const textReleased = createComponent('Publicado: ' + date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear());
    const rate = createComponent(undefined, [], 'p');
    const textRating = createComponent('Valoración: ' + rating);

    component.appendChild(header);
    component.appendChild(data);
    header.appendChild(link);
    link.appendChild(img);
    data.appendChild(gameName);
    data.appendChild(released);
    data.appendChild(rate);

    gameName.appendChild(textName);
    released.appendChild(textReleased);
    rate.appendChild(textRating);

    return component;
}

function showGames(gamesArr) {
    document.getElementById('app').appendChild(createComponent(undefined, [{'key': 'id', 'value': 'games'}], 'div'));
    if (gamesArr.next !== null) {
        url = gamesArr.next;
    }

    gamesArr.results.forEach(function(game) {
        const productElement = createGameComponent(game.name,
            game.background_image,
            game.released,
            game.rating,
            linkHandler);

        document.getElementById('games').appendChild(productElement);
    });
}

function scrollEventListener(e) {
    let app = document.getElementsByTagName('html')[0];
    if (app.scrollTop + app.clientHeight >= app.scrollHeight) {
        httpRequest(url, showGames);
    }
}
