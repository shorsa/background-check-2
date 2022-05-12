function bindNavigationDropdown(){
    document.addEventListener("click", e => {
		const isDropdownButton = e.target.matches("[data-dropdown-button]")
		if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
	
		let currentDropdown
		if (isDropdownButton) {
			currentDropdown = e.target.closest("[data-dropdown]")
			currentDropdown.classList.toggle("active")
		}
	
		document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
			if (dropdown === currentDropdown) return
			dropdown.classList.remove("active")
		})
	});
};

document.addEventListener('DOMContentLoaded', () => {
	bindNavigationDropdown();

	const panels = document.getElementsByClassName('faq-accardion__text');
	const cards = document.getElementsByClassName('cards__item');
	let acc = document.getElementsByClassName("faq-accardion__btn");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function (e) {
			const parent = e.target.closest('.cards__item');
			if (parent.classList.contains('active')) {
				closeCards();
			} else {
				openCard(parent);
			};
		});
	};

	function openCard(cardEl) {
		const panel = cardEl.querySelector('.faq-accardion__text');
		closeCards();
		cardEl.classList.add("active");
		panel.style.maxHeight = panel.scrollHeight + "px";
	};
	function closeCards() {
		[...cards].forEach(parent => parent.classList.remove('active'));
		[...panels].forEach(panel => panel.style.maxHeight = null);
	};
});
