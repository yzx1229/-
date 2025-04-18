let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 產生 40 個圓
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background("#cbf3f0");

  // 計算滑鼠影響的大小
  let sizeFactor = map(mouseX, 0, width, 10, 120);

  // 繪製圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * (sizeFactor / 100));
  }
}
