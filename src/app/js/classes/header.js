/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/**
 * Clase que crea un componente Header, recibe como parámetro una
 * función callback que es llamada cuando se hace una búsqueda
 */
class Header {
    constructor(callback) {
        const header = createComponent(undefined, [
            {'key': 'id', 'value': 'header'},
        ], 'div');
        header.className = 'header fixed-top';
        const component = createComponent(undefined, [], 'div');
        component.className = 'nav';
        const search = createComponent(undefined, [], 'div');
        search.className = 'input-group mb-3';
        const input = createComponent(undefined, [{'key': 'type', 'value': 'text'},
            {'key': 'placeholder', 'value': 'Game to search... (press enter)'},
            {'key': 'arial-label', 'value': 'Game to search... (press enter)'},
            {'key': 'arial-describedby', 'value': 'basic-addon2'},
            {'key': 'id', 'value': 'form-control'},
        ], 'input');
        input.className = 'form-control text-white bg-dark';
        input.addEventListener('keyup', callback);

        header.appendChild(component);
        component.appendChild(search);
        search.appendChild(input);

        this.header = header;
    }
    /**
     * @return {component} Devuelve el objeto de tipo componente creado.
     */
    get() {
        return this.header;
    }
}
