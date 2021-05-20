function onLoad() {
  let pattern_data = [];
  let color_data = [];

  setupPattern(pattern_data);
  setupColors(color_data);
  makePattern(pattern_data, color_data);

  document.querySelector('#speed').addEventListener('click', runAnimation());
  
  function runAnimation() {
    let speed = document.getElementById('speed').value;
    if (speed > 0) {
      shiftColors(color_data, 'forward');
    } else if (speed < 0) {
      shiftColors(color_data, 'reverse');
    }
    makePattern(pattern_data, color_data);

    let container = document.getElementById('container');
    container.removeChild(container.firstChild);

    setTimeout(runAnimation, (325 - Math.abs(speed) * 25));
  }

  function shiftColors(color_data, direction) {
    if (direction === 'forward') {
      color_data.shift();
      color_data.push(getRandomColor());
    } else if (direction === 'reverse') {
      color_data.pop();
      color_data.unshift(getRandomColor());
    }
  }

  function makePattern(pattern_data, color_data) {
    newPattern = document.createElement('div');
    newPattern.id = 'frame';
    for (let i = 0; i < pattern_data.length; i++) {
      const newDiv = document.createElement('div');
      const layerData = pattern_data[i];

      newDiv.style.top = layerData[0] + 'px';
      newDiv.style.left = layerData[1] + 'px';
      newDiv.style.height = layerData[2] + 'px';
      newDiv.style.width = layerData[3] + 'px';
      newDiv.style.background = color_data[i];
      
      newDiv.style.borderTopLeftRadius = '38% 10%';
      newDiv.style.borderTopRightRadius = '0%';
      newDiv.style.borderBottomRightRadius = '38% 10%';
      newDiv.style.borderBottomLeftRadius = '0%';

      newPattern.appendChild(newDiv);
    }
    document.getElementById('container').appendChild(newPattern);
  }

  function setupColors(color_data) {
    for (let i = 0; i < pattern_data.length; i++) {
      color_data[i] = getRandomColor();
    }
  }

  function getRandomColor() {
    const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];   
    const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
    const color = colorsArr[randomColorIdx];
    return color;
  }

  function setupPattern(pattern_data) {
    let topPosition = 25;
    let leftPosition = 25;
    let height = 420;
    let width = height * 1.618;

    for (i = 0; width > 25; i++) {
      let layerData = [];

      layerData[0] = Math.round(topPosition);
      layerData[1] = Math.round(leftPosition);
      layerData[2] = Math.round(height);
      layerData[3] = Math.round(width);

      pattern_data[i] = layerData;
      
      width -= (20 * 1.618);
      height -= 20;        
      topPosition += 10;
      leftPosition += (10 * 1.618);
    }
  }
}