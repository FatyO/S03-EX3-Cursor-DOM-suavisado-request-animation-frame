const element = document.getElementById("tester");
let start;

let mouseX = 0;
let mouseY = 0;

let smoothMouseX = 0;
let smoothMouseY = 0;
const COF = 0.07; 

function updateMouseCoords(eventData) {
    mouseX = eventData.clientX;
    mouseY = eventData.clientY;

   
}

document.addEventListener("mousemove", updateMouseCoords);




function tick(timeStamp) {
    if (start === undefined) {
        start = timeStamp;
    }
    smoothMouseX += (mouseX - smoothMouseX) * COF;
    smoothMouseY += (mouseY - smoothMouseY) * COF;

    element.style.transform = `translate(${smoothMouseX}px, ${smoothMouseY}px)`;
  
  
    
    
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);


