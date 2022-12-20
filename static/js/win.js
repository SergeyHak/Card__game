function renderWinBlock() {
    const win = document.createElement("div")
    win.classList = "win-lose"
    const winImage = document.createElement("img")
    winImage.src = "./static/img/winImage.png"
    const wintitle = document.createElement("h1")
    wintitle.classList = "title-win"
    wintitle.textContent = "Вы выиграли!"
    win.appendChild(winImage)
    win.appendChild(wintitle)
    window.application.winLoseScreen.appendChild(win)
    window.application.container.appendChild(window.application.winLoseScreen)
}
window.application.blocks["win-block"] = renderWinBlock // Добавляем в блок
function renderWinBlockContent() {
    const winContent = document.createElement("div")
    winContent.classList = "winContent"
    const titleTime = document.createElement("h3")
    titleTime.classList = "timeinfo"
    titleTime.textContent = "Затраченное время:"
    const timers = document.createElement("h1")
    timers.classList = "game_time"
    const time = document.createElement("time")
    time.textContent = `${window.application.timers}`
    const gameAgain = document.createElement("button")
    gameAgain.classList = "gameAgaint"
    gameAgain.textContent = "Играть снова"
    winContent.appendChild(titleTime)
    timers.appendChild(time)
    winContent.appendChild(timers)
    winContent.appendChild(gameAgain)
    window.application.winLoseScreen.appendChild(winContent)
    window.application.container.appendChild(window.application.winLoseScreen)
    gameAgain.addEventListener("click", () => {
        window.application.renderScreen("renderLevel") // Отрисовывает первую страницу -->
    })
}
window.application.blocks["win-block-content"] = renderWinBlockContent // Добавляем в блок
function renderWinScreen() {
    window.application.renderBlock("win-block")
    window.application.renderBlock("win-block-content")
}
window.application.screens["renderWin"] = renderWinScreen // Записываем функцию в поле объекта
