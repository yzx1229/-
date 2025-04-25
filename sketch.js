let hearts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 產生 40 個愛心
  for (let i = 0; i < 40; i++) {
    hearts.push({
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

  // 繪製愛心
  for (let heart of hearts) {
    fill(heart.color);
    noStroke();
    drawHeart(heart.x, heart.y, heart.size * (sizeFactor / 100));
  }
}

// 繪製愛心的函式
function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
