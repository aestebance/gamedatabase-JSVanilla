/* eslint-disable linebreak-style */
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
