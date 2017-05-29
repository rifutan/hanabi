export default function fireworks1() {
  const stage = new createjs.Stage(document.getElementsByClassName("canvas-fireworks1")[0]);
  const background = new createjs.Shape();
  background.graphics.beginLinearGradientFill(["#000000", "#191970"], [0, 1], stage.canvas.width/2, 0, stage.canvas.width/2, stage.canvas.height)
                     .drawRect(0, 0, stage.canvas.width, stage.canvas.height);
  stage.addChild(background);

  const fireworks = [];
  window.setInterval(emitFireworks, 2000);

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick() {
    updateFireworks();
    stage.update();
  }

  function emitFireworks() {
    const size = 1;
    const sparkLength = 300;
    const sparkPositionX = 100 + Math.random() * (stage.canvas.width - 200);
    const sparkPositionY = 100 + Math.random() * (stage.canvas.height - 200);
    for (let i = 0; i < sparkLength; i++) {
      const spark = new createjs.Shape();
      stage.addChild(spark);
      spark.graphics.beginFill("#fffacd").drawCircle(0, 0, size);
      spark.x = sparkPositionX;
      spark.y = sparkPositionY;
      spark.angle = Math.random() * 360;
      spark.radian = spark.angle * Math.PI / 180;
      spark.directionX = Math.cos(spark.radian);
      spark.directionY = Math.sin(spark.radian);
      if (i % 3 != 0) {
        spark.vx = (8 + 7 * Math.random()) * spark.directionX;
        spark.vy = (8 + 7 * Math.random()) * spark.directionY;
      } else {
        spark.vx = (1 + 8 * Math.random()) * spark.directionX;
        spark.vy = (1 + 8 * Math.random()) * spark.directionY;
      }
      spark.life = Math.random() * 30 + 30;
      fireworks.push(spark);
    }
  }

  function updateFireworks() {
    for (let i = 0; i < fireworks.length; i++) {
      const spark = fireworks[i];
      spark.vy += 0.2;
      spark.vx *= 0.9;
      spark.vy *= 0.9;
      spark.x += spark.vx;
      spark.y += spark.vy;
      spark.life -= 1;
      if (spark.life < 20) {
        spark.alpha = spark.life / 20;
      }
      if (spark.life <= 0) {
        stage.removeChild(spark);
        fireworks.splice(i, 1);
        i -= 1;
      }
    }
  }
}
