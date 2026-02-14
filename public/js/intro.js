const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const layers = [
  { count: 120, speed: 0.3, size: 1 },
  { count: 80, speed: 0.6, size: 1.5 },
  { count: 50, speed: 1.2, size: 2 }
];

let particles = [];

class Particle {
  constructor(layer) {
    this.layer = layer;
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
  }

  update() {
    this.y += this.layer.speed;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.fillStyle = "#ff2fd6";
    ctx.fillRect(this.x, this.y, this.layer.size, this.layer.size);
  }
}

layers.forEach(layer => {
  for (let i = 0; i < layer.count; i++) {
    particles.push(new Particle(layer));
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

/* TRANSICIÓN CINEMÁTICA */

document.querySelector(".enter-btn").addEventListener("click", () => {
  document.querySelector(".intro").classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "../home/index.html";
  }, 1000);
});
