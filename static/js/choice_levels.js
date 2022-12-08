window.application = {
  blocks: {},
  screens: {},
  token: null,
  idGame: null,
  timers: [],
  rival: null,
  container: document.querySelector(".app"),
  renderScreen: function (screenName) {
    window.application.timers.forEach((element) => {
      clearInterval(element);
    });
    if (!window.application.screens[screenName]) {
      console.warn("Такой страницы нет");
    } else {
      window.application.container.innerHTML = "";
      this.screens[screenName]();
    }
  },
  renderBlock: function (blockName) {
    if (!window.application.blocks[blockName]) {
      console.warn("Такого блока нет");
    } else {
      this.blocks[blockName](window.application.container);
    }
  },
};
//Отрисовка первого блока
function renderChoiceLevel() {
  // const div = document.createElement('div');
  // div.classList = 'div';
  const choice = document.createElement("div");
  choice.classList = "choice_level";

  const title = document.createElement("h1");
  title.classList = "title";
  title.textContent = "Выбери сложность";
  const level = document.createElement("div");
  level.classList = "level";
  const easyButton = document.createElement("button");
  easyButton.classList = "easy";
  easyButton.textContent = "1";
  const normalButton = document.createElement("button");
  normalButton.classList = "normal";
  normalButton.textContent = "2";
  const hardButton = document.createElement("button");
  hardButton.classList = "hard";
  hardButton.textContent = "3";
  const startButton = document.createElement("button");
  startButton.classList = "start";
  startButton.textContent = "Старт";
  choice.appendChild(title);
  level.appendChild(easyButton);
  level.appendChild(normalButton);
  level.appendChild(hardButton);
  choice.appendChild(level);
  choice.appendChild(startButton);
  // div.appendChild(choice);
  window.application.container.appendChild(choice);
}
window.application.blocks["choice_level"] = renderChoiceLevel; // Добавляем в блок
function renderChoiceLevelScreen() {
  window.application.renderBlock("choice_level"); // Должен вызвать window.application.blocks['example-button'](), передавая туда объект-узел
}
window.application.screens["renderLevel"] = renderChoiceLevelScreen; // Записываем функцию в поле объекта
