export default class Game{
    constructor(){
        this.turn = "X"
        this.board = new Array(9).fill(null)
    }

    displayOfBoard(){
        for (let i = 0; i < this.board.length; i++) {
            let tile = document.getElementsByClassName('board-tile')[i]
            tile.textContent = this.board[i]
            tile.classList.remove('winner')
            let winningCombinations = this.findingCombinations()
            if(winningCombinations && winningCombinations.includes(i)){
                tile.classList.add('winner')
            }
        }
    }

    changeTurn(){
        if (this.turn == "X"){
            this.turn = "O"
        }
        else{
            this.turn = "X"
        }
    }

    makeMove(i){
        if(this.findingCombinations()){
            return
        }
        
        if(this.board[i]){
            return
        }
        
        this.board[i] = this.turn
        
        
        let winningCombinations = this.findingCombinations()
        if (!winningCombinations) {
            this.changeTurn()
        }
    }

    findingCombinations(){
        let possibleCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        for (const combinations of possibleCombinations) {
            const [a,b,c] = combinations
            
            if(this.board[a] && (this.board[a] == this.board[b] && this.board[a] == this.board[c])){
                return combinations
            }
        }
        return null
    }

    checkTurn(){
        let playerX = document.querySelector('.player-x')
        let playerO = document.querySelector('.player-o')
        if(this.turn == "X"){
            playerX.classList.add('active')
            playerO.classList.remove('active')
            
        }else{
            playerO.classList.add('active')
            playerX.classList.remove('active')
        }
    }

}