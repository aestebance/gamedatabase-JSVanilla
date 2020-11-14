/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

/**
 *
 */
class Loading {
    constructor(loadingText = 'loading....') {
        const divBorder = createComponent(undefined, [
            {'key': 'id', 'value': 'loading'},
        ], 'div');
        divBorder.className = 'd-flex justify-content-center';
        const border = createComponent(undefined, [
            {'key': 'role', 'value': 'status'},
        ], 'div');
        border.className = 'spinner-border text-light m-5';
        const loading = createComponent(undefined, [], 'span');
        loading.className = 'sr-only';
        const textLoading = createComponent(loadingText);
        divBorder.appendChild(border);
        loading.appendChild(textLoading);
        border.appendChild(loading);

        this.div = divBorder;
    }

    get() {
        return this.div;
    }
}
