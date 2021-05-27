const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Селектор переключателя тем
const checkBoxTheme = document.querySelector('#theme-switch-toggle')

// Переменные для установки темы body
const addLightTheme = document.body.classList.add(Theme.LIGHT);
const addDarkTheme = document.body.classList.add(Theme.DARK);

// Переменные для установки значения localStorage
const setStorageThemeLight = localStorage.setItem('currentTheme', Theme.LIGHT);
const setStorageThemeDark = localStorage.setItem('currentTheme', Theme.DARK);

// Проверка localStorage на наличие светлой/темной темы
storageThemeRequire();

// Слушатель на чекбокс
checkBoxTheme.addEventListener('change', changeThemeColor)

// Функция проверки localStorage на отсутствие/присутствие темы
function storageThemeRequire() {
  if (!localStorage.getItem('currentTheme')) {
    setStorageThemeLight;
    addLightTheme;
  } else if (localStorage.getItem('currentTheme') === Theme.DARK) {
    addDarkTheme;
      checkBoxTheme.setAttribute('checked', 'checked');
  } else {
    addLightTheme;
  }
}

// Callback для чекбокса
function changeThemeColor() {
  document.body.classList.toggle(Theme.DARK);
  if (checkBoxTheme.hasAttribute('checked')) {
    checkBoxTheme.removeAttribute('checked');
    setStorageThemeLight;
  } else {
    checkBoxTheme.setAttribute('checked', 'checked');
    setStorageThemeDark;
  }
}

