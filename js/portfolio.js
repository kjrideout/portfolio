function onLoad() {
  let cell_data = []

  let cellHeight = 60;
  let ribbonWidth = document.querySelector("#ribbonMaze").offsetWidth;
  let numCellsWide = Math.floor(ribbonWidth / (cellHeight * 0.97) );

  //insert cells divs
  
  const newMazeCells = document.createElement('div');
  newMazeCells.id = 'frame';
  newMazeCells.className ='grid-child testBorder';

  console.log(numCellsWide);


}

