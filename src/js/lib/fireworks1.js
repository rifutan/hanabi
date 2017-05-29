export default function fireworks1() {
  const stage = new createjs.Stage(document.getElementsByClassName("canvas-fireworks1")[0]);
  const canvasWidth = stage.canvas.width;
  const canvasHeight = stage.canvas.height;
  const fireworks = [];
  const background = new createjs.Shape();
  background.graphics.beginLinearGradientFill(["#000000", "#191970"], [0, 1], canvasWidth/2, 0, canvasWidth/2, canvasHeight)
                     .drawRect(0, 0, canvasWidth, canvasHeight);
  stage.addChild(background);

  window.setInterval(() => {
    const firework = new Firework();
    fireworks.push(firework);
  }, 2000);

  createjs.Ticker.addEventListener("tick", () => {
    stage.update();
  });

  class Firework {
    constructor() {
      this.firework = [];
      this.colorList = ["#fff599", "#00ff7f", "#ff69b4", "#99eeff"];
      this.emitFireworks();
      createjs.Ticker.addEventListener("tick", () => {
        this.updateFireworks();
        stage.update();
      });
    }
    emitFireworks() {
      const color = this.colorList[Math.floor(Math.random() * this.colorList.length)];
      const size = 1;
      const sparkLength = 500;
      const sparkPositionX = 100 + Math.random() * (canvasWidth - 200);
      const sparkPositionY = 100 + Math.random() * (canvasHeight - 200);
      for (let i = 0; i < sparkLength; i++) {
        const spark = new createjs.Shape();
        stage.addChild(spark);
        spark.graphics.beginFill(color).drawCircle(0, 0, size);
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
        this.firework.push(spark);
      }
    }
    updateFireworks() {
      for (let i = 0; i < this.firework.length; i++) {
        const spark = this.firework[i];
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
          this.firework.splice(i, 1);
          i -= 1;
        }
      }
    }
  }
}
