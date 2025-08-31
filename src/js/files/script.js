// Подключение функционала "Чертогов Фрилансера"
import {isMobile} from "./functions.js";
// Подключение списка активных модулей
import {flsModules} from "./modules.js";
import './animations.js';
import $ from 'jquery';

const burgerButton = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Обработчик события клика
burgerButton.addEventListener('click', () => {
  // Переключаем класс
  mobileMenu.classList.toggle('mobile-menu-open');
});
