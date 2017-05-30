export default class Camera {
  constructor(stage, point = [0, 0]) {
    this.stage = stage;
    this.destX = this.stage.canvas.width / 2 - point.x;
    this.destY = this.stage.canvas.height / 2 - point.y;
    createjs.Ticker.addEventListener("tick", () => {
      this.update();
    });
  }
  update() {
    this.startX = this.stage.x;
    this.startY = this.stage.y;
    this.stage.x += (this.destX - this.startX) / 2;
    this.stage.y += (this.destY - this.startY) / 2;
  }
}
