window.onload = function(params) {
    document.getElementById('app').appendChild(createHeader(updateComponents));
    
    httpRequest('https://api.rawg.io/api/games?page_size=15', showGames);
    
};