/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/**
 *
 */
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
        ul.className = 'navbar-nav mr-auto';
        ul.setAttribute('id', 'routes');
        divnav.appendChild(ul);

        const li1 = createComponent(undefined, [], 'li');
        li1.className = 'nav-item active';
        const a1 = createComponent(undefined, [], 'a');
        a1.className = 'nav-link';
        a1.setAttribute('href', '#');
        const a1text = createComponent('All');
        ul.appendChild(li1);
        li1.appendChild(a1);
        a1.appendChild(a1text);
        a1.addEventListener('click', callback);

        const li2 = createComponent(undefined, [], 'li');
        li2.className = 'nav-item';
        const a2 = createComponent(undefined, [], 'a');
        a2.className = 'nav-link';
        a2.setAttribute('href', '#');
        const a2text = createComponent('Genre');
        ul.appendChild(li2);
        li2.appendChild(a2);
        a2.appendChild(a2text);
        a2.addEventListener('click', callback);

        const li3 = createComponent(undefined, [], 'li');
        li3.className = 'nav-item';
        const a3 = createComponent(undefined, [], 'a');
        a3.className = 'nav-link';
        a3.setAttribute('href', '#');
        const a3text = createComponent('Platform');
        ul.appendChild(li3);
        li3.appendChild(a3);
        a3.appendChild(a3text);
        a3.addEventListener('click', callback);

        const li4 = createComponent(undefined, [], 'li');
        li4.className = 'nav-item';
        const a4 = createComponent(undefined, [], 'a');
        a4.className = 'nav-link';
        a4.setAttribute('href', '#');
        const a4text = createComponent('Store');
        ul.appendChild(li4);
        li4.appendChild(a4);
        a4.appendChild(a4text);
        a4.addEventListener('click', callback);

        const divDrop = createComponent(undefined, [], 'div');
        divDrop.className = 'dropdown';
        divDrop.setAttribute('id', 'dropdown');
        navbar.appendChild(divDrop);

        const button = createComponent(undefined, [
            {'key': 'type', 'value': 'button'},
            {'key': 'id', 'value': 'dropdownMenuButton'},
            {'key': 'data-toggle', 'value': 'dropdown'},
            {'key': 'aria-haspopup', 'value': 'true'},
            {'key': 'aria-expanded', 'value': 'false'},
        ], 'button');
        button.className = 'btn btn-secondary dropdown-toggle hidden';
        divDrop.appendChild(button);

        const buttonText = createComponent('Dropdown button ');
        button.appendChild(buttonText);

        const dropMenu = createComponent(undefined, [], 'div');
        dropMenu.className = 'dropdown-menu';
        dropMenu.setAttribute('aria-labelledby', 'dropdownMenuButton');
        divDrop.appendChild(dropMenu);

        const orderDrop = createComponent(undefined, [], 'div');
        orderDrop.className = 'dropdown';
        orderDrop.setAttribute('id', 'ordering');
        navbar.appendChild(orderDrop);

        const buttonOrder = createComponent(undefined, [
            {'key': 'type', 'value': 'button'},
            {'key': 'id', 'value': 'orderButton'},
            {'key': 'data-toggle', 'value': 'dropdown'},
            {'key': 'aria-haspopup', 'value': 'true'},
            {'key': 'aria-expanded', 'value': 'false'},
        ], 'button');
        buttonOrder.className = 'btn btn-secondary dropdown-toggle';
        orderDrop.appendChild(buttonOrder);

        const orderButtonText = createComponent('Order by:');
        buttonOrder.appendChild(orderButtonText);

        const orderMenu = createComponent(undefined, [], 'div');
        orderMenu.className = 'dropdown-menu';
        orderMenu.setAttribute('aria-labelledby', 'dropdownMenuButton');
        orderDrop.appendChild(orderMenu);

        const arr = ['Default', 'name[A-Z]', 'name[Z-A]', 'released', 'added', 'created', 'rating'];
        arr.forEach((element) => {
            const a = createComponent(undefined, [], 'a');
            a.classList = 'dropdown-item';
            a.setAttribute('href', '#');
            a.innerText = element;
            a.addEventListener('click', function(e) {
                const db = document.getElementById('orderButton');
                db.innerText = e.srcElement.innerText;
                if (e.srcElement.innerText === 'Default') {
                    db.innerText = 'Order by:';
                    ordering = null;
                } else if (e.srcElement.innerText === 'name[A-Z]') {
                    ordering = 'name';
                } else if (e.srcElement.innerText === 'name[Z-A]') {
                    ordering = '-name';
                } else {
                    ordering = '-' + e.srcElement.innerText;
                }
                showLoading();
                httpRequest(url, showGames, true);
            });
            orderMenu.appendChild(a);
        });

        this.container = container;
    }

    get() {
        return this.container;
    }
}
