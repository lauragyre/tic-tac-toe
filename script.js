const squares = document.querySelectorAll('.square');

const gameBoard = ((squareStatus) => {
    for (let i = 0; i < 9; i++) {
        squares[i].innerHTML = squareStatus[i];
        
    }
  });

  const gameBrain = (function () {
   boardValue = {
    s1: 'x',
    s2: 'o',
    s3: 'x',
    s4: 'x',
    s5: 'o',
    s6: 'o',
    s7: 'o',
    s8: 'x',
    s9: 'x'
   }

   const makePlay = function (square, mark){
   
        boardValue[square] = mark;
        console.log(Object.values(boardValue));
        gameBoard(Object.values(boardValue)); 
   }
   return { makePlay }
  })();

  function Player(firstName) {
    const person = {};
    person.firstName = firstName;
    return person;
  }

  
 gameBrain.makePlay('s1', 'z');
 gameBrain.makePlay('s2', 'n');

 for (let i=0; i < squares.length; i++) {
 squares[i].addEventListener('click', (event)=>{
   event.target.style.backgroundColor = 'green';
 })
}