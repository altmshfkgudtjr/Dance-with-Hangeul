import Hangul from '../Hangul';
import { getRandomInt } from '../utils';
export default class Kick extends Hangul {
  constructor(props) {
    super(props);
    this.text = '킥';
  }


  draw() {
    if (this.isGravity) this.gravity();
    this.airResistance();
    if (this.life > 90) this.vibe();
    this.move();

    this.ctx.save();

    if (this.paddingVisiable) {
      this.ctx.fillStyle = '#666';
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.fontSize / 2, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.ctx.fillStyle = this.color;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((this.rotate * Math.PI) / 180);

    if (this.isFadeIn) this.fadeIn();

    this.ctx.fillText(this.text, 0, 0);
    this.ctx.restore();

    this.destory();
  }

  airResistance(value = 0.8) {
    this.x_acc *= value
    this.y_acc *= value

  }

  destory() {
    super.destory(() => {
      this.rotate += 2;
      this.y_acc += 2;
    })
  }

  vibe() {
    if (this.vibeLevel === undefined) this.vibeLevel = 0;
    if (this.vibeLevel === 0) {
      this.y -= 5;
      this.vibeLevel += 1;
    } else if (this.vibeLevel === 10) {
      this.y += 5;
      this.vibeLevel += 1;
    } else if (this.vibeLevel === 20) {
      this.vibeLevel = 0;
    } else {
      this.vibeLevel += 1;
    }
  }



  fadeIn() {
    const opacity = (this.maxLife - this.life) / 30;
    if (opacity > 1) this.isFadeIn = false;
    this.ctx.globalAlpha = opacity;
  }

  die() {
    if (this.life > 60) {
      this.life = 60;
      this.isVibe = false;
    }
  }

  detect(obj) {
    if (obj.groupId === this.groupId) return;
    const x = this.x - obj.x;
    const y = this.y - obj.y;
    const padding_size = 1.2;
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * padding_size;
    if (distance < this.fontSize / 2 + obj.fontSize / 2) {
      const radian = Math.atan2(y, x);
      this.x_acc = Math.sin(radian + Math.PI / 2) * this.crush_acc;
      this.y_acc = Math.cos(radian - Math.PI / 2) * -this.crush_acc;
      //obj.x_acc = Math.sin(radian + Math.PI / 2) * obj.crush_acc
      //obj.y_acc = Math.cos(radian - Math.PI / 2) * -obj.crush_acc
      this.die();
      obj.die();
    }
  }
}
