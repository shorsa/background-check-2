const bindHeaderNavigation = () => {
    const header = document.querySelector('.bgc-header');
    const boxEl = document.getElementById('header-box');
    const menuMobile = document.querySelector('.bgc-header-links__options_m');
    const menuDesctop = document.querySelector('.bgc-header-links__options_d');
    const menuItems = menuDesctop.querySelectorAll('li');
    let open = false;

    boxEl.addEventListener('click', () => {
        open ? onClose() : onOpen();
    });

    function onOpen(){
        if(window.matchMedia('(max-width: 991px)').matches){
            openMobileMenu();
        }else{
            openDesctopeMenu();
        };
        boxEl.classList.add('active');
        document.addEventListener('click', onBlur);
        open = true;
    };
    function onClose(){
        if(window.matchMedia('(max-width: 991px)').matches){
            closeMobileMenu();
        }else{
            closeDesctopeMenu();
        };
        boxEl.classList.remove('active');        
        document.removeEventListener('click', onBlur);
        open = false;
    };
    function onBlur(e){
        if(boxEl.contains(e.target) || menuItems.forEach(options => options.contains(e.target))) return;
        onClose();
    };
    function onScroll(){
        onClose();
   };
    function openMobileMenu(){
        menuMobile.style.height = `${menuMobile.scrollHeight}px`;
        menuMobile.classList.add('open');
    };
    function openDesctopeMenu(){
        const leftOffset = boxEl.getBoundingClientRect().left;
        menuDesctop.querySelector('ul').style.paddingLeft = `${leftOffset}px`;
        menuDesctop.classList.add('open');
        menuDesctop.style.top = header.clientHeight + 'px';
        document.addEventListener('wheel', onScroll);
    };
    function closeMobileMenu(){
        menuMobile.style.height = '0px'
        menuMobile.classList.remove('open');
    };
    function closeDesctopeMenu(){
        menuDesctop.classList.remove('open');
        document.removeEventListener('wheel', onScroll);
    };
};