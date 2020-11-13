/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
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
    source.setAttribute('src', 'https://media.rawg.io/media/stories/d6e/d6e9068e5fb35421f00728309550df0a.mp4');
    source.setAttribute('type', 'video/mp4');
    div.appendChild(source);
    return div;
    /*  <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster=""
    data-setup="{}"
  >
    <source src="https://media.rawg.io/media/stories/d6e/d6e9068e5fb35421f00728309550df0a.mp4" type="video/mp4" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>*/
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
