class Game {
    constructor(json) {
        this.id = json.id;
        this.name = json.name;
        this.released = json.released;
        if (json.background_image === null) {
            this.backgroundImage = 'https://ctt.trains.com/sitefiles/images/no-preview-available.png';
        } else {
            this.backgroundImage = json.background_image;
        }
        this.rating = json.rating;
        this.platforms = json.platforms;
        this.pPlatforms = json.parent_platforms;
        this.stores = json.stores;
        this.clips = json.clip;
        this.genres = json.genres;
        this.screenshot = json.short_screenshots;
        if (json.metacritic != undefined) {
            this.metacritic = json.metacritic;
        } else {
            this.metacritic = 'n/a';
        }
    }
}
