const updateComponents = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.value.length <1) {
        url = 'https://api.rawg.io/api/games?page_size=18';
    } else {
        url = 'https://api.rawg.io/api/games?page_size=18&search=' + e.target.value;
    }

    const element = document.getElementById('row');
    if (element) {
        element.remove();
    }

    const row = createComponent(undefined, [], 'div');
    row.className = "row";
    row.setAttribute('id', 'row');

    document.getElementById('container').appendChild(row);
    
    httpRequest(url, showGames);
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
    const header = createComponent(undefined, [], 'div');
    header.className = "header fixed";
    const component = createComponent(undefined, [], 'div');
    component.className = "nav";
    const search = createComponent(undefined, [], 'div');
    search.className = "input-group mb-3";
    const input = createComponent(undefined, [{'key': 'type', 'value': 'text'},
                                              {'key': 'placeholder', 'value': 'Game to search...'},
                                              {'key': 'arial-label', 'value': 'Game to search...'},
                                              {'key': 'arial-describedby', 'value': 'basic-addon2'}], 'input');
    input.className = "form-control";

    input.addEventListener('input', callback);
    
    header.appendChild(component);
    component.appendChild(search);
    search.appendChild(input);

    return header;
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
function createGameComponent(game, callback) {

    const col = createComponent(undefined, [], 'div');
    col.className = "col-md-4";
    const card = createComponent(undefined, [], 'div');
    card.className = "card mb-4 shadow-sm text-white mb-3 bg-dark";
    const img = createComponent(undefined, [{'key': 'src', 'value' : game.backgroundImage}, {'key':'alt', 'value': game.name}], 'img');
    img.className = "bd-placeholder-img card-img-top";
    const cardBody = createComponent(undefined, [], 'div');
    cardBody.className = "card-body text-center";
    const cardPlatforms = createComponent(undefined, [], 'div');
    cardPlatforms.className = "card-platforms text-left";
    const plat = new Platforms();
    const platform1 = createComponent(undefined, [{'key' : 'style', 'value' : plat.pc}], 'div');
    platform1.className = "platform";
    const platform2 = createComponent(undefined, [{'key' : 'style', 'value' : plat.ps4}], 'div');
    platform2.className = "platform";
    const gameScore = createComponent(undefined, [], 'div');
    gameScore.className = "game-score";
    const textScore = createComponent(game.metacritic);
    let hSize = 'h3';
    
    if (game.name.length >= 30) {
        hSize = 'h6';
    }
    else if (game.name.length >= 25) {
        hSize = 'h5';
    } else if (game.name.length >= 21) {
        hSize = 'h4';
    }
    const title = createComponent(undefined, [], hSize);
    title.className = "card-title text-left";
    const textTitle = createComponent(game.name);
    const released = createComponent(undefined, [], 'p');
    released.className = "card-text text-left";
    const textReleased = createComponent('Released: ' + game.released);
    const link = createComponent(undefined, [{'key' : 'href', 'value' : '#'}], 'a');
    link.className = 'btn btn-primary';
    const textLink = createComponent('More [+]');

    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(cardPlatforms);
    cardPlatforms.appendChild(platform1);
    cardPlatforms.appendChild(platform2);
    cardBody.appendChild(gameScore);
    gameScore.appendChild(textScore);
    cardBody.appendChild(title);
    title.appendChild(textTitle);
    cardBody.appendChild(released);
    released.appendChild(textReleased);
    cardBody.appendChild(link);
    link.appendChild(textLink);

    return col;
}

function createAlbum() {
    const album = createComponent(undefined,[],'div');
    album.className = "album py-5";
    const container = createComponent(undefined, [], 'div');
    container.className = "container-lg";
    container.setAttribute('id', 'container');
    const row = createComponent(undefined, [], 'div');
    row.className = "row";
    row.setAttribute('id', 'row');
    album.appendChild(container);
    container.appendChild(row);
    return album;
}

function showGames(gamesArr) {
    const row = document.getElementById('row');

    const games = createGames(gamesArr);
    if (gamesArr.next !== null) {
        url = gamesArr.next;
    }
  
    games.forEach(function(game) {
        const productElement = createGameComponent(game, linkHandler);
        row.appendChild(productElement);
    });
}

function createLoading(loadingText = 'Loading....') {
    const divBorder = createComponent(undefined, [], 'div');
    divBorder.className = 'd-flex justify-content-center';
    const border = createComponent(undefined, [], 'div');
    border.className = 'spinner-border text-light m-5';
    border.setAttribute('role', 'status');
    const loading = createComponent(undefined, [], 'span');
    loading.className = 'sr-only';
    const textLoading = createComponent(loadingText);
    divBorder.appendChild(border);
    loading.appendChild(textLoading);
    border.appendChild(loading);
  
    return divBorder;
  }