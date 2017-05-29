export default function fireworks1() {
  const stage = new createjs.Stage(document.getElementsByClassName("canvas-fireworks1")[0]);
  const background = new createjs.Shape();
  background.graphics.beginLinearGradientFill(["#191970", "#000000"], [0, 1], stage.canvas.width/2, 0, stage.canvas.width/2, stage.canvas.height)
                     .drawRect(0, 0, stage.canvas.width, stage.canvas.height);
  stage.addChild(background);

  const fireworksList = [];
  emitFireworks();

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick() {
    //updateFireworks();
    stage.update();
  }

  function emitFireworks() {
    const size = 0.5;
    const fireworksLength = 60;
    const fireworksPositionX = Math.random() * stage.canvas.width;
    const fireworksPositionY = Math.random() * stage.canvas.height;
    for (let i = 0; i < fireworksLength; i++) {
      const fireworks = new createjs.Shape();
      stage.addChild(fireworks);
      fireworks.graphics.beginFill("#fffacd").drawCircle(0, 0, size);
      fireworks.x = fireworksPositionX;
      fireworks.y = fireworksPositionY;
      fireworksList.push(fireworks);
    }
  }
}
