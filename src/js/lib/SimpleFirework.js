export default class SimpleFirework {
  constructor(stage) {
    this.stage = stage;
    this.sparks = [];
    this.create();
    createjs.Ticker.addEventListener("tick", () => {
      this.update();
    });
  }
  create() {
    const colorList = ["#fff599", "#00ff7f", "#ff69b4", "#99eeff"];
    const color = colorList[Math.floor(Math.random() * colorList.length)];
    const size = 1;
    const sparkLength = 500;
    const sparkPositionX = 100 + Math.random() * (this.stage.canvas.width - 200);
    const sparkPositionY = 100 + Math.random() * (this.stage.canvas.height - 200);
    for (let i = 0; i < sparkLength; i++) {
      const spark = new createjs.Shape();
      this.stage.addChild(spark);
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
      this.sparks.push(spark);
    }
  }
  update() {
    for (let i = 0; i < this.sparks.length; i++) {
      const spark = this.sparks[i];
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
        this.stage.removeChild(spark);
        this.sparks.splice(i, 1);
        i -= 1;
      }
    }
  }
}
