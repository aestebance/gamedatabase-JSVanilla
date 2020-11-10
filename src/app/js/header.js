class Header {
    constructor(callback) {
        const header = createComponent(undefined, [], 'div');
        header.className = 'header fixed-top';
        header.setAttribute('id', 'header');
        const component = createComponent(undefined, [], 'div');
        component.className = 'nav';
        const search = createComponent(undefined, [], 'div');
        search.className = 'input-group mb-3';
        const input = createComponent(undefined, [{'key': 'type', 'value': 'text'},
            {'key': 'placeholder', 'value': 'Game to search...'},
            {'key': 'arial-label', 'value': 'Game to search...'},
            {'key': 'arial-describedby', 'value': 'basic-addon2'}], 'input');
        input.className = 'form-control text-white bg-dark';
        input.setAttribute('id', 'form-control');
        /*input.addEventListener('mouseenter', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.srcElement.classList.remove('bg-dark');
            e.srcElement.classList.add('bg-white');
            e.srcElement.classList.remove('text-white');
            e.srcElement.classList.add('text-dark');
        });

        input.addEventListener('mouseleave', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.srcElement.classList.remove('bg-white');
            e.srcElement.classList.add('bg-dark');
            e.srcElement.classList.remove('text-dark');
            e.srcElement.classList.add('text-white');
        });*/

        input.addEventListener('input', callback);

        header.appendChild(component);
        component.appendChild(search);
        search.appendChild(input);

        this.header = header;
    }

    get() {
        return this.header;
    }
}
