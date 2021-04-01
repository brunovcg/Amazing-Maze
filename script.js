
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
    "WWSWWWWWWWWWWWWWWWWWW",
    "W  W        W W     W",
    "W WW WW WWW W WWWWW W",
    "W W  W  W W       W W",
    "W W WW WW WWWWWWW W W",
    "W W  W          W   W",
    "W WW WWWWW WWWWWWWW W",
    "W  W   W W    W     W",
    "WW WWW W WWWW WWWWWWW",
    "WW     W   W    W   W",
    "WWW WWWW WWW WWWW W W",
    "W W W    W        W W",
    "W W W WWWW WWWW WWW W",
    "W   W      W    W   W",
    "WWWWWWWWWWWWWWWWWFWWW",
];

const map3 = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W         W         W",
    "S WWWWWWW W WWWW WW W",
    "WWW    W  W W    W  W",
    "F W WW W WW W WWWW WW",
    "W W  W         W   WW",
    "W WW WWW WWWWWWW WWWW",
    "W W  W           W  W",
    "W W WWWWWWWW W W WW W",
    "W WWW      W W WWW  W",
    "W      WWWWW W     WW",
    "WWW  W W     W WWW  W",
    "W WWWW W WWW W W W WW",
    "W        W          W",
    "WWWWWWWWWWWWWWWWWWWWW"

];


// STATEMENTS --------------------------------------------------------
let currentMap = "";
let startPosition = "";
let currentPosition = "";
let currentArray = "";


const mapOne = document.getElementById("mapOne");
const mapTwo = document.getElementById("mapTwo");
const mapThree = document.getElementById("mapThree");
const starter = document.getElementById("startGame");
const restarter = document.getElementById("restartGame");
const toVictory = document.getElementById("victory");
const section = document.getElementById("gameBoard");


// Escolhendo o Mapa
mapOne.addEventListener("click", function(){

    removeAllChildNodes(section)

    starter.style.display = "inline-block"
    restarter.style.display = "none"
    starter.style.disabled = "false"
    

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
    toVictory.style.display = "flex"
}

// ------------------- GAME START ----------------------------------------------------------------


// inciando o jogador na tela

starter.addEventListener("click", function() {
    createPlayer(startPosition)
    restarter.style.display="inline-block"
    starter.style.display = "none"
}
)

restarter.addEventListener("click", function() {
    
    toVictory.style.display = "none"
    replacePlayer(currentPosition)
    createPlayer(startPosition)
    currentPosition = startPosition
    currentArray = currentPosition.split("+");
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

            if (testWall === "F"){
                console.log("you win!")
                victory()
                
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

            if (testWall === "F"){
                console.log("you win!")
                victory()
                // replacePlayer(currentPosition)
            }
        }     
  
      } else if (e.code == "ArrowRight") {
            
            let newMove = `${parseInt(currentArray[0])}+${parseInt(currentArray[1])+1}`

            let testWall = document.getElementById(newMove).className
                       
            if (testWall !== "W") {
                            
                replacePlayer(currentPosition)

                createPlayer(newMove)

                currentPosition = newMove
                currentArray = newMove.split("+")

                if (testWall === "F"){
                    console.log("you win!")
                    victory()
                    // replacePlayer(currentPosition)
                }
           }   
     
      } else {

    let newMove = `${parseInt(currentArray[0])}+${parseInt(currentArray[1])-1}`

    let testWall = document.getElementById(newMove).className
               
    if (testWall !== "W") {
                    
            replacePlayer(currentPosition)

            createPlayer(newMove)

            currentPosition = newMove
            currentArray = newMove.split("+")

            if (testWall === "F"){
                console.log("you win!")
                victory()
                // replacePlayer(currentPosition)
            }
   }

      }
});


