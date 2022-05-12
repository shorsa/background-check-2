@@include('./modules/mobileMenu.js');
@@include('./modules/headerNavigation.js');
@@include('./checkImageFormatSupport.js');

document.addEventListener('DOMContentLoaded', () => {
	bindMobileMenu();
	bindHeaderNavigation();
});