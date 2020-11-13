/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/**
 *
 */
class GameComponent {
    constructor(game, callback) {
        const col = createComponent(undefined, [], 'div');
        col.className = 'col-md-4';
        const card = createComponent(undefined, [], 'div');
        card.className = 'card mb-4 shadow-sm text-white mb-3 bg-dark';
        const img = createComponent(undefined, [
            {'key': 'src', 'value': game.backgroundImage},
            {'key': 'alt', 'value': game.name}], 'img');

        img.className = 'bd-placeholder-img card-img-top';
        const cardBody = createComponent(undefined, [], 'div');
        cardBody.className = 'card-body text-center';
        const cardPlatforms = createComponent(undefined, [], 'div');
        cardPlatforms.className = 'card-platforms text-left';

        if (game.pPlatforms != undefined) {
            game.pPlatforms.forEach((element) => {
                let value = '';
                (platforms[element.platform.id]['url'] != undefined)?
                    value = platforms[element.platform.id]['url'] : null;

                const platform = createComponent(undefined, [], 'div');
                platform.setAttribute('style', value);
                platform.setAttribute('title',
                    platforms[element.platform.id]['name']);
                platform.className = 'platform';
                cardPlatforms.appendChild(platform);
            });
        }

        const gameScore = createComponent(undefined, [], 'div');
        gameScore.className = 'game-score';
        const textScore = createComponent(game.metacritic);
        let hSize = 'h3';

        if (game.name.length >= 30) {
            hSize = 'h6';
        } else if (game.name.length >= 25) {
            hSize = 'h5';
        } else if (game.name.length >= 21) {
            hSize = 'h4';
        }
        const title = createComponent(undefined, [], hSize);
        title.className = 'card-title text-left';
        const textTitle = createComponent(game.name);
        const genre = createComponent(undefined, [], 'p');
        genre.className = 'card-text text-left';
        let textG = '';
        let num = 0;
        if (game.genres) {
            game.genres.forEach((element) => {
                if (textG.length < 15) {
                    textG += element.name + ', ';
                } else {
                    num++;
                }
            });
            textG = textG.slice(0, -2);
            if (num > 0) {
                textG += ' + [' + num + ']';
            }
        }

        const textGenre = createComponent('Genres: ' + textG);
        const stores = createComponent(undefined, [], 'p');
        stores.className = 'card-text text-left';
        let textS = '';
        num = 0;
        if (game.stores) {
            game.stores.forEach((element) => {
                if (textS.length < 15) {
                    textS += element.store.name + ', ';
                } else {
                    num++;
                }
            });
            textS = textS.slice(0, -2);
            if (num > 0) {
                textS += ' + [' + num + ']';
            }
        }
        const textStores = createComponent('Stores: ' + textS);
        const link = createComponent(undefined, [], 'a');
        link.className = 'btn btn-primary';
        const textLink = createComponent('More [+]');
        link.setAttribute('id', game.id);
        link.addEventListener('click', callback);

        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(cardPlatforms);
        cardBody.appendChild(gameScore);
        gameScore.appendChild(textScore);
        cardBody.appendChild(title);
        title.appendChild(textTitle);
        cardBody.appendChild(genre);
        genre.appendChild(textGenre);
        cardBody.appendChild(stores);
        stores.appendChild(textStores);
        cardBody.appendChild(link);
        link.appendChild(textLink);

        this.component = col;
    }

    get() {
        return this.component;
    }
}
