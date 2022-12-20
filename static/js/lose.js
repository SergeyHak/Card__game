function renderLoseBlock() {
    const lose = document.createElement("div")
    lose.classList = "win-lose"
    const LoseImage = document.createElement("img")
    LoseImage.src = "./static/img/loseImage.png"
    const Losetitle = document.createElement("h1")
    Losetitle.classList = "title-win"
    Losetitle.textContent = "Вы проиграли!"
    lose.appendChild(LoseImage)
    lose.appendChild(Losetitle)
    window.application.winLoseScreen.appendChild(lose)
    window.application.container.appendChild(window.application.winLoseScreen)
}
window.application.blocks["lose-block"] = renderLoseBlock // Добавляем в блок
function renderLoseScreen() {
    window.application.renderBlock("lose-block")
    window.application.renderBlock("win-block-content")
}
window.application.screens["renderLose"] = renderLoseScreen // Записываем функцию в поле объекта
