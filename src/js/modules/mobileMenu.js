const bindMobileMenu = () => {
    const body = document.body;
    const btnOpen = document.getElementById('open-menu-btn');
    const btnClose = document.getElementById('close-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-menu-backdrop');

    btnOpen.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    function openMenu(){
        body.classList.add('menu-open');
        menu.classList.add('open');
        backdrop.classList.add('open');
    };
    function closeMenu(){
        body.classList.remove('menu-open');
        menu.classList.remove('open');
        backdrop.classList.remove('open');
    };
};