import HangulCanvas from '../HangulCanvas';
import { Banjjag, Sparkle } from '../hangul/banjjag';
import { getRandomInt } from '../utils';

export default class Canvas_Banjjag extends HangulCanvas {
  constructor(props) {
    super(props);
    this.maxCooltime = 10;
    this.sparkleCooltime = 10;
    this.maxObjectCount = 20;

    this.sparkleObjects = [];

  }
  start() {

    const step = () => {
      this.createSparkleObject();
      this.createObject();
      this.removeObject();
      this.drawBackground();
      this.drawObject();

      this.animation = requestAnimationFrame(step);
    };
    this.animation = requestAnimationFrame(step);
  }

  createObject() {
    this.cooltime += 1;
    if (this.cooltime < this.maxCooltime) return;
    if (this.objects.length >= this.maxObjectCount) return;

    this.objects.push(new Banjjag(this.getBanjjagParams()));


    this.cooltime = 0;
  }

  createSparkleObject() {
    this.sparkleCooltime += 1;
    if (this.sparkleCooltime < 10) return;
    if (this.sparkleObjects.length >= 40) return;
    this.sparkleObjects.push(new Sparkle(this.getSparkleParams()));
    this.sparkleCooltime = 0;
  }
  removeObject() {
    this.objects = this.objects.filter(obj => obj.life !== -1);
    this.sparkleObjects = this.sparkleObjects.filter(obj => obj.life !== -1);
  }
  drawObject() {
    super.drawObject();
    this.sparkleObjects.forEach(obj => {
      obj.draw();
    });
  }
  drawBackground() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx.save();
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx.fillStyle = '#080816';
    this.ctx.filter = `blur(100px)`;
    this.ctx.beginPath();
    this.ctx.ellipse(this.width * 0.5, this.height * 0.5, this.width * 0.4, this.height * 0.4, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  getBanjjagParams() {
    const params = super.getParams();
    let fontSize = Math.random() < 0.8 ? getRandomInt(10, 20) : getRandomInt(30, 40);
    fontSize *= this.rectSum;
    return {
      ...params,
      fontSize: fontSize,
      x: getRandomInt(this.width * 0.2, this.width * 0.8),
      y: getRandomInt(this.height * 0.3, this.height * 0.8),
      x_acc: getRandomInt(5, 10) / -20,
      life: 120,
      finLife: 30,
      rotate: getRandomInt(-20, 20),
    };
  }
  getSparkleParams() {
    const params = super.getParams();
    let fontSize = getRandomInt(2, 5)
    fontSize *= this.rectSum;
    return {
      ...params,
      fontSize: fontSize,
      x: getRandomInt(this.width * 0.1, this.width * 0.9),
      y: getRandomInt(this.height * 0.1, this.height * 0.9),
      x_acc: getRandomInt(1, 2) / -5,
      life: 300,
      finLife: 30,
      rotate: getRandomInt(-20, 20),
    };
  }
}
