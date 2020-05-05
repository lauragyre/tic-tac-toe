
console.log('running');

const gameBoard = ((squareStatus) => {
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < 9; i++) {
        squares[i].innerHTML = squareStatus[i];
        
    }
  });

  const gameBrain = function (square, mark) {
   const s1 = "x";
   const s2 = "x";
   const s3 = "o";
   const s4 = "x";
   const s5 = "o";
   const s6 = "o";
   const s7 = "o";
   const s8 = "x";
   const s9 = "x";
        square = mark;
        gameBoard([s1, s2, s3, s4, s5, s6, s7, s8, s9]); 
        
  }

  function Player(firstName) {
    const person = {};
    person.firstName = firstName;
    return person;
  }

 
  gameBrain('s1', 'z');
  