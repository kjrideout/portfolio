function onLoad() {

  window.addEventListener('resize', function() {location.reload();} );
  
  const cellHeight = 60; //learn to pass this
  const xSize = Math.floor(document.getElementById('gameGrid').offsetWidth / (cellHeight * 0.95));
  const ySize = Math.floor(document.getElementById('gameGrid').offsetHeight / cellHeight);
  const cellDiv = document.getElementById('gameGrid');
  
  cellDiv.style.gridTemplateColumns = "repeat(" + xSize + ", 1fr)";
  
  for (let y = 0; y < ySize; y++) {
    for(let x = 0; x < xSize; x++) {
      const newCell = document.createElement('div');
      newCell.id = "cell-" + x +"x-" + y +"y";
      newCell.className = "grid-child cell";
      //newCell.innerHTML = "x";
      cellDiv.appendChild(newCell);
    }
  }

  
  // 
  for (let i = 0; i < cellDiv.childElementCount; i++) {
    cellDiv.children[i].innerHTML = "x"
  }




  // array of 4 top right bottom left

}





  /*
  stickfigHTML = 
    '<div id=cellGrid class="grid-container"' +
    'style="display: grid; grid-gap: 0px; grid-template-columns: repeat(17, 1fr);">' +
      '<div id="cell-0" class="grid-child cell">'
        '<a href="https://github.com/kjrideout">'
          '<img src="img/stickfig.png" id="stickfig">'
        '</a>'
      '</div>'
      '<!--remaining divs for this element will be inserted by js-->' 
    '</div>';
  */

  //let startHTML = document.cloneNode

  //while(cellContainer.firstChild) {
  //  cellContainer.removeChild(cellContainer.firstChild);
  //}



  /*


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

  */
