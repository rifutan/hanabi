let stage = new createjs.Stage(document.getElementsByClassName("canvas-particle")[0]);

let particle = new createjs.Shape();
particle.graphics.beginFill("#f0f").drawCircle(0, 0, 10);
stage.addChild(particle);

createjs.Ticker.addEventListener("tick", handleTick);
function handleTick() {
  stage.update();
}
