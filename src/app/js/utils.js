/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
/**
 *
 * @param {*} e
 */
function clearModal(e) {
    document.getElementById('mBody').innerHTML = '';
}
/**
 *
 * @param {*} vidUrl
 */
function videoDiv(vidUrl) {
    const div = createComponent(undefined, [], 'video');
    div.setAttribute('id', 'my-video');
    div.classList = 'video-js';
    div.setAttribute('preload', 'auto');
    div.setAttribute('width', '50%');
    div.setAttribute('height', '50%');
    div.setAttribute('controls', '');

    const source = createComponent(undefined, [], 'source');
    source.setAttribute('src', vidUrl);
    source.setAttribute('type', 'video/mp4');
    div.appendChild(source);
    return div;
}

/**
 *
 * @param {*} text
 */
function removeNumbersUrl(text) {
    let j = 0;
    for (let i = text.length -1; i>=0; i--) {
        const num = '0123456789';
        if (num.indexOf(text.charAt(i), 0) !=-1) {
            j--;
        } else {
            break;
        }
    }

    if (j < 0) {
        text = text.slice(0, j);
    }

    return text;
}
