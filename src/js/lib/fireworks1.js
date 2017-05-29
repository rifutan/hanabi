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
    updateFireworks();
    stage.update();
  }

  function emitFireworks() {
    const size = 0.5;
    const fireworksLength = 100;
    const fireworksPositionX = Math.random() * stage.canvas.width;
    const fireworksPositionY = Math.random() * stage.canvas.height;
    for (let i = 0; i < fireworksLength; i++) {
      const fireworks = new createjs.Shape();
      stage.addChild(fireworks);
      fireworks.graphics.beginFill("#fffacd").drawCircle(0, 0, size);
      fireworks.x = fireworksPositionX;
      fireworks.y = fireworksPositionY;
      // fireworks.radian = Math.random() * 2 * Math.PI;
      // fireworks.directionX = Math.cos(fireworks.radian);
      // fireworks.directionY = Math.sin(fireworks.radian);
      fireworks.vx = 20 * (Math.random() - 0.5);
      fireworks.vy = 20 * (Math.random() - 0.5);
      fireworks.life = 60;
      fireworksList.push(fireworks);
    }
  }

  function updateFireworks() {
    for (let i = 0; i < fireworksList.length; i++) {
      const fireworks = fireworksList[i];
      fireworks.vy += 0.15;
      fireworks.vx *= 0.9;
      fireworks.vy *= 0.9;
      fireworks.x += fireworks.vx;
      fireworks.y += fireworks.vy;
      fireworks.life -= 1;
      if (fireworks.life < 20) {
        fireworks.alpha = fireworks.life / 20;
      }
      if (fireworks.life <= 0) {
        stage.removeChild(fireworks);
        fireworksList.splice(i, 1);
        i -= 1;
      }
    }
  }
}
