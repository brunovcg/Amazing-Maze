const map = [
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

let currentMap = map

// ---------------------- FUNCTIONS --------------------------------------------------------------

// Função para criar o MAPA
function createMap(map,line,column) {
    let section = document.getElementById("gameBoard");
    let divCreate = document.createElement("div");
    divCreate.setAttribute("id",`${line}+${column}`);
    divCreate.setAttribute("class", map[line][column])

    if(map[line][column] == "S" ){
        divCreate.innerHTML = "Start" 
    }
      
    section.appendChild(divCreate)
} 

let startPosition = "9+0"
let currentPosition = startPosition
let currentArray = currentPosition.split("+")


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

// função da vitória
function victory(){

    let toVictory = document.getElementById("victory");

    toVictory.style.display = "flex"
}

// ------------------- GAME START ----------------------------------------------------------------

// Criando MAPA
for (let i=0; i< currentMap.length;i++) {

    for (let j = 0 ; j < currentMap[i].length; j++){
    
        createMap(currentMap,i,j)

    }
}


// inciando o jogador na tela
const starter = document.getElementById("startGame");
starter.addEventListener("click", function() {
createPlayer(startPosition)})




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
                replacePlayer(currentPosition)
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
                replacePlayer(currentPosition)
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
                    replacePlayer(currentPosition)
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
                replacePlayer(currentPosition)
            }
   }

      }
});


