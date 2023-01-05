import { application } from "./application";
// @ts-ignore
import shirt from "../static/img/shirt.png"

function renderGameBlok() {
    const timeButton = document.createElement("div")
    timeButton.classList.add("content")
    const infoTim = document.createElement("div")
    infoTim.classList.add("infotime")
    const minSek = document.createElement("div")
    minSek.classList.add("minsek")
    const mins = document.createElement("h3")
    mins.textContent = "min"
    mins.classList.add("mins")
    const sek = document.createElement("h3")
    sek.textContent = "sek"
    sek.classList.add("sek")
    const timers = document.createElement("h1")
    timers.classList.add("time")
    const time = document.createElement("time")
    time.textContent = "00:00"
    const resetButton = document.createElement("button")
    resetButton.classList.add("reset_game")
    resetButton.textContent = "Играть заново"
    minSek.appendChild(mins)
    minSek.appendChild(sek)
    timers.appendChild(time)
    infoTim.appendChild(minSek)
    infoTim.appendChild(timers)
    timeButton.appendChild(infoTim)
    timeButton.appendChild(resetButton)
    application.container.appendChild(timeButton)
    const stopwatch = document.getElementsByTagName("h1")[0]
    let sec = 0
    let min = 0
    let t: number
    function tick() {
        sec++
        if (sec >= 60) {
            sec = 0
            min++
            if (min >= 60) {
                min = 0
            }
        }
    }
    function addT() {
        tick()
        stopwatch.textContent =
            (min > 9 ? min : "0" + min) + "." + (sec > 9 ? sec : "0" + sec)
        timer()
        application.timers = stopwatch.textContent
        console.log(`Время на игру - ${application.timers}`)
    }

    function timer() {
        application.watch.push(setTimeout(addT, 1000))
    }
    setTimeout(() => {
        timer()
    }, 5000)

    resetButton.addEventListener("click", () => {
        clearTimeout(t)
        console.log(`Время на игру - ${application.watch}`)
        application.idCards = []
        application.renderScreen("renderLevel") // Отрисовывает первую страницу -->
    })
}
application.blocks["time_button"] = renderGameBlok // Добавляем в блок

function renderHardBlock() {
    const ten = document.createElement("div")
    ten.classList.add("ten")
    const tenB = document.createElement("img")
    tenB.src = "../static/img/cards/ten-bubi.png"
    tenB.classList.add("front")
    const tenX = document.createElement("img")
    tenX.src = shirt
    tenX.classList.add("back")
    tenX.classList.add("back_rotate")
    tenX.id = "10"
    ten.appendChild(tenB)
    ten.appendChild(tenX)

    const ten2 = document.createElement("div")
    ten2.classList.add("ten")
    const tenK = document.createElement("img")
    tenK.src = "../static/img/cards/ten-kresti.png"
    tenK.classList.add("front")
    const ten2X = document.createElement("img")
    ten2X.src = shirt
    ten2X.classList.add("back")
    ten2X.classList.add("back_rotate")
    ten2X.id = "10"
    ten2.appendChild(tenK)
    ten2.appendChild(ten2X)

    const nine = document.createElement("div")
    nine.classList.add("ten")
    const nineB = document.createElement("img")
    nineB.src = "../static/img/cards/nine-bubi.png"
    nineB.classList.add("front")
    const nineX = document.createElement("img")
    nineX.src = shirt
    nineX.classList.add("back")
    nineX.classList.add("back_rotate")
    nineX.id = "9"
    nine.appendChild(nineB)
    nine.appendChild(nineX)

    const nine2 = document.createElement("div")
    nine2.classList.add("ten")
    const nineK = document.createElement("img")
    nineK.src = "../static/img/cards/nine-kresti.png"
    nineK.classList.add("front")
    const nine2X = document.createElement("img")
    nine2X.src = shirt
    nine2X.classList.add("back")
    nine2X.classList.add("back_rotate")
    nine2X.id = "9"
    nine2.appendChild(nineK)
    nine2.appendChild(nine2X)

    const eight = document.createElement("div")
    eight.classList.add("ten")
    const eightK = document.createElement("img")
    eightK.src = "../static/img/cards/eight-bubi.png"
    eightK.classList.add("front")
    const eightX = document.createElement("img")
    eightX.src = shirt
    eightX.classList.add("back")
    eightX.classList.add("back_rotate")
    eightX.id = "8"
    eight.appendChild(eightK)
    eight.appendChild(eightX)

    const eight2 = document.createElement("div")
    eight2.classList.add("ten")
    const eightB = document.createElement("img")
    eightB.src = "../static/img/cards/eight-kresti.png"
    eightB.classList.add("front")
    const eight2X = document.createElement("img")
    eight2X.src = shirt
    eight2X.classList.add("back")
    eight2X.classList.add("back_rotate")

    eight2X.id = "8"
    eight2.appendChild(eightB)
    eight2.appendChild(eight2X)

    const seven = document.createElement("div")
    seven.classList.add("ten")
    const sevenB = document.createElement("img")
    sevenB.src = "../static/img/cards/seven-bubi.png"
    sevenB.classList.add("front")
    const sevenX = document.createElement("img")
    sevenX.src = shirt
    sevenX.classList.add("back")
    sevenX.classList.add("back_rotate")
    sevenX.id = "7"
    seven.appendChild(sevenB)
    seven.appendChild(sevenX)

    const seven2 = document.createElement("div")
    seven2.classList.add("ten")
    const sevenK = document.createElement("img")
    sevenK.src = "../static/img/cards/seven-kresti.png"
    sevenK.classList.add("front")
    const seven2X = document.createElement("img")
    seven2X.src = shirt
    seven2X.classList.add("back")
    seven2X.classList.add("back_rotate")
    seven2X.id = "7"
    seven2.appendChild(sevenK)
    seven2.appendChild(seven2X)

    const six = document.createElement("div")
    six.classList.add("ten")
    const sixB = document.createElement("img")
    sixB.src = "../static/img/cards/six-bubi.png"
    sixB.classList.add("front")
    const sixX = document.createElement("img")
    sixX.src = shirt
    sixX.classList.add("back")
    sixX.classList.add("back_rotate")
    sixX.id = "6"
    six.appendChild(sixB)
    six.appendChild(sixX)

    const six2 = document.createElement("div")
    six2.classList.add("ten")
    const sixK = document.createElement("img")
    sixK.src = "../static/img/cards/six-kresti.png"
    sixK.classList.add("front")
    const six2X = document.createElement("img")
    six2X.src = shirt
    six2X.classList.add("back")
    six2X.classList.add("back_rotate")
    six2X.id = "6"
    six2.appendChild(sixK)
    six2.appendChild(six2X)

    const valet = document.createElement("div")
    valet.classList.add("ten")
    const valetB = document.createElement("img")
    valetB.src = "../static/img/cards/valet-bubi.png"
    valetB.classList.add("front")
    const valetX = document.createElement("img")
    valetX.src = shirt
    valetX.classList.add("back")
    valetX.classList.add("back_rotate")
    valetX.id = "v"
    valet.appendChild(valetB)
    valet.appendChild(valetX)

    const valet2 = document.createElement("div")
    valet2.classList.add("ten")
    const valetK = document.createElement("img")
    valetK.src = "../static/img/cards/valet-kresti.png"
    valetK.classList.add("front")
    const valet2X = document.createElement("img")
    valet2X.src = shirt
    valet2X.classList.add("back")
    valet2X.classList.add("back_rotate")
    valet2X.id = "v"
    valet2.appendChild(valetK)
    valet2.appendChild(valet2X)

    const queen = document.createElement("div")
    queen.classList.add("ten")
    const queenB = document.createElement("img")
    queenB.src = "../static/img/cards/queen-bubi.png"
    queenB.classList.add("front")
    const queenX = document.createElement("img")
    queenX.src = shirt
    queenX.classList.add("back")
    queenX.classList.add("back_rotate")
    queenX.id = "q"
    queen.appendChild(queenB)
    queen.appendChild(queenX)

    const queen2 = document.createElement("div")
    queen2.classList.add("ten")
    const queenK = document.createElement("img")
    queenK.src = "../static/img/cards/queen-kresti.png"
    queenK.classList.add("front")
    const queen2X = document.createElement("img")
    queen2X.src = shirt
    queen2X.classList.add("back")
    queen2X.classList.add("back_rotate")
    queen2X.id = "q"
    queen2.appendChild(queenK)
    queen2.appendChild(queen2X)

    const king = document.createElement("div")
    king.classList.add("ten")
    const kingB = document.createElement("img")
    kingB.src = "../static/img/cards/king-bubi.png"
    kingB.classList.add("front")
    const kingX = document.createElement("img")
    kingX.src = shirt
    kingX.classList.add("back")
    kingX.classList.add("back_rotate")
    kingX.id = "k"
    king.appendChild(kingB)
    king.appendChild(kingX)

    const king2 = document.createElement("div")
    king2.classList.add("ten")
    const kingK = document.createElement("img")
    kingK.src = "../static/img/cards/king-kresti.png"
    kingK.classList.add("front")
    const king2X = document.createElement("img")
    king2X.src = shirt
    king2X.classList.add("back")
    king2X.classList.add("back_rotate")
    king2X.id = "k"
    king2.appendChild(kingK)
    king2.appendChild(king2X)

    const As = document.createElement("div")
    As.classList.add("ten")
    const AsB = document.createElement("img")
    AsB.src = "../static/img/cards/as-bubi.png"
    AsB.classList.add("front")
    const AsX = document.createElement("img")
    AsX.src = shirt
    AsX.classList.add("back")
    AsX.classList.add("back_rotate")
    AsX.id = "a"
    As.appendChild(AsB)
    As.appendChild(AsX)

    const As2 = document.createElement("div")
    As2.classList.add("ten")
    const AsK = document.createElement("img")
    AsK.src = "../static/img/cards/as-kresti.png"
    AsK.classList.add("front")
    const As2X = document.createElement("img")
    As2X.src = shirt
    As2X.classList.add("back")
    As2X.classList.add("back_rotate")

    As2X.id = "a"
    As2.appendChild(AsK)
    As2.appendChild(As2X)
    let arr = [
        ten,
        ten2,
        nine,
        nine2,
        eight,
        eight2,
        seven,
        seven2,
        six,
        six2,
        valet,
        valet2,
        queen,
        queen2,
        king,
        king2,
        As,
        As2,
    ]
    function sortCards(arr: any[]) {
        return arr.sort(function () {
            return 0.5 - Math.random()
        })
    }
    sortCards(arr)
    application.cards = arr
    // console.log(application.cards)
    let arrBack = [
        tenX,
        ten2X,
        nineX,
        nine2X,
        eightX,
        eight2X,
        sevenX,
        seven2X,
        sixX,
        six2X,
        valetX,
        valet2X,
        queenX,
        queen2X,
        kingX,
        king2X,
        AsX,
        As2X,
    ]
    function rotateCards(arrBack: string | any[]) {
        for (let i = 0; i < arrBack.length; i++) {
            arrBack[i].classList.remove("back_rotate")
        }
    }
    setTimeout(() => {
        rotateCards(arrBack)
    }, 5000)
}
application.cardsScreen.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.tagName === "IMG") {
        target.classList.add("back_rotate")
        application.idCards.push(target.id)
    } else if(target.tagName !== "IMG"){
    console.log("Это не картинка") //Доработать
    }
    if (application.idCards.length === 2) {
        comparison()
    }
    console.log(application.idCards)
})
function comparison() {
    if (application.idCards[0] === application.idCards[1]) {
        application.idCards = []
        application.victoryPoint.push(1)
        if(application.victoryPoint.length === 3 && application.levels === "1"){
            application.victoryPoint = []
            application.renderScreen("renderWin")
          } else if(application.victoryPoint.length === 6 && application.levels === "2"){
            application.victoryPoint = []
            application.renderScreen("renderWin")
          }  else if(application.victoryPoint.length === 9 && application.levels === "3"){
            application.victoryPoint = []
            application.renderScreen("renderWin")
          }  
    } else {
        application.idCards = []
        application.renderScreen("renderLose")
    }       
}
application.blocks["hard_block"] = renderHardBlock 
//Отрисовка простого экрана игры
function renderEasyGameScreen() {
    application.renderBlock("time_button")
    application.renderBlock("hard_block")
    application.easyLevelScreen()
}
application.screens["render_easy_game"] = renderEasyGameScreen 
//Отрисовка нормального экрана игры
function renderNormalGameScreen() {
    application.renderBlock("time_button")
    application.renderBlock("hard_block")
    application.normalLevelScreen()
}
application.screens["render_normal_game"] = renderNormalGameScreen 
//Отрисовка сложного экрана игры
function renderHardGameScreen() {
    application.renderBlock("time_button")
    application.renderBlock("hard_block")
    application.hardLevelScreen()
}
application.screens["render_hard_game"] = renderHardGameScreen 
