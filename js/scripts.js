function Draw(x, y, h, w, n) {
  var self = document.getElementById("canvas");
  var ctx = self.getContext('2d');
  n++;

  var initial = document.getElementById("canvas2");
  ctx.strokeRect(x, y, w, h);

  if (n < 4047) {
    x += 2 * w * Math.cos(n * Math.PI/10);
    y += 2 * h * Math.sin(n * (Math.PI/10));
    h *= .95;
    w *= .95;
    Draw(x, y, h, w, n);
  }
}

$(document).ready(function() {
  Draw(500, 200, 100, 100, 0);
});
