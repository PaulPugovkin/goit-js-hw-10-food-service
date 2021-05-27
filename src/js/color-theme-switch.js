const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Селектор переключателя тем
const checkboxTheme = document.querySelector('#theme-switch-toggle')


// Функции для установки темы body
const addClass = (color) => document.body.classList.add(color);
const removeClass = (color) => document.body.classList.remove(color);


// Функции для установки значения localStorage
const setStorageThemeLight = () => localStorage.setItem('currentTheme', Theme.LIGHT);
const setStorageThemeDark = () => localStorage.setItem('currentTheme', Theme.DARK);

// Проверка localStorage на наличие светлой/темной темы
storageThemeRequire();

// Слушатель на чекбокс
checkboxTheme.addEventListener('change', changeThemeColor)

// Функция проверки localStorage на отсутствие/присутствие темы
function storageThemeRequire() {
  if (!localStorage.getItem('currentTheme')) {
    setStorageThemeLight();
    removeClass(Theme.DARK)
    addClass(Theme.LIGHT)
  } else if (localStorage.getItem('currentTheme') === Theme.DARK) {
    removeClass(Theme.LIGHT)
    addClass(Theme.DARK)
    checkboxTheme.setAttribute('checked', 'checked');
  } else {
    removeClass(Theme.DARK)
    addClass(Theme.LIGHT)
  }
}

// Callback для чекбокса
function changeThemeColor() {
  if (checkboxTheme.hasAttribute('checked')) {
    removeClass(Theme.DARK)
    addClass(Theme.LIGHT)
    setStorageThemeLight();
    checkboxTheme.removeAttribute('checked');
  } else {
    removeClass(Theme.LIGHT)
    addClass(Theme.DARK)
    setStorageThemeDark();
    checkboxTheme.setAttribute('checked', 'checked');
  }
}

