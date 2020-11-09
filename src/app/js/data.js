function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

function httpRequest(url, callback) {
    fetch(url).then((response) => response.json()).then((myJson) => callback(myJson)).catch((e) => console.log(e));
}
