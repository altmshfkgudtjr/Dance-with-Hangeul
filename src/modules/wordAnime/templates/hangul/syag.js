import Hangul from '../Hangul';
function easeInOutExpo(x) {
  return x === 0
    ? 0
    : x === 1
      ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2;
}


export default class Syag extends Hangul {
  constructor(props) {
    super(props);

    this.history = []
    this.historySize = 10
    this.addCount = 4
    this.count = 0
    this.max_x_acc = this.x_acc
    this.max_y_acc = this.y_acc
    this.finLife = 30


  }



  draw() {
    this.frame = (this.maxLife - this.life) / this.maxLife
    this.x_acc = (1 - easeInOutExpo(this.frame)) * this.max_x_acc
    this.y_acc = (1 - easeInOutExpo(this.frame)) * this.max_y_acc

    //this.detectTop(-1);
    //this.detectBottom(-1);
    //this.detectLeft(-1);
    //this.detectRight(-1);
    this.move();
    this.count += 1

    this.ctx.save();
    //this.drawPadding();
    this.ctx.fillStyle = this.color;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    //this.ctx.rotate((this.rotate * Math.PI) / 180);
    this.ctx.globalAlpha = this.opacity;

    this.history.forEach((item, i) => {
      if (this.x === item.x && this.y === item.y) return;
      this.ctx.save();
      this.ctx.translate(item.x, item.y);
      this.ctx.globalAlpha = i / this.history.length;
      this.ctx.fillText('샤', 0, 0);

      this.ctx.restore();

    })

    this.ctx.translate(this.x, this.y);

    this.ctx.fillText(this.text, 0, 0);

    this.ctx.restore();
    if (this.count >= this.addCount) {
      this.history.push({ x: this.x, y: this.y })
      this.count = 0

    }
    if (this.history.length > this.historySize) {
      this.history.splice(0, 1);
    }
    this.destory();

  }

  destory() {
    super.destory(() => {
      this.opacity = this.life / 30
    })
  }




}
