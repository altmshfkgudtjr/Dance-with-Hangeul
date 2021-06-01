import { getRandomInt } from './utils';
export default class Hangul {
  ctx;
  size;
  padding;
  x;
  y;
  y_acc;
  x_acc;
  life;
  constructor(props) {
    this.ctx = props.ctx;

    this.groupId = props.groupId;

    this.text = props.text;
    this.fontSize = props.fontSize;
    this.fontFamily = props.fontFamily;
    this.color = props.color;
    this.opacity = props.opacity;
    this.rotate = props.rotate;
    this.x = props.x;
    this.y = props.y;
    this.x_acc = props.x_acc;
    this.y_acc = props.y_acc;
    this.crush_acc = props.crush_acc;
    this.maxLife = props.life;
    this.life = props.life;
    this.finLife = props.finLife;
    this.gravityValue = 2;


    this.init();

    //this.paddingVisiable = true;
  }

  init() {
    this.paddingVisiable = false;

    this.fontSize = this.fontSize ? this.fontSize : getRandomInt(500, 500);
    this.x = this.x !== undefined
      ? this.x
      : getRandomInt(this.fontSize / 2, window.innerWidth - this.fontSize / 2);
    this.y = this.y ? this.y : 0;
    this.y_acc = this.y_acc ? this.y_acc : 0;
    this.x_acc = this.x_acc ? this.x_acc : 0;
    this.life = this.life ? this.life : 300;
  }

  draw(after = () => { }, before = () => { }) {
    this.ctx.save();
    before();
    this.ctx.fillStyle = this.color;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((this.rotate * Math.PI) / 180);
    after();

    this.ctx.fillText(this.text, 0, 0);

    this.ctx.restore();
    this.destory();
  }

  drawPadding() {
    this.ctx.save();
    this.ctx.fillStyle = '#666';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.fontSize / 2, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }


  gravity() { this.y_acc += this.gravityValue; }

  move() {
    this.x += this.x_acc;
    this.y += this.y_acc;
  }
  airResistance(value = 0.95) {
    this.x_acc *= value

  }
  destory(addFunc = () => { }) {
    if (this.life >= 0) {
      this.life -= 1;
      if (this.life < this.finLife && this.life >= 0) {
        addFunc();
      }
    }
  }

  scaleOut() {
    this.fontSize = this.fontSize / 60;
    this.opacity = this.life / 60;
  }

  fadeIn() {
    const opacity = (this.maxLife - this.life) / 20;
    if (opacity > 1) this.isFadeIn = false;
    this.opacity = opacity;
  }

  die(life) {
    if (this.life > life) {
      this.life = life;
    }
  }

  detectTop(value = -0.5) {
    const top = (this.fontSize / 2);
    if (this.y + this.y_acc < top) {
      this.y = top
      this.y_acc *= value
    }
  }

  detectBottom(value = -0.5) {
    const bottom = window.innerHeight - (this.fontSize / 2);
    if (this.y + this.y_acc > bottom) {
      this.y = bottom
      this.y_acc *= value
    }
  }
  detectLeft(value = -0.5) {
    const left = (this.fontSize / 2);
    if (this.x + this.x_acc < left) {
      this.x = left
      this.x_acc *= value
    }
  }
  detectRight(value = -0.5) {
    const right = window.innerWidth - (this.fontSize / 2);
    if (this.x + this.x_acc > right) {
      this.x = right
      this.x_acc *= value
    }
  }

  progress(start, end, current) {
    if (current > end) return 1
    if (current < start) return 0
    return (current - start) / (end - start)
  }

}
