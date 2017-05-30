import SimpleFirework from './SimpleFirework';

export default class DivisionFirework extends SimpleFirework {
  constructor(stage) {
    super(stage);
    this.initialize(stage);
  }

  initialize(stage) {
    this.stage = stage;
    this.sparks = [];
    this.divideSparks = [];
    this.create(200, 1); // 引数はsparkの個数とサイズ
    this.launchInit();
    this.isLaunchCompleted = false;
    this.isDivideCompleted = false;
    createjs.Ticker.addEventListener("tick", () => {
      if (this.isDivideCompleted) {
        this.divide();
      }
    });
  }

  proceed() {
    for (let i = 0; i < this.sparks.length; i++) {
      const spark = this.sparks[i];
      spark.alpha = 1.0;
      spark.vy += 0.1;
      spark.vx *= 0.9;
      spark.vy *= 0.9;
      spark.x += spark.vx;
      spark.y += spark.vy;
      spark.life -= 1;
      // 一定のlifeになったら分裂を開始する
      if(Math.floor(spark.life) == 20) {
        this.divideCreate(spark);
        this.isDivideCompleted = true;
      }
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

  // 基本的には create() => proceed() と同様の処理
  divideCreate(spark) {
    const divideSparkLength = 5;
    for (let i = 0; i < divideSparkLength; i++) {
      const divideSpark = new createjs.Shape();
      this.stage.addChild(divideSpark);
      divideSpark.graphics.beginFill(this.color).drawCircle(0, 0, 1);
      divideSpark.compositeOperation = "lighter";
      divideSpark.x = spark.x;
      divideSpark.y = spark.y;
      divideSpark.angle = Math.random() * 360;
      divideSpark.radian = divideSpark.angle * Math.PI / 180;
      divideSpark.directionX = Math.cos(divideSpark.radian);
      divideSpark.directionY = Math.sin(divideSpark.radian);
      divideSpark.alpha = 0.0;
      divideSpark.vx = (1 + 5 * Math.random()) * divideSpark.directionX;
      divideSpark.vy = (1 + 5 * Math.random()) * divideSpark.directionY;
      divideSpark.life = Math.random() * 30 + 10;
      this.divideSparks.push(divideSpark);
    }
  }

  divide() {
    for (let i = 0; i < this.divideSparks.length; i++) {
      const divideSpark = this.divideSparks[i];
      divideSpark.alpha = 1.0;
      divideSpark.vx *= 0.9;
      divideSpark.vy *= 0.9;
      divideSpark.x += divideSpark.vx;
      divideSpark.y += divideSpark.vy;
      divideSpark.life -= 1;
      if (divideSpark.life < 20) {
        divideSpark.alpha = divideSpark.life / 20;
      }
      if (divideSpark.life <= 0) {
        this.stage.removeChild(divideSpark);
        this.divideSparks.splice(i, 1);
        i -= 1;
      }
    }
  }
}
