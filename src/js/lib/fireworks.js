import SimpleFirework from './SimpleFirework';
import ColoredFirework from './ColoredFirework';
import DivisionFirework from './DivisionFirework';

export default function fireworks1() {
  const stage = new createjs.Stage(document.getElementsByClassName("canvas-fireworks")[0]);
  stage.autoClear = false;
  const fireworks = [];
  const background = new createjs.Shape();
  background.graphics.beginLinearGradientFill(["#000000", "#191970"], [0, 1], stage.canvas.width/2, 0, stage.canvas.width/2, stage.canvas.height)
                     .drawRect(0, 0, stage.canvas.width, stage.canvas.height);
  background.alpha = 0.4;
  stage.addChild(background);

  window.setInterval(() => {
    //const simpleFirework = new SimpleFirework(stage);
  }, 2000);
  window.setInterval(() => {
    //const coloredFirework = new ColoredFirework(stage);
  }, 2500);
  window.setInterval(() => {
    const divisionFirework = new DivisionFirework(stage);
  }, 1500);

  createjs.Ticker.addEventListener("tick", () => {
    stage.update();
  });
}
