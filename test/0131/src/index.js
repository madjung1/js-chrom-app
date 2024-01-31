const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const colorBtn = document.querySelector("button");
  const back = document.querySelector("body");
  function randomColor(num){
    return Math.floor(Math.random()*num)
  }
  console.log(colorBtn);
  function colorChange(){
    var color1 = colors[randomColor(colors.length)];
    var color2 = colors[randomColor(colors.length)];
    back.style.background = `linear-gradient(90deg, ${color1} , ${color2})`;
  }
  colorBtn.onclick = colorChange;

  