function Point2D(x, y) {
  this.x = x;
  this.y = y;
  this.distanceToPoint = function(point) {
    const a = this.x - point.x;
    const b = this.y - point.y;
    return Math.sqrt(a * a + b * b);
  };
}

const pointA = new Point2D(1, 2);
const pointB = new Point2D(5, 33);
const distance = pointA.distanceToPoint(pointB).toFixed(2);

console.log(distance);
