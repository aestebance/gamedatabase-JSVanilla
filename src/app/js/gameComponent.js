class GameComponent {
    constructor(game, callback) {

        const col = createComponent(undefined, [], 'div');
        col.className = "col-md-4";
        const card = createComponent(undefined, [], 'div');
        card.className = "card mb-4 shadow-sm text-white mb-3 bg-dark";
        const img = createComponent(undefined, [{ 'key': 'src', 'value': game.backgroundImage }, { 'key': 'alt', 'value': game.name }], 'img');
        img.className = "bd-placeholder-img card-img-top";
        const cardBody = createComponent(undefined, [], 'div');
        cardBody.className = "card-body text-center";
        const cardPlatforms = createComponent(undefined, [], 'div');
        cardPlatforms.className = "card-platforms text-left";
        const plat = new Platforms();
        const platform1 = createComponent(undefined, [{ 'key': 'style', 'value': plat.pc }], 'div');
        platform1.className = "platform";
        const platform2 = createComponent(undefined, [{ 'key': 'style', 'value': plat.ps4 }], 'div');
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
        const link = createComponent(undefined, [{ 'key': 'href', 'value': '#' }], 'a');
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

        this.component = col;
    }

    get() {
        return this.component;
    }
}