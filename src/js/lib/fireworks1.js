export default function fireworks1() {
  const stage = new createjs.Stage(document.getElementsByClassName("canvas-fireworks1")[0]);
  const background = new createjs.Shape();
  background.graphics.beginLinearGradientFill(["#191970", "#000000"], [0, 1], stage.canvas.width/2, 0, stage.canvas.width/2, stage.canvas.height)
                     .drawRect(0, 0, stage.canvas.width, stage.canvas.height);
  stage.addChild(background);

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick() {
    stage.update();
  }
}
