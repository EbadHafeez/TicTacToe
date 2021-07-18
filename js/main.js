import Game from "./Game.js";

let game = new Game()


let clickTiles = document.querySelectorAll('.board-tile')
clickTiles.forEach((tile) =>{
    tile.addEventListener('click', ()=>{
        onClickOfTile(tile.dataset.index)
    })
})

function onClickOfTile(i){
    game.makeMove(i)
    game.displayOfBoard()
    game.findingCombinations()
    game.checkTurn()
    console.log(game.turn)
    console.log(game.board)
}

let restart = document.querySelector('.restart')
restart.addEventListener('click', ()=>{
    if(game.turn == "O"){
        game.turn = "X"
        game.checkTurn()
        onGameRestart()
    }else{
        onGameRestart()
    }

})

function onGameRestart(){
    game = new Game()
    game.displayOfBoard()
    
}
game.checkTurn()