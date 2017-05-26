if (document.getElementsByClassName("canvas-particle2")[0]) {
  let stage = new createjs.Stage(document.getElementsByClassName("canvas-particle2")[0]);

  let particles = [];
  let size = 5;

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    emitParticles();
    updateParticles();
    stage.update();
  }

  function emitParticles() {
    for (var i = 0; i < 5; i++) {
      let particle = new createjs.Shape();
      stage.addChild(particle);
      particle.graphics.beginFill("#0ff").drawCircle(0, 0, size);
      particle.x = stage.mouseX;
      particle.y = stage.mouseY;
      particle.vx = 10 * (Math.random() - 0.5);
      particle.vy = 10 * (Math.random() - 0.5);
      particle.life = 100;
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
      if (particle.y > stage.canvas.height - size) {
        particle.y = stage.canvas.height - size;
        particle.vy *=  -1;
      }
      particle.life -= 1;
      if (particle.life <= 0) {
        stage.removeChild(particle)
        particles.splice(i, 1);
      }
    }
  }
}
