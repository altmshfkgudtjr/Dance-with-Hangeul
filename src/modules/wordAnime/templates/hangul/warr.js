import Hangul from '../Hangul';



export default class Warr extends Hangul {
  constructor(props) {
    super(props);
    this.gravityValue = 2;
    this.acc_value = 2;
    this.x_acc = 0;
    this.y_acc = 20;

    this.rotate_acc = props.rotate_acc;
    this.isStop = false;
    this.isRotate = false;
    this.vibeValue = 1;
    this.line = props.line;
  }



  draw() {
    if (this.life < this.finLife) this.gravity();
    this.airResistance();
    this.vibe();
    this.detectBottom();
    this.detectLeft();
    this.detectRight();
    this.move();

    this.ctx.save();
    //this.drawPadding();
    this.ctx.fillStyle = this.color;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((this.rotate * Math.PI) / 180);
    this.ctx.globalAlpha = this.opacity;

    this.ctx.fillText(this.text, 0, 0);
    this.ctx.restore();

    this.destory();
  }

  gravity() { this.y_acc += this.gravityValue; }

  airResistance() {
    this.x_acc *= 0.95
    this.y_acc *= 0.9
  }

  move() {
    if (Math.abs(this.x_acc) > 2) this.x += this.x_acc;
    if (Math.abs(this.y_acc) > this.gravityValue) this.y += this.y_acc;
  }


  destory() {
    if (this.life >= 0) {
      this.life -= 1;
      if (this.life < this.finLife && this.life >= this.finLife - 20) {
        this.isGravity = true;
      } else if (-1 < this.life && this.life <= 60) {
        this.opacity = this.life / 60;
      } else if (this.life > this.maxLife) {
        this.life = -1;
      }
    }
  }
  detect(obj) {
    const x = this.x - obj.x;
    const y = this.y - obj.y;
    const originDistance = this.fontSize / 2 + obj.fontSize / 2
    const padding = 1
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * padding;
    if (distance < originDistance * 0.9) {
      const radian = Math.atan2(y, x);
      //const f = originDistance - distance;

      this.x_acc += Math.sin(radian + Math.PI / 2);
      this.y_acc = 0;
    } else {
    }
  }

  detectBottom() {
    const bottom = window.innerHeight - (this.fontSize / 2);
    if (this.y + this.y_acc > bottom) {
      this.y = bottom
      this.y_acc *= -0.5
    }
  }
  detectLeft() {
    const left = (this.fontSize / 2);
    if (this.x + this.x_acc < left) {
      this.x = left
      this.x_acc *= -0.5
    }
  }
  detectRight() {
    const right = window.innerWidth - (this.fontSize / 2);
    if (this.x + this.x_acc > right) {
      this.x = right
      this.x_acc *= -0.5
    }
  }


  vibe() {
    if (this.life < this.maxLife - 60 && this.life > this.finLife) {
      this.x += this.vibeValue;
      this.vibeValue *= -1.01;
      if (this.vibeValue > 10) this.vibeValue = 10;
    }
  }
}
