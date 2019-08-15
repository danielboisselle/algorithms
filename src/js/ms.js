const randomNum = (min, max) => Math.floor(Math.random() * (+max - +min)) + +min;

class GameBoard {
  constructor(row, col, bombs) {
    this.row = row;
    this.col = col;
    this.board = (() => {
      const board = [];
      
      while (row) {
        board.push(Array(col).fill('0'))
        row--;
      }

      return board;
    })()

    while(bombs > 0) {
      let randRow = randomNum(0, this.row);
      let randCol = randomNum(0, this.col);

      console.log(this.board)

      if (this.board[randRow][randCol] === '0') {
        console.log(this.board[randRow][randCol] )
        this.board[randRow][randCol] = 'X'
        bombs--;
      }
    }
  }
}