/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/**
 * Clase que recibe como parámetros del constructor un objeto de la clase game
 *  y una función callback. La clase crea una tarjeta con el juego para ser
 * mostrada. El callback es la función que llama cuando se pulsa en more.
 */
class GameComponent {
    constructor(game, callback) {
        const col = createComponent(undefined, [], 'div');
        col.className = 'col-md-4';
        const card = createComponent(undefined, [], 'div');
        card.className = 'card mb-4 shadow-sm text-white mb-3 bg-dark';
        let media = '';
        if (game.clips) {
            media = createComponent(undefined, [
                {'key': 'src', 'value': game.clips.clip},
                {'key': 'id', 'video': game.clips.clip},
                {'key': 'muted', 'true': game.clips.clip},
                {'key': 'playsinline', 'true': game.clips.clip},
                {'key': 'webkit-playsinline', 'true': game.clips.clip},
            ], 'video');
            /* Capturamos la promesa e ignoramos el error ya que por política
               de Chrome un vídeo no puede ser activado con mouseOver si el
               usuario no ha hecho click en la página previamente */
            media.addEventListener('mouseover', function() {
                media.play().then((response)=>{}).catch((e)=>{});
            });
            media.addEventListener('mouseout', function() {
                media.pause();
            });
        } else {
            media = createComponent(undefined, [
                {'key': 'src', 'value': game.backgroundImage},
                {'key': 'alt', 'value': game.name}], 'img');
        }

        media.className = 'bd-placeholder-img card-img-top';
        const cardBody = createComponent(undefined, [], 'div');
        cardBody.className = 'card-body text-center';
        const cardPlatforms = createComponent(undefined, [], 'div');
        cardPlatforms.className = 'card-platforms text-left';

        if (game.pPlatforms != undefined) {
            game.pPlatforms.forEach((element) => {
                let value = '';
                (platforms[element.platform.id]['url'] != undefined)?
                    value = platforms[element.platform.id]['url'] : null;

                const platform = createComponent(undefined, [
                    {'key': 'style', 'value': value},
                    {'key': 'title', 'value':
                        platforms[element.platform.id]['name']},
                ], 'div');
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
        const link = createComponent(undefined, [
            {'key': 'id', 'value': game.id},
        ], 'a');
        link.className = 'btn btn-primary';
        const textLink = createComponent('More [+]');
        link.addEventListener('click', callback);

        col.appendChild(card);
        card.appendChild(media);
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
    /**
     * @return {component} devuelve el componente creado.
     */
    get() {
        return this.component;
    }
}
