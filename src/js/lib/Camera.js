export default class Camera {
  constructor(stage, background, simpleFirework) {
    this.stage = stage;
    this.background = background;
    this.simpleFirework = simpleFirework;
    this.calcDifference();
    createjs.Ticker.addEventListener("tick", () => {
      this.moveCamera();
    });
  }
  calcDifference() {
    this.startX = this.stage.x;
    this.startY = this.stage.y;
    this.destX = this.stage.canvas.width / 2 - this.simpleFirework.sparkPositionX;
    this.destY = this.stage.canvas.height / 2 - this.simpleFirework.sparkPositionY;
  }
  moveCamera() {
    // this.stage.x += (this.destX - this.startX) / 24;
    // this.stage.y += (this.destY - this.startY) / 24;
    this.stage.x = this.destX;
    this.stage.y = this.destY;
  }
}
