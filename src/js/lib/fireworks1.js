export default class Fireworks1 {
  constructor() {
    this.stage = new createjs.Stage(document.getElementsByClassName("canvas-fireworks1")[0]);
    this.canvasWidth = this.stage.canvas.width;
    this.canvasHeight = this.stage.canvas.height;
    this.fireworks = [];
    this.fireworks.explosion = false;
    this.colorList = ["#fff599", "#00ff7f", "#ff69b4", "#99eeff"];

    this.background();
    window.setInterval(() => {
      this.startFireworks()
    }, 2000);

    createjs.Ticker.addEventListener("tick", () => {
      if (this.fireworks.explosion == false) {
        this.launchFireworks();
      } else {
        this.explodeFireworks();
      }
      this.stage.update();
    });
  }

  // 背景
  background() {
    const background = new createjs.Shape();
    background.graphics.beginLinearGradientFill(["#000000", "#191970"], [0, 1], this.canvasWidth/2, 0, this.canvasWidth/2, this.canvasHeight)
                       .drawRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.stage.addChild(background);
  }

  // 1つの花火についての初期設定
  startFireworks() {
    this.sparkPositionX = 100 + Math.random() * (this.canvasWidth - 200);
    this.sparkPositionY = 100 + Math.random() * (this.canvasHeight - 200);
    const color = this.colorList[Math.floor(Math.random() * this.colorList.length)];
    const sparkSize = 1;
    const sparkLength = 500;
    for (let i = 0; i < sparkLength; i++) {
      const spark = new createjs.Shape();
      this.stage.addChild(spark);
      spark.graphics.beginFill(color).drawCircle(0, 0, sparkSize);
      spark.x = this.sparkPositionX;
      spark.y = this.canvasHeight;
      this.fireworks.push(spark);
    }
  }

  // 花火を打ち上げる
  launchFireworks() {
    for (let i = 0; i < this.fireworks.length; i++) {
      const spark = this.fireworks[i];
      spark.vy = -15;
      spark.y += spark.vy;
      if (spark.y < this.sparkPositionY) {
        this.fireworks.explosion = true;
        createjs.Ticker._timerId = null;
      }
    }
  }

  // 花火を爆発させる
  explodeFireworks() {
    for (let i = 0; i < this.fireworks.length; i++) {
      const spark = this.fireworks[i];
      spark.vy += 0.2;
      spark.vx *= 0.9;
      spark.vy *= 0.9;
      spark.x += spark.vx;
      spark.y += spark.vy;
      console.log(spark.y);
      spark.life -= 1;
      if (spark.life < 20) {
        spark.alpha = spark.life / 20;
      }
      if (spark.life <= 0) {
        this.stage.removeChild(spark);
        this.fireworks.splice(i, 1);
        i -= 1;
      }
    }
  }

  // emitFireworks() {
  //   const color = this.colorList[Math.floor(Math.random() * this.colorList.length)];
  //   const size = 1;
  //   const sparkLength = 500;
  //   for (let i = 0; i < sparkLength; i++) {
  //     const spark = new createjs.Shape();
  //     this.stage.addChild(spark);
  //     spark.graphics.beginFill(color).drawCircle(0, 0, size);
  //     spark.x = this.sparkPositionX;
  //     spark.y = this.sparkPositionY;
  //     spark.angle = Math.random() * 360;
  //     spark.radian = spark.angle * Math.PI / 180;
  //     spark.directionX = Math.cos(spark.radian);
  //     spark.directionY = Math.sin(spark.radian);
  //     if (i % 3 != 0) {
  //       spark.vx = (8 + 7 * Math.random()) * spark.directionX;
  //       spark.vy = (8 + 7 * Math.random()) * spark.directionY;
  //     } else {
  //       spark.vx = (1 + 8 * Math.random()) * spark.directionX;
  //       spark.vy = (1 + 8 * Math.random()) * spark.directionY;
  //     }
  //     spark.life = Math.random() * 30 + 30;
  //     this.fireworks.push(spark);
  //   }
  // }
}
