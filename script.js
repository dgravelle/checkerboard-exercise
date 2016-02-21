// Your JS goes here

  var body = document.getElementsByTagName('body')[0];
  body.style.height = window.innerHeight + 'px';
  body.style.margin = '0';

  // get windows height
  var winHeight = window.innerHeight;

  // init checkerboard
  var checkerBoardEl = document.createElement('div');
      checkerBoardEl.id = "checkerBoardContainer";

  body.insertBefore(checkerBoardEl, document.getElementsByTagName('script')[0]);

  // store checkerBoardContainer
  var checkerBoardContainer = document.getElementById('checkerBoardContainer');
      checkerBoardContainer.style.position = 'relative';

  // create div factory
  function newBlock(color){
    var newBlock = document.createElement('div');

    newBlock.style.paddingBottom = "11.1%";
    newBlock.style.width = "11.1%";
    newBlock.style.boxSizing = "border-box";
    newBlock.style.background = `rgb(${color[0]},${color[1]},${color[2]})`;
    newBlock.style.border = "1px solid black";
    newBlock.style.float = "left";

    return newBlock;
  }

  // Colors to init gradient
  var primaryColor = randomColor();
  var secondaryColor = randomColor();

  // update colors
  function updateColors(primaryArr,secondaryArr) {
    
  }

  // var blockColor = 'black';
  // create a new row of divs
  function newRow(){

    var nRow = document.createElement('div');
      nRow.className = "row";
      nRow.style.paddingBottom = "11.1%";

    checkerBoardContainer.appendChild(nRow);

    for (var i = 0; i < 9; i++) {
      if( blockColor == 'black') {
        blockColor = 'red';
        nRow.appendChild(newBlock());
      } else if(blockColor == 'red') {
        blockColor = 'black';
      }
    }
  }

  // color generator
  function randomColor(){

    function randomRGBNumber() {
      return Math.floor(Math.random()*255);
    }

    var r = randomRGBNumber();
    var g = randomRGBNumber();
    var b = randomRGBNumber();

    return [r,g,b];
  }



  // populate checkerboard
  while(checkerBoardContainer.offsetHeight < window.innerHeight) {
    newRow();
   }
