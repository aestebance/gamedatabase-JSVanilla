class Game {
    constructor (json) {
        this.id = json.id;
        this.name = json.name;
        this.released = json.released;
        this.backgroundImage = json.background_image;
        this.rating = json.rating;
        this.platforms = json.platforms;
        this.pPlatforms = json.parent_platforms;
        this.stores = json.stores;
        this.clips = json.clip;
        this.screenshot = json.short_screenshots;
        if (json.metacritic != undefined) {
            this.metacritic = json.metacritic;
        } else {
            this.metacritic = "n/a";
        }   
    }
}

function createGames(json) {
    const games = [];
    json.results.forEach(function(game){
        let gam = new Game(game);
        games.push(gam);
    });
    return games;
}