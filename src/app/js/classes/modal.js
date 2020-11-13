/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */

/**
 *
 */
class Modal {
    constructor() {
        const modal = createComponent(undefined, [
            {'key': 'id', 'value': 'modal'},
            {'key': 'data-backdrop', 'value': 'static'},
            {'key': 'data-keyboard', 'value': 'false'},
            {'key': 'tabindex', 'value': '-1'},
            {'key': 'aria-labelledby', 'value': 'staticBackdropLabel'},
            {'key': 'aria-hidden', 'value': 'true'},
        ], 'div');
        modal.className = 'modal fade';

        const mDialog = createComponent(undefined, [], 'div');
        mDialog.className = 'modal-dialog modal-lg';
        modal.appendChild(mDialog);
        const mContent = createComponent(undefined, [], 'div');
        mContent.className = 'modal-content bg-dark text-white';
        mContent.setAttribute('id', 'mContent');
        mDialog.appendChild(mContent);
        const mHeader = createComponent(undefined, [], 'div');
        mHeader.className = 'modal-header';
        mContent.appendChild(mHeader);
        const h3 = createComponent(undefined, [], 'h3');
        h3.className = 'modal-title';
        h3.setAttribute('id', 'staticBackdropLabel');
        h3.innerText = 'Undefined';
        mHeader.appendChild(h3);
        const but = createComponent(undefined, [
            {'key': 'type', 'value': 'button'},
            {'key': 'data-dismiss', 'value': 'modal'},
            {'key': 'aria-label', 'value': 'Close'},
        ], 'button');
        but.className = 'close text-white';
        but.addEventListener('click', clearModal);
        mHeader.appendChild(but);
        const span = createComponent(undefined, [], 'span');
        span.setAttribute('aria-hiden', 'true');
        span.innerText = 'X';
        but.appendChild(span);
        const mBody = createComponent(undefined, [], 'div');
        mBody.className = 'modal-body';
        mBody.setAttribute('id', 'mBody');
        mContent.appendChild(mBody);
        const mFooter = createComponent(undefined, [], 'div');
        mFooter.className = 'modal-footer';
        mContent.appendChild(mFooter);
        const but2 = createComponent(undefined, [], 'button');
        but2.className = 'btn btn-primary';
        but2.setAttribute('type', 'button');
        but2.setAttribute('data-dismiss', 'modal');
        but2.innerText = 'Close';
        but2.addEventListener('click', clearModal);
        mFooter.appendChild(but2);

        this.modal = modal;
    }

    get() {
        return this.modal;
    }
}