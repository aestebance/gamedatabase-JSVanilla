/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

/**
 *
 */
class Game {
    constructor(json) {
        (json.id) ? this.id = json.id : this.id = null;
        (json.name) ? this.name = json.name : this. name = null;
        (json.description) ?
            this.description = json.description :
            this.description = null;
        (json.metacritic) ?
            this.metacritic = json.metacritic :
            this.metacritic = 'n\a';
        (json.released) ? this.released = json.released : this.released = null;
        (json.background_image) ?
            this.backgroundImage = json.background_image :
            this.backgroundImage = 'https://ctt.trains.com/sitefiles/images/no-preview-available.png';
        (json.background_image_additional) ?
            this.backgroundImage2 = json.background_image_additional :
            this.backgroundImage2 = 'https://ctt.trains.com/sitefiles/images/no-preview-available.png';
        (json.website) ? this.website = json.website : this.website = null;
        (json.rating) ? this.rating = json.rating : this.rating = null;
        (json.reddit_url) ? this.reddit = json.reddit_url : this.reddit = null;
        (json.metacritic_url) ?
            this.metacritic_url = json.metacritic_url :
            this.metacritic_url = null;
        (json.platforms) ?
            this.platforms = json.platforms :
            this.platforms = null;
        (json.parent_platforms) ?
            this.pPlatforms = json.parent_platforms :
            this.pPlatforms = null;
        (json.stores) ? this.stores = json.stores : this.stores = null;
        (json.developers) ?
            this.developers = json.developers :
            this.developers = null;
        (json.clip) ? this.clips = json.clip : this.clips = null;
        (json.genres) ? this.genres = json.genres : this.genres = null;
        (json.short_screenshots) ?
            this.screenshots = json.short_screenshots :
            this.screenshots = null;
    }
}
