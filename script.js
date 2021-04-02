
// Mapas Disponiveis --------------------------------------------------------
const map1 = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const map2 = [
    'WWSWWWWWWWWWWWWWWWWWW',
    'W  W         W      W',
    'W WW WWWWWWW W WWWW W',
    'W W  W W   W W W    W',
    'W W WW W W W W W WWWW',
    'W W W    W   W W    W',
    'W W W WWWWWWWW WWWW W',
    'W W W W        W    W',
    'W W W W WWWWWWWW WWWW',
    'W   W     W W  W    W',
    'W WWWWWWWWW WW WW W W',
    'W W         W   W W W',
    'W W WWWWWWW W W W W W',
    'W W     W W   W   W W',
    'W WWWWW W W W WWWWW W',
    'W       W W W       W',
    'WWW WWWWW W WWW WWWWW',
    'W W W     W W       W',
    'W W W WWW W W WWWWWWW',
    'W W W W   W W       W',
    'W W W WWW   WWWWWWW W',
    'W W W W W W       W W',
    'W     W   WWWWWWW W W',
    'WWWWWWW W       W W W',
    'W       W WWWWW W W W',
    'W WWWWWWW   W W W W W',
    'W W       W   W W WWW',
    'W WWWWWWWWWWWWW W W F',
    'W               W   W',
    'WWWWWWWWWWWWWWWWWWWWW'
];

const map3 = [
    'WWWWWWWWWWWWWWWWWWWWW',
    'S        W          W',
    'W WWWWWW W WWWWW WWWW',
    'W W      W W   W    W',
    'W W WWWWWW W WWWWWW W',
    'W W W      W        W',
    'W W WWWWWW WWWW WWWWW',
    'W W             W   W',
    'W WWWWWWWWWWWWW   W W',
    'W        W    WWWWW W',
    'WWWWWWWW WWWW W     W',
    'W   W  W      WW WW W',
    'W W W WWWWWWW  W W  W',
    'W W W WW    WW W W WW',
    'W W W    W     W W  W',
    'W W W WW W WWWWW WW W',
    'W W W W  WWW     W  W',
    'W W W WW     W W W WW',
    'W W W  W WWWWW W W  W',
    'W W WW WWW   W W WW W',
    'W W    W   W W W  W W',
    'W WWWWWW WWW W WWWW W',
    'W        W   W    W W',
    'WWWWWWWWWW W WWWWWW W',
    'W          W      W W',
    'W WWWWWWW WWWWWWWWW W',
    'W       W W         W',
    'WWWWWWW W WW WWWWWWWW',
    'W       W           W',
    'W WWWWWWWWWWWWWWWWW W',
    'W                 W W',
    'W WWWWWWWW W WWWW W W',
    'W W        W    W W W',
    'W W WWWWWWWWWWW W W W',
    'W W        W    W WWW',
    'W WWWWWWWW WWWWWW   W',
    'W        W        W W',
    'W WWWWWW WWWWWWWWWW W',
    'W      W            W',
    'WWWWW WW WWWW WWWWWWW',
    'W   W  W W          W',
    'W W WW WWW W WWW WWWW',
    'W W W      W   W    W',
    'W W WWWWWWWW W WWWW W',
    'W W   W      W W    W',
    'W WWW W WWWWWW W WWWW',
    'W   W W      W W    W',
    'WWW W WWWWWW W WWWW W',
    'F   W        W      W',
    'WWWWWWWWWWWWWWWWWWWWW'

];


// STATEMENTS --------------------------------------------------------
let currentMap = "";
let startPosition = "";
let currentPosition = "";
let currentArray = "";
let count = 0


const mapOne = document.getElementById("mapOne");
const mapTwo = document.getElementById("mapTwo");
const mapThree = document.getElementById("mapThree");
const starter = document.getElementById("startGame");
const restarter = document.getElementById("restartGame");
const toVictory = document.getElementById("victory");
const section = document.getElementById("gameBoard");
const audioEnd = new Audio("audio/end.mp3")
const audioWall = new Audio("audio/wall.mp3")
const startgame = new Audio("audio/startgame.mp3")
const boo = new Audio("audio/boo.mp3");
const movesCount = document.getElementById("movesCount")
const showCount = document.getElementById("showCount")
const finalMsg = document.getElementById("winMsg")
startgame.volume = 0.3;
showCount.innerHTML = 0




// Escolhendo o Mapa
mapOne.addEventListener("click", function(){

    removeAllChildNodes(section)

    starter.style.display = "inline-block"
    restarter.style.display = "none"
    starter.style.disabled = "false"
    mapOne.style.border = "3px #F07E63 solid"
    mapTwo.style.border = "none"
    mapThree.style.border = "none"
    toVictory.style.display = "none"
    startgame.pause()
    startgame.currentTime = 0;
    audioEnd.pause()
    audioEnd.currentTime = 0;
    showCount.innerHTML = 0
    

    currentMap = map1

    for (let i=0; i< currentMap.length;i++) {

        for (let j = 0 ; j < currentMap[i].length; j++){
        
            createMap(currentMap,i,j)
    
            if (currentMap[i][j] == "S") {
                startPosition = `${i}+${j}`
            }
        }
    }

    currentPosition = startPosition
    currentArray = currentPosition.split("+");
})

mapTwo.addEventListener("click", function(){

    removeAllChildNodes(section)

    starter.style.display = "inline-block"
    restarter.style.display = "none"
    starter.style.disabled = "false"
    mapOne.style.border = "none"
    mapTwo.style.border = "3px #F07E63 solid"
    mapThree.style.border = "none"
    toVictory.style.display = "none"
    startgame.pause()
    startgame.currentTime = 0;
    audioEnd.pause()
    audioEnd.currentTime = 0;
    showCount.innerHTML = 0
    



    currentMap = map2

    for (let i=0; i< currentMap.length;i++) {

        for (let j = 0 ; j < currentMap[i].length; j++){
        
            createMap(currentMap,i,j)
    
            if (currentMap[i][j] == "S") {
                startPosition = `${i}+${j}`
            }
        }
    }

    currentPosition = startPosition
    currentArray = currentPosition.split("+");
})

mapThree.addEventListener("click", function(){

    removeAllChildNodes(section)

    starter.style.display = "inline-block"
    restarter.style.display = "none"
    starter.style.disabled = "false"
    mapOne.style.border = "none"
    mapTwo.style.border = "none"
    mapThree.style.border = "3px #F07E63 solid"
    toVictory.style.display = "none"
    startgame.pause()
    startgame.currentTime = 0;
    audioEnd.pause()
    audioEnd.currentTime = 0;
    showCount.innerHTML = 0
    
    currentMap = map3

    for (let i=0; i< currentMap.length;i++) {

        for (let j = 0 ; j < currentMap[i].length; j++){
        
            createMap(currentMap,i,j)
    
            if (currentMap[i][j] == "S") {
                startPosition = `${i}+${j}`
            }
        }
    }

    currentPosition = startPosition
    currentArray = currentPosition.split("+");
})



// ---------------------- FUNCTIONS ------------------------------------------------------------

// Função para criar o MAPA
function createMap(map,line,column) {
    
    let divCreate = document.createElement("div");
    divCreate.setAttribute("id",`${line}+${column}`);
    divCreate.setAttribute("class", map[line][column])

    if(map[line][column] == "S" ){
        divCreate.innerHTML = "Start" 
    }
      
    section.appendChild(divCreate)
} 


// Função para criar o jogador
function createPlayer(cellId) {
    let start = document.getElementById(cellId);
    let divCreate = document.createElement("div");
    divCreate.setAttribute("id","player");
    start.appendChild(divCreate)
}

// função para remover o jogador do local atual
function replacePlayer(cellId) {
    let current = document.getElementById(cellId);
    let player = document.getElementById("player")
    current.removeChild(player)

}

// remove o mapa
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// função da vitória
function victory(){
    finalMsg.innerHTML = `You Got It!`
    toVictory.style.display = "flex"
    startgame.pause()
    startgame.currentTime = 0;
    audioEnd.play()
    if (currentMap === map3) {
    movesCount.innerHTML = `It only remained ${count} moves..`
    } else {movesCount.innerHTML = `You took ${count} moves..`}
    toVictory.style.backgroundColor = "rgba(52, 255, 62, 0.322)"
    replacePlayer(currentPosition)
    windowUp()
    
}

// função da derrota
function lost(){
    finalMsg.innerHTML = `You Lose!`
    toVictory.style.display = "flex"
    startgame.pause()
    startgame.currentTime = 0;
    boo.play()
    movesCount.innerHTML = `Your moves got to ZERO!`
    toVictory.style.backgroundColor = "#f1b4646e"
    replacePlayer(currentPosition)
    windowUp()
}

// subindo a tela
function windowUp() {
    window.scrollTo(0, 0);
};

// ------------------- GAME START ----------------------------------------------------------------


// inciando o jogador na tela

starter.addEventListener("click", function() {
    createPlayer(startPosition)
    restarter.style.display="inline-block"
    starter.style.display = "none"
    startgame.pause()
    startgame.currentTime = 0;
    startgame.play()
    showCount.style.display = "flex"
    if (currentMap === map3) {count = 221} else {count = 0}
    showCount.innerHTML = count
}
)

restarter.addEventListener("click", function() {
    let player = document.getElementById("player")
    if(player!=null) {replacePlayer(currentPosition)}
    toVictory.style.display = "none"
    
    createPlayer(startPosition)
    currentPosition = startPosition
    currentArray = currentPosition.split("+");
    startgame.pause()
    startgame.currentTime = 0;
    startgame.play()
    showCount.style.display = "flex"
    if (currentMap === map3) {count = 221} else {count = 0}
    showCount.innerHTML = count
    }
)


// ------------------- MOVING PLAYER --------------------------------------------------

document.addEventListener('keydown', function logKey(e) {
          
      if (e.code == "ArrowUp") {

        let newMove = `${parseInt(currentArray[0])-1}+${parseInt(currentArray[1])}`

        let testWall = document.getElementById(newMove).className
               
        if (testWall !== "W") {
                    
            replacePlayer(currentPosition)

            createPlayer(newMove)

            currentPosition = newMove
            currentArray = newMove.split("+")
            if (currentMap === map3) {count--} else {count++}
            showCount.innerHTML =`${count}`

            if (currentMap === map3 && count === 0){
                console.log("you lose!")
                lost() 
            }  

            if (testWall === "F"){
                console.log("you win!")
                victory()
                
            } 

        

        } else {audioWall.play()
                if (currentMap === map3) {count--} else {count++}
                showCount.innerHTML =`${count}`

                if (currentMap === map3 && count === 0){
                    console.log("you lose!")
                    lost() 
                }  
            
            }
      
      } else if (e.code == "ArrowDown") {

        let newMove = `${parseInt(currentArray[0])+1}+${parseInt(currentArray[1])}`

        let testWall = document.getElementById(newMove).className
               
        if (testWall !== "W") {
                    
            replacePlayer(currentPosition)

            createPlayer(newMove)

            currentPosition = newMove
            currentArray = newMove.split("+")

            if (currentMap === map3) {count--} else {count++}
            showCount.innerHTML =`${count}`

            if (currentMap === map3 && count === 0){
                console.log("you lose!")
                lost() 
            }  

            if (testWall === "F"){
                console.log("you win!")
                victory()
                               
            } 
           

        } else {audioWall.play()
            if (currentMap === map3) {count--} else {count++}
                showCount.innerHTML =`${count}`
                if (currentMap === map3 && count === 0){
                    console.log("you lose!")
                    lost() 
                }  }
  
      } else if (e.code == "ArrowRight") {
            
            let newMove = `${parseInt(currentArray[0])}+${parseInt(currentArray[1])+1}`

            let testWall = document.getElementById(newMove).className
                       
            if (testWall !== "W") {
                            
                replacePlayer(currentPosition)

                createPlayer(newMove)

                currentPosition = newMove
                currentArray = newMove.split("+")
                if (currentMap === map3) {count--} else {count++}
                showCount.innerHTML =`${count}`

                if (currentMap === map3 && count === 0){
                    console.log("you lose!")
                    lost() 
                }  

                if (testWall === "F"){
                    console.log("you win!")
                    victory()
                                   }
                
           }   else {audioWall.play()
                 if (currentMap === map3) {count--} else {count++}
                 showCount.innerHTML =`${count}`}

                 if (currentMap === map3 && count === 0){
                    console.log("you lose!")
                    lost() 
                }  
     
      } else {

    let newMove = `${parseInt(currentArray[0])}+${parseInt(currentArray[1])-1}`

    let testWall = document.getElementById(newMove).className
               
    if (testWall !== "W") {
                    
            replacePlayer(currentPosition)

            createPlayer(newMove)

            currentPosition = newMove
            currentArray = newMove.split("+")
            if (currentMap === map3) {count--} else {count++}
            showCount.innerHTML =`${count}`

            if (currentMap === map3 && count === 0){
                console.log("you lose!")
                lost() 
            }  

            if (testWall === "F"){
                console.log("you win!")
                victory()
            }
          
   } else {audioWall.play()
         if (currentMap === map3) {count--} else {count++}
         showCount.innerHTML =`${count}`}
         if (currentMap === map3 && count === 0){
            console.log("you lose!")
            lost() 
        }  

      }
});


