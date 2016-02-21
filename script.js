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

  var checkerBoardContainer = document.getElementById('checkerBoardContainer');
      // checkerBoardContainer.style.height = window.innerHeight + 'px';
      checkerBoardContainer.style.position = 'relative';

  // create div factory
  function newDiv(color){
    var newDiv = document.createElement('div');

    newDiv.style.paddingBottom = "11.1%";
    newDiv.style.width = "11.1%";
    newDiv.style.boxSizing = "border-box";
    newDiv.style.background = color;
    newDiv.style.border = "1px solid black";
    newDiv.style.float = "left";

    return newDiv;
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
       nRow.appendChild(newDiv(blockColor));

    }
  }

  // populate checkerboard
  // for (var i = 0; i < 5; i++) {
  while(checkerBoardContainer.offsetHeight < window.innerHeight) {
    newRow();
   }
