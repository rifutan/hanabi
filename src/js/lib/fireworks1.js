if (document.getElementsByClassName("canvas-fireworks1")[0]) {
  let stage = new createjs.Stage(document.getElementsByClassName("canvas-fireworks1")[0]);

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick() {
    stage.update();
  }
}
