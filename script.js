(function() {
  'use strict';

  // Your JS goes here

  var body = document.getElementsByTagName('body')[0];
  var checkerBoardEl;
  var checkerBoardContainer;
  var blocks;
  var changeBlocksId;
  var randomColor = function() {
    var randomRGBNumber = function() {
      return Math.floor(Math.random() * 255);
    };

    randomRGBNumber();
    var red = randomRGBNumber();
    var green = randomRGBNumber();
    var blue = randomRGBNumber();

    return [red, green, blue];
  };
  var startColorChange = function() {
    changeBlocksId = window.setTimeout(startColorChange, 2000);
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.background = 'rgb(' + randomColor().join(',') + ')';
    }
  };
  var stopChange = function() {
    window.clearTimeout(changeBlocksId);
  };

  body.style.height = window.innerHeight + 'px';
  body.style.margin = '0';

  // init checkerboard
  checkerBoardEl = document.createElement('div');
  checkerBoardEl.id = 'checkerBoardContainer';

  body.insertBefore(checkerBoardEl, document.getElementsByTagName('script')[0]);

  // store checkerBoardContainer
  checkerBoardContainer = document.getElementById('checkerBoardContainer');
  checkerBoardContainer.style.position = 'relative';

  // create div factory
  var createBlock = function(color) {
    var newBlock = document.createElement('div');

    newBlock.className = 'block';
    newBlock.style.paddingBottom = '11.1%';
    newBlock.style.width = '11.1%';
    newBlock.style.boxSizing = 'border-box';
    newBlock.style.background = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
    newBlock.style.float = 'left';
    return newBlock;
  };

  // create a new row of divs
  var newRow = function() {
    var nRow = document.createElement('div');

    nRow.className = 'row';
    nRow.style.paddingBottom = '11.1%';

    checkerBoardContainer.appendChild(nRow);

    for (var i = 0; i < 9; i++) {
      nRow.appendChild(createBlock(randomColor()));
    }
  };

  blocks = document.getElementsByClassName('block');

  // populate checkerboard
  while (checkerBoardContainer.offsetHeight < window.innerHeight) {
    newRow();
  }

  startColorChange();

  body.addEventListener('click', function() {
    stopChange();
  });
})();
