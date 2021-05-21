function onLoad() {
  
  reshapeMaze();
  window.addEventListener('resize', reshapeMaze);

  function reshapeMaze() {

    const cellHeight = 60; //learn to pass this
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    
    // record these to the hidden #dataDiv
    document.querySelector('#width').textContent = newWidth;
    document.querySelector('#height').textContent = newHeight;

    let numCellsWide = Math.floor(newWidth / (cellHeight * 0.97));

    //track for reference
    console.log(numCellsWide);




  }

}





  //window.addEventListener('resize', reportWindowSize);
 /*
  function reportWindowSize() {  //will pass variable
    const cellHeight = 60; //learn to pass this value

    widthOutput.textContent = window.innerWidth;
    heightOutput.textContent = window.innerHeight;
  }
  

  window.onresize = reportWindowSize();
  console.log(reportWindowSize());

  const dataDiv = document.getElementById("hiddenTop");
  // dataDiv.style.display = "none";


  //let numCellsWide = Math.floor(widthOutput / (cellHeight * 0.97) );

  

  //insert cell divs
  const newMazeCells = document.createElement('div');
  newMazeCells.id = 'frame';
  newMazeCells.className ='grid-child testBorder';

  // console.log(numCellsWide);

  */