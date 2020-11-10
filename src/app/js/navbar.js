class Navbar {
    constructor(callback) {
        const container = createComponent(undefined, [], 'div');
        container.className = 'container';

        const navbar = createComponent(undefined, [], 'nav');
        navbar.className = 'navbar navbar-expand-lg navbar-dark bg-black';
        container.appendChild(navbar);

        const divnav = createComponent(undefined, [], 'div');
        divnav.className = 'collapse navbar-collapse';
        divnav.setAttribute('id', 'navbarSupportedContent');
        navbar.appendChild(divnav);

        const ul = createComponent(undefined, [], 'ul');
        ul.className = "navbar-nav mr-auto";
        divnav.appendChild(ul);
        ul.addEventListener('click', callback);

        const li1 = createComponent(undefined, [], 'li');
        li1.className = 'nav-item active';
        const a1 = createComponent(undefined, [], 'a');
        a1.className = 'nav-link';
        a1.setAttribute('href', '#');
        const a1text = createComponent('All');
        ul.appendChild(li1);
        li1.appendChild(a1);
        a1.appendChild(a1text);

        const li2 = createComponent(undefined, [], 'li');
        li2.className = 'nav-item';
        const a2 = createComponent(undefined, [], 'a');
        a2.className = 'nav-link';
        a2.setAttribute('href', '#');
        const a2text = createComponent('Genre');
        ul.appendChild(li2);
        li2.appendChild(a2);
        a2.appendChild(a2text);

        const li3 = createComponent(undefined, [], 'li');
        li3.className = 'nav-item';
        const a3 = createComponent(undefined, [], 'a');
        a3.className = 'nav-link';
        a3.setAttribute('href', '#');
        const a3text = createComponent('Platform');
        ul.appendChild(li3);
        li3.appendChild(a3);
        a3.appendChild(a3text);

        const li4 = createComponent(undefined, [], 'li');
        li4.className = 'nav-item';
        const a4 = createComponent(undefined, [], 'a');
        a4.className = 'nav-link';
        a4.setAttribute('href', '#');
        const a4text = createComponent('Manufactured');
        ul.appendChild(li4);
        li4.appendChild(a4);
        a4.appendChild(a4text);

        const divDrop = createComponent(undefined, [], 'div');
        divDrop.className = 'dropdown';
        navbar.appendChild(divDrop);

        const button = createComponent(undefined, [
            {'key' : 'type', 'value' : 'button'},
            {'key' : 'id', 'value' : 'dropdownMenuButton'},
            {'key' : 'data-toggle', 'value' : 'dropdown'},
            {'key' : 'aria-haspopup', 'value' : 'true'},
            {'key' : 'aria-expanded', 'value' : 'false'},
        ], 'button');
        button.className = 'btn btn-secondary dropdown-toggle';
        divDrop.appendChild(button);

        const buttonText = createComponent('Dropdown button ');
        button.appendChild(buttonText);

        const dropMenu = createComponent(undefined, [], 'div');
        dropMenu.className = 'dropdown-menu';
        dropMenu.setAttribute('aria-labelledby', 'dropdownMenuButton');
        divDrop.appendChild(dropMenu);

        const dropA1 = createComponent(undefined, [], 'a');
        dropA1.className = 'dropdown-item';
        dropA1.setAttribute('href', '#');
        const dropA1Text = createComponent('Action');
        dropMenu.appendChild(dropA1);
        dropA1.appendChild(dropA1Text);

        const dropA2 = createComponent(undefined, [], 'a');
        dropA2.className = 'dropdown-item';
        dropA2.setAttribute('href', '#');
        const dropA2Text = createComponent('Another action');
        dropMenu.appendChild(dropA2);
        dropA2.appendChild(dropA2Text);

        const dropA3 = createComponent(undefined, [], 'a');
        dropA3.className = 'dropdown-item';
        dropA3.setAttribute('href', '#');
        const dropA3Text = createComponent('Something else here')
        dropMenu.appendChild(dropA3);
        dropA3.appendChild(dropA3Text);

        this.container = container;
    }

    get() {
        return this.container;
    }
}