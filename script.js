const button = document.querySelector('button#menuButton');

button.addEventListener('click', (e) => {
    const nav = document.querySelector('nav#navbar-default');
    nav.classList.toggle('hidden');
})