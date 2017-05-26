let stage = new createjs.Stage(document.getElementsByClassName("canvas-particle")[0]);

let particleList = [];
let particleLength = 30;
for (var i = 0; i < particleLength; i++) {
  let particle = new createjs.Shape();
  var size = 10;
  particle.graphics.beginFill("#f0f").drawCircle(0, 0, size);
  stage.addChild(particle);
  particle.x = stage.canvas.width * Math.random();
  particle.y = stage.canvas.height * Math.random();
  particle.vx = 0;
  particle.vy = 0;
  particleList[i] = particle;
}

createjs.Ticker.addEventListener("tick", handleTick);
function handleTick() {
  for (var i = 0; i < particleLength; i++) {
    let particle = particleList[i];
    particle.vy += 1;
    particle.vx *= 0.95;
    particle.vy *= 0.95;
    particle.x += particle.vx;
    particle.y += particle.vy;
    if(particle.y > stage.canvas.height - size) {
      particle.y = stage.canvas.height - size;
      particle.vy *= -1;
    }
  }
  stage.update();
}
