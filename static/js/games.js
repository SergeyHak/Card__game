function renderGameBlok() {
    const timeButton = document.createElement("div")
    timeButton.classList = "content"
    const infoTim = document.createElement("div")
    infoTim.classList = "infotime"
    const minSek = document.createElement("div")
    minSek.classList = "minsek"
    const mins = document.createElement("h3")
    mins.textContent = "min"
    mins.classList = "mins"
    const sek = document.createElement("h3")
    sek.textContent = "sek"
    sek.classList = "sek"
    const timers = document.createElement("h1")
    timers.classList = "time"
    const time = document.createElement("time")
    time.textContent = "00:00"
    const resetButton = document.createElement("button")
    resetButton.classList = "reset_game"
    resetButton.textContent = "Играть заново"
    minSek.appendChild(mins)
    minSek.appendChild(sek)
    timers.appendChild(time)
    infoTim.appendChild(minSek)
    infoTim.appendChild(timers)
    timeButton.appendChild(infoTim)
    timeButton.appendChild(resetButton)
    window.application.container.appendChild(timeButton)
    const stopwatch = document.getElementsByTagName("h1")[0]
    let sec = 0
    let min = 0
    let t
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
        window.application.timers = stopwatch.textContent
        console.log(`Время на игру - ${window.application.timers}`)
    }

    function timer() {
        window.application.watch.push(setTimeout(addT, 1000))
    }
    setTimeout(() => {
        timer()
    }, 5000)

    resetButton.addEventListener("click", () => {
        clearTimeout(t)
        console.log(`Время на игру - ${window.application.watch}`)
        window.application.idCards = []
        window.application.renderScreen("renderLevel") // Отрисовывает первую страницу -->
    })
}
window.application.blocks["time_button"] = renderGameBlok // Добавляем в блок

function renderHardBlock() {
    const ten = document.createElement("div")
    ten.classList = "ten"
    const tenB = document.createElement("img")
    tenB.src = "./static/img/cards/10 бубны.png"
    tenB.classList = "front"
    const tenX = document.createElement("img")
    tenX.src = "./static/img/рубашка.png"
    tenX.classList = "back back_rotate"
    tenX.id = "10"
    ten.appendChild(tenB)
    ten.appendChild(tenX)

    const ten2 = document.createElement("div")
    ten2.classList = "ten"
    const tenK = document.createElement("img")
    tenK.src = "./static/img/cards/10 крести.png"
    tenK.classList = "front"
    const ten2X = document.createElement("img")
    ten2X.src = "./static/img/рубашка.png"
    ten2X.classList = "back back_rotate"
    ten2X.id = "10"
    ten2.appendChild(tenK)
    ten2.appendChild(ten2X)

    const nine = document.createElement("div")
    nine.classList = "ten"
    const nineB = document.createElement("img")
    nineB.src = "./static/img/cards/9 бубны.png"
    nineB.classList = "front"
    const nineX = document.createElement("img")
    nineX.src = "./static/img/рубашка.png"
    nineX.classList = "back back_rotate"
    nineX.id = "9"
    nine.appendChild(nineB)
    nine.appendChild(nineX)

    const nine2 = document.createElement("div")
    nine2.classList = "ten"
    const nineK = document.createElement("img")
    nineK.src = "./static/img/cards/9 крести.png"
    nineK.classList = "front"
    const nine2X = document.createElement("img")
    nine2X.src = "./static/img/рубашка.png"
    nine2X.classList = "back back_rotate"
    nine2X.id = "9"
    nine2.appendChild(nineK)
    nine2.appendChild(nine2X)

    const eight = document.createElement("div")
    eight.classList = "ten"
    const eightK = document.createElement("img")
    eightK.src = "./static/img/cards/8 крести.png"
    eightK.classList = "front"
    const eightX = document.createElement("img")
    eightX.src = "./static/img/рубашка.png"
    eightX.classList = "back back_rotate"
    eightX.id = "8"
    eight.appendChild(eightK)
    eight.appendChild(eightX)

    const eight2 = document.createElement("div")
    eight2.classList = "ten"
    const eightB = document.createElement("img")
    eightB.src = "./static/img/cards/8 бубны.png"
    eightB.classList = "front"
    const eight2X = document.createElement("img")
    eight2X.src = "./static/img/рубашка.png"
    eight2X.classList = "back back_rotate"
    eight2X.id = "8"
    eight2.appendChild(eightB)
    eight2.appendChild(eight2X)

    const seven = document.createElement("div")
    seven.classList = "ten"
    const sevenB = document.createElement("img")
    sevenB.src = "./static/img/cards/7 бубны.png"
    sevenB.classList = "front"
    const sevenX = document.createElement("img")
    sevenX.src = "./static/img/рубашка.png"
    sevenX.classList = "back back_rotate"
    sevenX.id = "7"
    seven.appendChild(sevenB)
    seven.appendChild(sevenX)

    const seven2 = document.createElement("div")
    seven2.classList = "ten"
    const sevenK = document.createElement("img")
    sevenK.src = "./static/img/cards/7 крести.png"
    sevenK.classList = "front"
    const seven2X = document.createElement("img")
    seven2X.src = "./static/img/рубашка.png"
    seven2X.classList = "back back_rotate"
    seven2X.id = "7"
    seven2.appendChild(sevenK)
    seven2.appendChild(seven2X)

    const six = document.createElement("div")
    six.classList = "ten"
    const sixB = document.createElement("img")
    sixB.src = "./static/img/cards/6 бубны.png"
    sixB.classList = "front"
    const sixX = document.createElement("img")
    sixX.src = "./static/img/рубашка.png"
    sixX.classList = "back back_rotate"
    sixX.id = "6"
    six.appendChild(sixB)
    six.appendChild(sixX)

    const six2 = document.createElement("div")
    six2.classList = "ten"
    const sixK = document.createElement("img")
    sixK.src = "./static/img/cards/6 крести.png"
    sixK.classList = "front"
    const six2X = document.createElement("img")
    six2X.src = "./static/img/рубашка.png"
    six2X.classList = "back back_rotate"
    six2X.id = "6"
    six2.appendChild(sixK)
    six2.appendChild(six2X)

    const valet = document.createElement("div")
    valet.classList = "ten"
    const valetB = document.createElement("img")
    valetB.src = "./static/img/cards/валет бубны.png"
    valetB.classList = "front"
    const valetX = document.createElement("img")
    valetX.src = "./static/img/рубашка.png"
    valetX.classList = "back back_rotate"
    valetX.id = "v"
    valet.appendChild(valetB)
    valet.appendChild(valetX)

    const valet2 = document.createElement("div")
    valet2.classList = "ten"
    const valetK = document.createElement("img")
    valetK.src = "./static/img/cards/валет крести.png"
    valetK.classList = "front"
    const valet2X = document.createElement("img")
    valet2X.src = "./static/img/рубашка.png"
    valet2X.classList = "back back_rotate"
    valet2X.id = "v"
    valet2.appendChild(valetK)
    valet2.appendChild(valet2X)

    const queen = document.createElement("div")
    queen.classList = "ten"
    const queenB = document.createElement("img")
    queenB.src = "./static/img/cards/дама бубны.png"
    queenB.classList = "front"
    const queenX = document.createElement("img")
    queenX.src = "./static/img/рубашка.png"
    queenX.classList = "back back_rotate"
    queenX.id = "q"
    queen.appendChild(queenB)
    queen.appendChild(queenX)

    const queen2 = document.createElement("div")
    queen2.classList = "ten"
    const queenK = document.createElement("img")
    queenK.src = "./static/img/cards/дама крести.png"
    queenK.classList = "front"
    const queen2X = document.createElement("img")
    queen2X.src = "./static/img/рубашка.png"
    queen2X.classList = "back back_rotate"
    queen2X.id = "q"
    queen2.appendChild(queenK)
    queen2.appendChild(queen2X)

    const king = document.createElement("div")
    king.classList = "ten"
    const kingB = document.createElement("img")
    kingB.src = "./static/img/cards/король бубны.png"
    kingB.classList = "front"
    const kingX = document.createElement("img")
    kingX.src = "./static/img/рубашка.png"
    kingX.classList = "back back_rotate"
    kingX.id = "k"
    king.appendChild(kingB)
    king.appendChild(kingX)

    const king2 = document.createElement("div")
    king2.classList = "ten"
    const kingK = document.createElement("img")
    kingK.src = "./static/img/cards/король крести.png"
    kingK.classList = "front"
    const king2X = document.createElement("img")
    king2X.src = "./static/img/рубашка.png"
    king2X.classList = "back back_rotate"
    king2X.id = "k"
    king2.appendChild(kingK)
    king2.appendChild(king2X)

    const As = document.createElement("div")
    As.classList = "ten"
    const AsB = document.createElement("img")
    AsB.src = "./static/img/cards/туз бубны.png"
    AsB.classList = "front"
    const AsX = document.createElement("img")
    AsX.src = "./static/img/рубашка.png"
    AsX.classList = "back back_rotate"
    AsX.id = "a"
    As.appendChild(AsB)
    As.appendChild(AsX)

    const As2 = document.createElement("div")
    As2.classList = "ten"
    const AsK = document.createElement("img")
    AsK.src = "./static/img/cards/туз крести.png"
    AsK.classList = "front"
    const As2X = document.createElement("img")
    As2X.src = "./static/img/рубашка.png"
    As2X.classList = "back back_rotate"
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
    function sortCards(arr) {
        return arr.sort(function () {
            return 0.5 - Math.random()
        })
    }
    sortCards(arr)
    window.application.cards = arr
    // console.log(window.application.cards)
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
    function rotateCards(arrBack) {
        for (let i = 0; i < arrBack.length; i++) {
            arrBack[i].classList.remove("back_rotate")
        }
    }
    setTimeout((id) => {
        rotateCards(arrBack)
    }, 5000)
}
window.application.cardsScreen.addEventListener("click", (event) => {
    const target = event.target
    if (target.tagName === "IMG") {
        target.classList.add("back_rotate")
    }
    window.application.idCards.push(target.id)
    if (window.application.idCards.length === 2) {
        comparison()
    }
    console.log(window.application.idCards)
})
function comparison() {
    if (window.application.idCards[0] === window.application.idCards[1]) {
        window.application.idCards = []
        window.application.renderScreen("renderWin")
    } else {
        window.application.idCards = []
        window.application.renderScreen("renderLose")
    }
}
window.application.blocks["hard_block"] = renderHardBlock // Добавляем в блок
//Отрисовка простого экрана игры
function renderEasyGameScreen() {
    window.application.renderBlock("time_button")
    window.application.renderBlock("hard_block")
    window.application.easyLevelScreen()
}
window.application.screens["render_easy_game"] = renderEasyGameScreen // Добавляем в экраны
//Отрисовка нормального экрана игры
function renderNormalGameScreen() {
    window.application.renderBlock("time_button")
    window.application.renderBlock("hard_block")
    window.application.normalLevelScreen()
}
window.application.screens["render_normal_game"] = renderNormalGameScreen // Добавляем в экраны
//Отрисовка сложного экрана игры
function renderHardGameScreen() {
    window.application.renderBlock("time_button")
    window.application.renderBlock("hard_block")
    window.application.hardLevelScreen()
}
window.application.screens["render_hard_game"] = renderHardGameScreen // Добавляем в экраны

//     var h1 = document.getElementsByTagName('h1')[0];
// var start = document.getElementById('strt');
// var stop = document.getElementById('stp');
// var reset = document.getElementById('rst');
// var sec = 0;
// var min = 0;
// var hrs = 0;
// var t;

// function tick(){
//     sec++;
//     if (sec >= 60) {
//         sec = 0;
//         min++;
//         if (min >= 60) {
//             min = 0;
//             hrs++;
//         }
//     }
// }
// function add() {
//     tick();
//     h1.textContent = (hrs > 9 ? hrs : "0" + hrs)
//         	 + ":" + (min > 9 ? min : "0" + min)
//        		 + ":" + (sec > 9 ? sec : "0" + sec);
//     timer();
// }
// function timer() {
//     t = setTimeout(add, 1000);
// }

// timer();
// start.onclick = timer;
// stop.onclick = function() {
//     clearTimeout(t);
// }
// reset.onclick = function() {
//     h1.textContent = "00:00:00";
//     seconds = 0; minutes = 0; hours = 0;
