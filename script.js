(function() {
  'use strict';

  var body = document.getElementsByTagName('body')[0];
  var createEl = function(element) {
    return document.createElement(element);
  }
  var checkerBoardEl = document.createElement('div');
  var checkerBoardContainer;
  var randomColor = function() {
    var randomRGBNumber = function() {
      return Math.floor(Math.random() * 255);
    };

    var red = randomRGBNumber();
    var green = randomRGBNumber();
    var blue = randomRGBNumber();

    return [red, green, blue];
  };
  var increaseBlue = function(color) {
    if (color) {
      color[1] += 8;
    }
  };
  var primaryColor = randomColor();
  var secondaryColor = randomColor();
  var colorToggle = true;
  var createBlock = function(color) {
    var newBlock = createEl('div');

    newBlock.style.paddingBottom = '11.1%';
    newBlock.style.width = '11.1%';
    newBlock.style.float = 'left';
    newBlock.style.background = 'rgb(' + color.join(',').toString() + ')';

    return newBlock;
  };
  var newRow = function() {
    var nRow = document.createElement('div');

    nRow.className = 'row';
    nRow.style.paddingBottom = '11.1%';

    checkerBoardContainer.appendChild(nRow);

    for (var i = 0; i < 9; i++) {
      if (colorToggle) {
        increaseBlue(primaryColor);
        nRow.appendChild(createBlock(primaryColor));
        colorToggle = !colorToggle;
      }
      else {
        increaseBlue(secondaryColor);
        nRow.appendChild(createBlock(secondaryColor));
        colorToggle = !colorToggle;
      }
    }
  };

  checkerBoardEl.id = 'checkerBoardContainer';
  body.insertBefore(checkerBoardEl, document.getElementsByTagName('script')[0]);

  checkerBoardContainer = document.getElementById('checkerBoardContainer');

  while (checkerBoardContainer.offsetHeight < window.innerHeight) {
    newRow();
  }
})();
