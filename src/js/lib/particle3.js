if (document.getElementsByClassName("canvas-particle3")[0]) {
  let stage = new createjs.Stage(document.getElementsByClassName("canvas-particle3")[0]);

  let background = new createjs.Shape();
  background.graphics.beginFill("#000").drawRect(0, 0, stage.canvas.width, stage.canvas.height);
  stage.addChild(background);

  let count = 0;
  let particles = [];
  let size;
  const MAX_LIFE = 50;

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    emitParticles();
    updateParticles();
    stage.update();
  }

  function emitParticles() {
    for (var i = 0; i < 5; i++) {
      count += 1;
      let particle = new createjs.Shape();
      stage.addChild(particle);
      size = Math.random() * 40;
      particle.graphics.beginFill(createjs.Graphics.getHSL(count, 50, 50)).drawCircle(0, 0, size);
      particle.compositeOperation = "lighter";
      particle.x = stage.mouseX;
      particle.y = stage.mouseY;
      particle.vx = 35 * (Math.random() - 0.5);
      particle.vy = 35 * (Math.random() - 0.5);
      particle.life = MAX_LIFE;
      particles.push(particle);
    }
  }

  function updateParticles() {
    for (var i = 0; i < particles.length; i++) {
      let particle = particles[i];
      particle.vy += 1;
      particle.vx *= 0.95;
      particle.vy *= 0.95;
      particle.x += particle.vx;
      particle.y += particle.vy;
      console.log(particle.y);
      if (particle.y > stage.canvas.height - size) {
        particle.y = stage.canvas.height - size;
        particle.vy *=  -1;
      }
      let scale = particle.life / MAX_LIFE;
      particle.scaleX = particle.scaleY = scale;
      particle.life -= 1;
      if (particle.life <= 0) {
        stage.removeChild(particle)
        particles.splice(i, 1);
      }
    }
  }
  stage.mouseX = stage.canvas.width / 2;
  stage.mouseY = stage.canvas.height * 1 / 3;
}
