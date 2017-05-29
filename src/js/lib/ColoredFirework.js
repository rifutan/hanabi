import SimpleFirework from './SimpleFirework';

export default class ColoredFirework extends SimpleFirework {
  create() {
    const colorList = ["#fff599", "#00ff7f", "#ff69b4", "#99eeff", "#ffffff"];
    let colorAry = [];
    for(let i = 0; i < 5; i++) colorAry.push(colorList[Math.floor(Math.random() * colorList.length)]);
    let color;
    const size = 1;
    const sparkLength = 500;
    const sparkPositionX = 100 + Math.random() * (this.stage.canvas.width - 200);
    const sparkPositionY = 100 + Math.random() * (this.stage.canvas.height - 200);
    for (let i = 0; i < sparkLength; i++) {
      const spark = new createjs.Shape();
      this.stage.addChild(spark);
      spark.x = sparkPositionX;
      spark.y = sparkPositionY;
      spark.angle = Math.random() * 360;
      spark.radian = spark.angle * Math.PI / 180;
      spark.directionX = Math.cos(spark.radian);
      spark.directionY = Math.sin(spark.radian);

      const circleIndex = i % 5;
      spark.vx = ((circleIndex + Math.random()) * 3) * spark.directionX;
      spark.vy = ((circleIndex + Math.random()) * 3) * spark.directionY;
      const color = colorAry[circleIndex];
      spark.graphics.beginFill(color).drawCircle(0, 0, size);
      spark.life = Math.random() * 30 + 30;
      this.sparks.push(spark);
    }
  }
}
