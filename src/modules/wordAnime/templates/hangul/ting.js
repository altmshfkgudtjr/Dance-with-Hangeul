class Ting extends Hangul {
  constructor(props) {
    super(props);
    this.acc_value = 2;
    this.angle_acc = props.angle_acc;
    this.isGravity = props.isGravity ?? true;
    this.isStop = false;
    this.isRotate = false;
    this.vibe = 1;
    this.line = props.line;

    this.c = -1;
  }

  init() {
    this.paddingVisiable = false;

    this.fontSize = this.fontSize ? this.fontSize : getRandomInt(500, 500);
    this.x = this.x
      ? this.x
      : getRandomInt(this.fontSize / 2, window.innerWidth - this.fontSize / 2);
    this.y = this.y ? this.y : 0;
    this.y_acc = this.y_acc ? this.y_acc : getRandomInt(5, 15);
    this.x_acc = this.x_acc ? this.x_acc : 0;
    this.life = this.life ? this.life : 300;
  }

  draw() {
    this.move();
    this.c += 0.01;

    this.ctx.save();
    ///this.drawPadding();
    this.ctx.fillStyle = this.color;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate((this.angle * Math.PI) / 180);
    this.ctx.transform(1, this.c, 0, 1, 0, 0);
    this.ctx.globalAlpha = this.opacity;

    this.ctx.fillText(this.text, 0, 0);
    this.ctx.restore();

    this.destory();
  }

  gravity() {
    const bottom = window.innerHeight;
    if (bottom > this.y + this.fontSize / 2) {
      this.y_acc += this.acc_value;
      this.y += this.y_acc;
      this.angle += this.angle_acc;
      this.x_acc += getRandomInt(-2, 2);
    }
    if (this.y + this.fontSize / 2 >= bottom) {
      this.y = bottom - this.fontSize / 2;
      this.y_acc = 0;
    }
  }

  move() {
    if (this.x_acc > 0) {
      this.x_acc -= this.acc_value / 2;
      if (this.x_acc < 1) this.x_acc = 0;
      this.x += this.x_acc;

      if (this.x + this.fontSize / 2 > window.innerWidth && this.isWall) {
        this.x = window.innerWidth - this.fontSize / 2;
        this.x_acc *= -1 / 2;
      }
    } else if (this.x_acc < 0) {
      this.x_acc += this.acc_value / 2;
      if (this.x_acc > -1) this.x_acc = 0;
      this.x += this.x_acc;
      if (this.x < this.fontSize / 2 && this.isWall) {
        this.x = this.fontSize / 2;
        this.x_acc *= -1 / 2;
      }
    }

    if (this.y_acc > 0) {
      this.y_acc -= this.acc_value / 2;
      if (this.y_acc < 1) this.y_acc = 0;
      this.y += this.y_acc;

      if (this.y + this.fontSize / 2 > window.innerHeight && this.isWall) {
        this.y = window.innerHeight - this.fontSize / 2;
        this.y_acc *= -1 / 2;
      }
    } else if (this.y_acc < 0) {
      this.y_acc += this.acc_value / 2;
      if (this.y_acc > -1) this.y_acc = 0;
      this.y += this.y_acc;
      if (this.y < this.fontSize / 2 && this.isWall) {
        this.y = this.fontSize / 2;
        this.y_acc *= -1 / 2;
      }
    }
  }

  destory() {
    if (this.life >= 0) {
      this.life -= 1;
      if (this.life < this.finLife && this.life >= 120) {
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
    const padding_size = 1.8;
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * padding_size;
    if (
      distance <
      this.fontSize / 2 + obj.fontSize / 2 // ????????? ??? ??????????????? ???????????? ????????? ??????,
    ) {
      const radian = Math.atan2(y, x) + 5;
      this.x_acc = Math.sin(radian + Math.PI / 2) * this.crush_acc * 5;
      this.y_acc = Math.cos(radian - Math.PI / 2) * this.crush_acc * 4;
      obj.x_acc = Math.sin(radian + Math.PI / 2) * -obj.crush_acc * 5;
      obj.y_acc = Math.cos(radian - Math.PI / 2) * -obj.crush_acc * 4;
      this.angle += this.angle_acc;
      obj.angle += this.angle_acc;

      return 0;
    }
    return 0;
  }
  stop() {
    this.x_acc = 0;
    this.y_acc = 0;
    this.isGravity = false;
    this.isStop = true;
  }
  crush(x_vec, y_vec) {
    //this.x_acc = x_vec * 5;
    this.x_acc = -x_vec;
    this.y_acc = -y_vec;
  }
}
