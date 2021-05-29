import Hangul from '../Hangul';
export default class Tong extends Hangul {
  constructor(props) {
    super(props);

    this.text = '통';
    this.acc_value = 1;
  }

  draw() {
    this.gravity();
    this.airResistance();
    this.move();
    this.detectBottom(-0.75);
    this.detectLeft(-0.75);
    this.detectRight(-0.75);

    this.ctx.save();

    this.ctx.fillStyle = this.color;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    this.ctx.translate(this.x, this.y);
    this.ctx.fillText(this.text, 0, 0);

    this.ctx.restore();
    this.destory();
  }

  destory() {
    super.destory(() => {
      this.fontSize = this.fontSize * (this.life / 60);
    })

  }

  scaleOut() {

  }

  detect(obj) {
    const x = this.x - obj.x;
    const y = this.y - obj.y;
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 1.2;
    if (distance < this.fontSize / 2 + obj.fontSize / 2) {
      const radian = Math.atan2(y, x);
      this.x_acc = Math.sin(radian + Math.PI / 2) * this.crush_acc;
      this.y_acc = Math.cos(radian - Math.PI / 2) * this.crush_acc;
    }
  }
}
