// Подключение функционала "Чертогов Фрилансера"
//import { isMobile } from "./functions.js";
// Подключение списка активных модулей
//import { flsModules } from "./modules.js";


document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.menu-top-header__link_catalog')) {
		document.documentElement.classList.add('catalog-open');
		e.preventDefault();
	}
}