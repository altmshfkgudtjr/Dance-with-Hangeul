import Hangul from '../Hangul';
export default class Julug extends Hangul {
  constructor(props) {
    super(props);

    this.text2 = '주';
    this.text = '룩';
    this.acc_value = 1;
  }

  draw() {
    this.gravity();
    this.move();
    this.detectBottom(0);

    super.draw(() => {
      this.ctx.fillText(this.text2, 0, -this.fontSize);
    })
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
