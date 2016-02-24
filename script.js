(function() {
  'use strict';
// Your JS goes here

  var body = document.getElementsByTagName('body')[0];
  var checkerBoardEl = document.createElement('div');
  var checkerBoardContainer;
  body.style.margin = '0';

  // init checkerboard elements

  checkerBoardEl.id = "checkerBoardContainer";

  body.insertBefore(checkerBoardEl, document.getElementsByTagName('script')[0]);

  checkerBoardContainer = document.getElementById('checkerBoardContainer');
  checkerBoardContainer.style.position = 'relative';

  // create div factory
  function createBlock(color){
    var newBlock = document.createElement('div');

    newBlock.style.paddingBottom = "11.1%";
    newBlock.style.width = "11.1%";
    newBlock.style.boxSizing = "border-box";
    newBlock.style.background = color;
    newBlock.style.border = "1px solid black";
    newBlock.style.float = "left";

    return newBlock;
  }

  var blockColor = 'black';
  // create a new row of divs
  function newRow(){
    var nRow = document.createElement('div');
    nRow.className = "row";
    nRow.style.paddingBottom = "11.1%";

    checkerBoardContainer.appendChild(nRow);

    for (var i = 0; i < 9; i++) {
      if( blockColor == 'black') {
        blockColor = 'red';
      } else if(blockColor == 'red') {
        blockColor = 'black';
      }
       nRow.appendChild(createBlock(blockColor));
    }
  }

  // populate checkerboard
  // for (var i = 0; i < 5; i++) {
  while(checkerBoardContainer.offsetHeight < window.innerHeight) {
    newRow();
   }
})()
