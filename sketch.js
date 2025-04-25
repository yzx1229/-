let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 產生 40 個隨機圖形
  for (let i = 0; i < 40; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255)),
      type: random(["heart", "star", "diamond"]) // 隨機選擇圖形類型
    });
  }
}

function draw() {
  background("#cbf3f0");

  // 計算滑鼠影響的大小
  let sizeFactor = map(mouseX, 0, width, 10, 120);

  // 繪製圖形
  for (let shape of shapes) {
    fill(shape.color);
    noStroke();
    let adjustedSize = shape.size * (sizeFactor / 100);
    if (shape.type === "heart") {
      drawHeart(shape.x, shape.y, adjustedSize);
    } else if (shape.type === "star") {
      drawStar(shape.x, shape.y, adjustedSize, adjustedSize / 2, 5);
    } else if (shape.type === "diamond") {
      drawDiamond(shape.x, shape.y, adjustedSize);
    }
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

// 繪製星星的函式
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius2;
    sy = y + sin(a + halfAngle) * radius2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// 繪製菱形的函式
function drawDiamond(x, y, size) {
  beginShape();
  vertex(x, y - size / 2); // 上
  vertex(x + size / 2, y); // 右
  vertex(x, y + size / 2); // 下
  vertex(x - size / 2, y); // 左
  endShape(CLOSE);
}
