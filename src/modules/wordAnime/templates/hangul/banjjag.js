import Hangul from '../Hangul';

export class Banjjag extends Hangul {
  constructor(props) {
    super(props);
    this.text = '반짝'
    this.opacity = 0
    this.crush_acc = 1.5
  }




  draw() {
    if (this.isGravity) this.gravity();
    if (this.isVibe) this.vibe();
    this.move();

    this.ctx.save();

    if (this.paddingVisiable) {
      this.ctx.fillStyle = '#666';
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.fontSize / 2, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.ctx.globalAlpha = this.opacity;
    this.ctx.fillStyle = this.color;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((this.angle * Math.PI) / 180);

    this.fadeIn();

    this.ctx.fillText(this.text, 0, 0);

    // this.ctx.filter = `blur(${this.blur}px)`;
    // this.ctx.beginPath();
    // if (this.opacity > 0.5) this.ctx.globalAlpha = 0.5;
    // this.ctx.ellipse(0, 0, this.fontSize, this.fontSize / 2, 0, 0, 2 * Math.PI);
    // this.ctx.fill();

    this.ctx.restore();

    this.sparkle();
    this.destory();
  }

  move() {
    this.x += this.x_acc;
    this.y += this.y_acc;
  }


  destory() {
    super.destory(() => {
      this.opacity = this.life / 60;
    });
  }

  sparkle() {
    if (this.life % 130 < 2) {
      this.blur = 0;
    } else {
      this.blur = 15;
    }
  }

  detect(obj) {
    const x = this.x - obj.x;
    const y = this.y - obj.y;
    const padding_size = 0.7;
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * padding_size;
    if (distance < this.fontSize / 2 + obj.fontSize / 2) {
      const radian = Math.atan2(y, x);
      this.y_acc = Math.cos(radian - Math.PI / 2) * this.crush_acc;
    }
  }
}

export class Sparkle extends Hangul {


  drawSpakle(size) {
    this.ctx.beginPath();
    this.ctx.ellipse(0, 0 + size - (size * 0.37 / 2), size, size * 1.5, Math.PI / 2, Math.PI * 0.8, Math.PI * 1.2);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.ellipse(0, 0 - size + (size * 0.37 / 2), size, size * 1.5, Math.PI / 2, Math.PI * -0.2, Math.PI * 0.2);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.ellipse(0 + size - (size * 0.37 / 2), 0, size * 1.5, size, Math.PI / 2, Math.PI * 0.3, Math.PI * 0.7);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.ellipse(0 - size + (size * 0.37 / 2), 0, size * 1.5, size, Math.PI / 2, Math.PI * 1.3, Math.PI * 1.7);
    this.ctx.fill();
  }
  move() {
    this.x += this.x_acc;
    this.y += this.y_acc;
  }
  draw() {
    this.move();

    this.ctx.save();
    this.ctx.fillStyle = "#fff";
    this.ctx.globalAlpha = this.opacity;
    this.ctx.fillStyle = this.color;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((this.angle * Math.PI) / 180);


    this.drawSpakle(this.fontSize);
    // this.ctx.filter = `blur(20px)`;
    // this.ctx.beginPath();
    // this.ctx.arc(0, 0, this.fontSize, 0, Math.PI * 2);
    // this.ctx.fill();

    this.ctx.restore();
    this.destory();
  }
  detect() { }


  destory() {
    super.destory(() => {
      this.opacity = this.life / 60;
    });
  }

}