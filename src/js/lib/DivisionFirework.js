export default class DivisionFirework {

  constructor(stage) {
    this.stage = stage;
    this.sparks = [];
    this.divideSparks = [];
    this.create();
    //this.launchInit();
    //this.isLaunchCompleted = false;
    this.isLaunchCompleted = true;
    createjs.Ticker.addEventListener("tick", () => {
      if (this.isLaunchCompleted) {
        this.proceed();
      } else {
        //this.launch();
      }
    });
  }

  create() {
    const colorList = ["#fff599", "#00ff7f", "#ff69b4", "#99eeff", "#ffffff"];
    const size = 1;
    const sparkLength = 30;
    this.color = colorList[Math.floor(Math.random() * colorList.length)];
    this.sparkPositionX = 200 + Math.random() * (this.stage.canvas.width - 400);
    this.sparkPositionY = 200 + Math.random() * (this.stage.canvas.height - 400);
    for (let i = 0; i < sparkLength; i++) {
      const spark = new createjs.Shape();
      this.stage.addChild(spark);
      spark.graphics.beginFill(this.color).drawCircle(0, 0, size);
      spark.compositeOperation = "lighter";
      spark.x = this.sparkPositionX;
      spark.y = this.sparkPositionY;
      spark.angle = Math.random() * 360;
      spark.radian = spark.angle * Math.PI / 180;
      spark.directionX = Math.cos(spark.radian);
      spark.directionY = Math.sin(spark.radian);
      spark.alpha = 0.0;
      spark.vx = (5 + 10 * Math.random()) * spark.directionX;
      spark.vy = (5 + 10 * Math.random()) * spark.directionY;
      spark.life = Math.random() * 30 + 30;
      this.sparks.push(spark);
    }
  }

  // launchInit() {
  //   this.launchSpark = new createjs.Shape();
  //   this.launchSpark.graphics.beginFill("#ffffff").drawCircle(0, 0, 1);
  //   this.stage.addChild(this.launchSpark);
  //   this.launchSpark.compositeOperation = "lighter";
  //   this.launchSpark.x = this.sparkPositionX;
  //   this.launchSpark.y = this.stage.canvas.height;
  // }
  // launch() {
  //   this.launchSpark.launchy = -15;
  //   this.launchSpark.y += this.launchSpark.launchy;
  //   if (this.launchSpark.y < this.sparkPositionY) {
  //     this.isLaunchCompleted = true;
  //     this.launchSpark.alpha = 0;
  //   }
  // }

  proceed() {
    for (let i = 0; i < this.sparks.length; i++) {
      const spark = this.sparks[i];
      spark.alpha = 1.0;
      spark.vy += 0.2;
      spark.vx *= 0.9;
      spark.vy *= 0.9;
      spark.x += spark.vx;
      spark.y += spark.vy;
      spark.life -= 1;
      if(spark.life < 20 && spark.life > 18) {
        this.divideCreate(spark);
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
  divideCreate(spark) {
    const divideSparkLength = 30;
    this.divideSparkPositionX = spark.x;
    this.divideSparkPositionY = spark.y;
    for (let i = 0; i < divideSparkLength; i++) {
      this.divideSparks.push(spark)
    }
  }
  divide() {

  }
}
