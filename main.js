import './style.css'

// Adding a rain drop div tag
const rainSim = document.querySelector(".rain-sim");
// Adding snow div tag
const snowSim = document.querySelector(".snow-sim");
// Refernecing toggle tag
const toggle = document.getElementById('header-checkbox');

// boolen for toggleing the different simulations
var toggleSim;

// Event listener for switchting between the two simulations (rain vs. snow)
toggle.addEventListener('click', () => {
  toggleSim = !toggleSim;
  if(toggleSim) {
    rainGame();
  } else {
    snowGame();
  }
}); 

// Event listener for the pause button (will freeze current simulation)
document.getElementById('pause-btn').addEventListener('click', () => {
  const stopRain = document.querySelectorAll('rain');

  // Iterating through each rain/snow element to pause the animation
  for ( var index = 0; index < stopRain.length; index++) {
    stopRain[index].style.animationPlayState = "paused";
  }

  const stopSnow = document.querySelectorAll('snow');
  for ( var index = 0; index < stopSnow.length; index++) {
    stopSnow[index].style.animationPlayState = "paused";
  }
});

// Event listener for the start button (will start a new simulation)
document.getElementById('start-btn').addEventListener('click', () => {
  const startRain = document.querySelectorAll("rain");
  
  // Iterating through each rain/snow element to reset the styling
  for ( var index = 0; index < startRain.length; index++) {
    styling(startRain[index]);
    startRain[index].style.animationPlayState = "running";
  }

  const startSnow = document.querySelectorAll("snow");
  for ( var index = 0; index < startSnow.length; index++) {
    styling(startSnow[index]);
    startSnow[index].style.animationPlayState = "running";
  }
});


// Styling function for element item
function styling(item) {
  let styleElement = {
    width: 5 + "px",
    positionX: Math.floor(Math.random() * window.innerWidth) + "px",
    delay: Math.random() * -10 + "s",
    duration: Math.random() * 5 + "s",
    opactiy: Math.random() * 1.5,
  }
  item.style.width = styleElement.width;
  item.style.left = styleElement.positionX;
  item.style.animationDelay = styleElement.delay;
  item.style.animationDuration = styleElement.duration;
  item.style.opactiy = styleElement.opactiy;
}

// Removing the elments before rendering another set of elements
function removeElements(item) {
  document.getElementById(item).innerHTML = "";
}

// Simulating the rain
function rainGame() {

  // Removing any existing elements in snow sim before rendering more
  removeElements("rain-sim");

  // This will replace the element(snow) that is already showing
  rainSim.parentNode.replaceChild(snowSim, rainSim); 

  // Looping to create each individual rain drop
  for ( var index = 0; index <= 50; index++) {
    // Creating the raindrop element
    let rain = document.createElement("rain");
    // Styling
    styling(rain);
    rain.style.background = "linear-gradient(transparent, #5d8aa8)";
    
    // Inserting element (rain) to the DOM
    rainSim.append(rain);
  }
}

// Simulating the snow
function snowGame() {

  // Removing any existing elements in snow sim before rendering more
  removeElements("snow-sim");

  // Replacing the rainSim node with the snowSim node
  snowSim.parentNode.replaceChild(rainSim, snowSim);

  // Looping to create each individual snow flake
  for ( var index = 0; index <= 50; index++) {
    // Creating the raindrop element
    let snow = document.createElement("snow");
    // Styling
    styling(snow);
    snow.style.background = "linear-gradient(transparent,white)";
    
    // Inserting element (snow) into the DOM
    snowSim.append(snow);
  }
}

window.onload = snowGame();