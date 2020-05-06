
 const gameBoard = (() => {
    let reset = document.querySelector('#reset');
    const squares = document.querySelectorAll('.square');
    const bannerRef = document.querySelector('#winner');
    reset.addEventListener('click', function (){
        for (let i=0; i < squares.length; i++) {
            gameBrain.makePlay(squares[i].id, null, true)
        }
        while (bannerRef.hasChildNodes()) {
        bannerRef.removeChild(bannerRef.firstChild);
        }
    })
    for (let i=0; i < squares.length; i++) {
        squares[i].addEventListener('click', (event)=>{
          gameBrain.makePlay(event.target.id, 'x', false, false);
          gameBrain.makePlay('s'+(Math.floor(Math.random())*9+1), 'o', false, true);
          gameBrain.evaluate();
        })
       }
    const update = function (squareStatus){
       
       for (let i = 0; i < 9; i++) {
        squares[i].innerHTML = squareStatus[i];
       
    }}
    

    return {update}

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

   const makePlay = function (square, mark, reset, computer){
        if (!boardValue[square] || reset) {
        boardValue[square] = mark;
        }
        else if (computer == true) {
            while (boardValue[square] && Object.values(boardValue).includes(null)) {
                square = 's'+(Math.floor(Math.random()*9) + 1);
            }
            boardValue[square] = mark;
        }
        else {alert('choose a blank square');}

        gameBoard.update(Object.values(boardValue)); 
   }

   
  

   const evaluate = function () {
      let winner;
      draw = document.createTextNode("It's a draw, try again.");
      const banner = document.querySelector('#winner');
      if (
         boardValue['s1'] == 'x' && boardValue['s2'] == 'x' && boardValue['s3'] == 'x' ||
         boardValue['s4'] == 'x' && boardValue['s5'] == 'x' && boardValue['s6'] == 'x' ||
         boardValue['s7'] == 'x' && boardValue['s8'] == 'x' && boardValue['s9'] == 'x' ||
         boardValue['s1'] == 'x' && boardValue['s4'] == 'x' && boardValue['s7'] == 'x' ||
         boardValue['s2'] == 'x' && boardValue['s5'] == 'x' && boardValue['s8'] == 'x' ||
         boardValue['s3'] == 'x' && boardValue['s6'] == 'x' && boardValue['s9'] == 'x' ||
         boardValue['s1'] == 'x' && boardValue['s5'] == 'x' && boardValue['s9'] == 'x' ||
         boardValue['s3'] == 'x' && boardValue['s5'] == 'x' && boardValue['s7'] == 'x'  
           ) {
        winner = "you win!";   
        announce = document.createTextNode(`3 in a row, ${winner}`);
        banner.append(announce);}
        else if (
            boardValue['s1'] == 'o' && boardValue['s2'] == 'o' && boardValue['s3'] == 'o' ||
            boardValue['s4'] == 'o' && boardValue['s5'] == 'o' && boardValue['s6'] == 'o' ||
            boardValue['s7'] == 'o' && boardValue['s8'] == 'o' && boardValue['s9'] == 'o' ||
            boardValue['s1'] == 'o' && boardValue['s4'] == 'o' && boardValue['s7'] == 'o' ||
            boardValue['s2'] == 'o' && boardValue['s5'] == 'o' && boardValue['s8'] == 'o' ||
            boardValue['s3'] == 'o' && boardValue['s6'] == 'o' && boardValue['s9'] == 'o' ||
            boardValue['s1'] == 'o' && boardValue['s5'] == 'o' && boardValue['s9'] == 'o' ||
            boardValue['s3'] == 'o' && boardValue['s5'] == 'o' && boardValue['s7'] == 'o'
        ) {
            winner = "computer wins!";
            announce = document.createTextNode(`3 in a row, ${winner}`);
            banner.append(announce);}
    else if (!Object.values(boardValue).includes(null)) {banner.append(draw);}
       
   }

   return { makePlay, evaluate }
  })();

  gameBrain.makePlay('s1', 'x', false, true);
  gameBrain.makePlay('s2', 'o', false, true);
 


 