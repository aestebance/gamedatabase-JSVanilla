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
    row.className = 'row';
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

function showGames(gamesArr) {
    const row = document.getElementById('row');

    const games = createGames(gamesArr);
    if (gamesArr.next !== null) {
        url = gamesArr.next;
    }

    games.forEach(function(game) {
        const productElement = new GameComponent(game, function() {});
        row.appendChild(productElement.get());
    });
}
