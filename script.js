
 const gameBoard = (() => {
    let reset = document.querySelector('#reset');
    const squares = document.querySelectorAll('.square');
    let player = 'x';
    reset.addEventListener('click', function (){
        for (let i=0; i < squares.length; i++) {
            gameBrain.makePlay(squares[i].id, null, true)
        }
    })
    for (let i=0; i < squares.length; i++) {
        squares[i].addEventListener('click', (event)=>{
          gameBrain.makePlay(event.target.id, player, false);
        })
       }
    const update = function (squareStatus){
        console.log('updating');
        console.log(squareStatus);
       for (let i = 0; i < 9; i++) {
        console.log("this" + squares[i]);
        squares[i].innerHTML = squareStatus[i];
       
    }}
    const playerToggle = function () {
        player = (player == 'x')? 'o' : 'x';
    }
    

    return {update, playerToggle}

  })();


  const gameBrain = (function () {
   boardValue = {
    s1: null,
    s2: null,
    s3: null,
    s4: null,
    s5: null,
    s6: null,
    s7: null,
    s8: null,
    s9: null
   }

   const makePlay = function (square, mark, reset){
        if (!boardValue[square] || reset) {
        boardValue[square] = mark;
        gameBoard.playerToggle();
        } else {alert('choose a blank square');}
        console.log(Object.values(boardValue));
        gameBoard.update(Object.values(boardValue)); 
   }

   const evaluate = function () {
       const banner = document.querySelector('#winner');
       text = document.createTextNode('3 in a row, X wins!');
       banner.append(text);
   }

   return { makePlay, evaluate }
  })();

  gameBrain.makePlay('s1', 'x', false);
  gameBrain.makePlay('s2', 'o', false);
  gameBrain.evaluate();
 


 