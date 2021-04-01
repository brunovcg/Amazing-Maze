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


// replacePlayer(currentPosition)


// console.log(player.parentElement.className)
// console.log(player.parentElement.id)
// let teste = document.getElementById("8+20")
// console.log(teste.className)


// ------------------- MOVING PLAYER --------------------------------------------------

document.addEventListener('keydown', function logKey(e) {

    console.log(e.code)
           
      if (e.code == "ArrowUp") {

        
     
      
      } else if (e.code == "ArrowDown") {
      
     
  
      } else if (e.code == "ArrowRight") {

            
                let newMove = `${parseInt(currentArray[0])}+${parseInt(currentArray[1])+1}`

                let testWall = document.getElementById(newMove).className
            
                console.log(testWall)
            
            if (testWall !== "W") {
                            
                replacePlayer(currentPosition)

                createPlayer(newMove)

                currentPosition = newMove
                currentArray = newMove.split("+")


                if (testWall === "F"){
                    console.log("you win!")
                }
           }   
     
      } else {}
});


