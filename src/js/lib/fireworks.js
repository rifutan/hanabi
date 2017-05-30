import SimpleFirework from './SimpleFirework';
import ColoredFirework from './ColoredFirework';
import DivisionFirework from './DivisionFirework';
import Camera from './Camera';

export default function fireworks1() {
  const stage = new createjs.Stage(document.getElementsByClassName("canvas-fireworks")[0]);
  //stage.autoClear = false;
  const fireworks = [];
  const background = new createjs.Shape();
  background.graphics.beginLinearGradientFill(["#000000", "#191970"], [0, 1], stage.canvas.width, 0, stage.canvas.width, stage.canvas.height * 2)
                     .drawRect(0, 0, stage.canvas.width * 2, stage.canvas.height * 2);
  background.alpha = 1;
  stage.addChild(background);

  window.setInterval(() => {
    const simpleFirework = new SimpleFirework(stage);
    console.log(simpleFirework);
    const camera = new Camera(stage, background, simpleFirework)
  }, 2000);
  window.setInterval(() => {
    // const coloredFirework = new ColoredFirework(stage);
  }, 2500);
  window.setInterval(() => {
    // const divisionFirework = new DivisionFirework(stage);
  }, 3000);

  createjs.Ticker.addEventListener("tick", () => {
    stage.update();
  });
}
