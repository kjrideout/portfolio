function onLoad() {
  
  redrawMaze();
  window.addEventListener('resize', reloadPage);

  // just reload the page for now until you get window redraw working
  function reloadPage() {
    window.onresize = function(){ location.reload(); }
  }
  
  // can only use once
  // not finished yet becuase you need to figure out how to clear the maze out
  function redrawMaze() {

    const cellHeight = 60; //learn to pass this
    const newWidth = window.innerWidth;
    const ribbonHeight = document.getElementById('ribbonMaze').offsetHeight;

    const numCellsHigh = Math.floor(ribbonHeight / cellHeight);
    console.log(numCellsHigh);

    const numCellsWide = Math.floor(newWidth / (cellHeight * 0.97));
    console.log(numCellsWide);

    const numCells = numCellsHigh * numCellsWide;
    console.log(numCells);

    let cellGridContent = document.getElementById('cellGrid');
    cellGridContent.style.gridTemplateColumns = "repeat(" + numCellsWide + ", 1fr)";
    
    oldNumCells = cellGridContent.childElementCount;

    for (let i = cellGridContent.childElementCount; i < numCells; i++) {
      const newCell = document.createElement('div');
      newCell.id = "cell-" + i;
      newCell.className = "grid-child cell";
      cellGridContent.appendChild(newCell);
    }
    console.log(cellGridContent);
  }
}