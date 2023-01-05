export const application: any = {
  blocks: {},
  screens: {},
  watch: [],
  timers: [],
  levels: null,
  cards: [],
  cardsClone:[],
  cardsShow:[],
  cardsSort:[],//Эксперементально
  idCards: [],
  victoryPoint:[],
  container: document.querySelector(".app"), //Основной контейнер
  winLoseScreen: document.querySelector(".win_lose_screen"),
  cardsScreen: document.querySelector(".cards"), //Контейнер для отрисовки экранов сложности
  renderScreen: function (screenName: string) {
    this.watch.forEach((element: string) => {
      clearTimeout(element)
    })
    if (!this.screens[screenName]) {
      console.warn("Такой страницы нет")
    } else {
      this.container.innerHTML = "";
      this.cardsScreen.innerHTML = "";
      this.winLoseScreen.innerHTML = "";
      this.screens[screenName]()
    }
  },

  renderBlock: function (blockName: string) {
    if (!this.blocks[blockName]) {
      console.warn("Такого блока нет")
    } else {
      this.blocks[blockName](this.container)
    }
  },

  easyLevelScreen: function () {
    for (let i = 15; i < this.cards.length; i++) {
      this.cardsClone = this.cards[i]
     let clone = this.cardsClone.cloneNode(true)
     setTimeout(() => {
       clone.children[1].classList.remove("back_rotate")
   }, 5000)
     this.cardsShow = clone
     this.cardsScreen.appendChild(
       this.cardsClone
     )
     this.cardsScreen.prepend(
       this.cardsShow
     )         
   }     
   this.container.appendChild(
     this.cardsScreen
   )       
  },  

  normalLevelScreen: function () {
    for (let i = 12; i < this.cards.length; i++) {
      this.cardsClone = this.cards[i]
     let clone = this.cardsClone.cloneNode(true)
     setTimeout(() => {
       clone.children[1].classList.remove("back_rotate")
   }, 5000)
     this.cardsShow = clone
     this.cardsScreen.appendChild(
       this.cardsClone
     )
     this.cardsScreen.prepend(
       this.cardsShow
     )         
   }     
   this.container.appendChild(
     this.cardsScreen
   )       
  },

  hardLevelScreen: function () {
    for (let i = 9; i < this.cards.length; i++) {
      this.cardsClone = this.cards[i]
     let clone = this.cardsClone.cloneNode(true)
     setTimeout(() => {
       clone.children[1].classList.remove("back_rotate")
   }, 5000)
     this.cardsShow = clone
     this.cardsScreen.appendChild(
       this.cardsClone
     )
     this.cardsScreen.prepend(
       this.cardsShow
     )         
   }     
   this.container.appendChild(
     this.cardsScreen
   )       
  },
}

