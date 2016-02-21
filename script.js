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
      checkerBoardContainer.style.height = window.innerHeight + 'px';
      checkerBoardContainer.style.position = 'relative';

  // create div factory
  function newDiv(color){
    var newDiv = document.createElement('div');

    newDiv.style.height = "100%";
    newDiv.style.width = "10%";
    newDiv.style.boxSizing = "border-box";
    newDiv.style.background = color;
    newDiv.style.border = "1px solid black";
    newDiv.style.float = "left";

    return newDiv;
  }

  // create a new row of divs
  function newRow(){
    var nRow = document.createElement('div');
    nRow.className = "row";
    nRow.style.height = "10%";

    checkerBoardContainer.appendChild(nRow);

    for (var i = 0; i < 20; i++) {

      if(i < 10) {
        if(i%2 === 0 ){
          nRow.appendChild(newDiv('red'));
        } else {
          nRow.appendChild(newDiv('black'));
        }
      } else {
        if(i%2 === 0 ){
          nRow.appendChild(newDiv('black'));
        } else {
          nRow.appendChild(newDiv('red'));
        }
      }
    }
  }

  // populate checkerboard
  for (var i = 0; i < 5; i++) {
    newRow();
   }
