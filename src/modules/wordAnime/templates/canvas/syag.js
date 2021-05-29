import HangulCanvas from '../HangulCanvas';
import Syag from '../hangul/syag';
import { getRandomInt } from '../utils';

export default class Canvas_Syag extends HangulCanvas {
  constructor(props) {
    super(props);
    this.HangulClass = Syag;
    this.maxObjectCount = 6;
    this.maxCooltime = 30;
    this.widthRatio = this.width / 1920
    this.heightRatio = this.height / 968
  }

  init() {
    super.init();
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#fff';
  }

  start() {
    const step = () => {
      this.createObjects();
      this.removeObject();
      this.drawBackground();
      this.drawObject();
      this.animation = requestAnimationFrame(step);
    };
    this.animation = requestAnimationFrame(step);
  }
  drawObject() {
    this.objects.reverse().forEach(obj => {
      obj.draw();
    });
  }
  getParams() {
    const paramsArray = [];
    const superParams = super.getParams();
    let fontSize = 50;
    fontSize *= this.rectSum;
    const isVertical = Math.random() > 0.5 ? true : false
    const x = !isVertical ? getRandomInt(this.width * 0.1, this.width * 0.9) : this.width * 0.1
    const y = isVertical ? getRandomInt(this.height * 0.1, this.height * 0.9) : this.height * 0.1;
    const x_acc = isVertical ? getRandomInt(13, 25) * this.widthRatio : 0;
    const y_acc = !isVertical ? getRandomInt(6, 14) * this.heightRatio : 0;
    const opacity = (5 - Math.floor((this.objects.length + 1) / 3)) / 5
    const params = {
      ...superParams,
      fontSize: fontSize,
      life: 120,
      opacity: opacity
    };

    paramsArray.push({
      ...params,
      text: '샥',
      x: x,
      y: y,
      x_acc: x_acc,
      y_acc: y_acc,
    });



    return paramsArray;
  }


}
