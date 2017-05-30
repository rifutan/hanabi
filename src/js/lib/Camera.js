export default class Camera {
  constructor(stage) {
    this.stage = stage;
    createjs.Ticker.addEventListener("tick", () => {
      this.update();
    });
  }
  setPoint(point) {
    this.point = point;
  }
  update() {
    if (this.point) {
      this.destX = this.stage.canvas.width / 2 - this.point.x;
      this.destY = this.stage.canvas.height / 2 - this.point.y;
      this.startX = this.stage.x;
      this.startY = this.stage.y;
      this.stage.x += (this.destX - this.startX) / 24;
      this.stage.y += (this.destY - this.startY) / 24;
    } else {
      return false;
    }
  }
}
