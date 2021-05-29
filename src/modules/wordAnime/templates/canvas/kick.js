import HangulCanvas from '../HangulCanvas';
import Kick from '../hangul/kick';
import { getRandomInt } from '../utils';

export default class Canvas_Kick extends HangulCanvas {
  constructor(props) {
    super(props);
    this.HangulClass = Kick;
    this.rectSum = (this.width + this.height) / 2860
  }
  init() {
    super.init();
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#fff';
    this.maxCooltime = 30
    this.maxObjectCount = 18
  }

  start() {
    //const colors = ["#ffc107", "#80bdff", "#ff9800"]
    const step = timestamp => {
      this.createObjects();
      this.detectObjects();
      this.removeObject();
      this.drawBackground();
      this.drawObject();
      this.animation = requestAnimationFrame(step);
    };
    this.animation = requestAnimationFrame(step);
  }
  getParams() {
    const acc = 12.5 * this.rectSum;
    const groupId = new Date();
    const superParams = super.getParams();
    const paramsArray = [];

    let fontSize = getRandomInt(40, 70);
    fontSize *= this.rectSum;

    const params = {
      ...superParams,
      groupId: groupId,
      fontSize: fontSize,
      opacity: 1,
      x: getRandomInt(this.width * 0.2, this.width * 0.7),
      y: getRandomInt(this.height * 0.3, this.height * 0.8),
      life: 180,
      isGravity: false,
      isFadeIn: true,
      isVibe: true,
      isRotateDie: true,
      x_acc: acc,
      y_acc: -acc,
      crush_acc: 10,
      rotate: getRandomInt(-30, 30),
    };

    paramsArray.push(params);

    if (Math.random() > 0.5) {
      const params2 = {
        ...params,
        x_acc: 0,
        y_acc: -acc * 1.4,
        rotate: getRandomInt(-30, 30),
      };
      const params3 = {
        ...params,
        x_acc: -acc,
        rotate: getRandomInt(-30, 30),
      };
      paramsArray.push(params2);
      paramsArray.push(params3);
    } else {
      const params2 = {
        ...params,
        x_acc: 0,
        y_acc: -acc * 1.3,
        rotate: getRandomInt(-30, 30),
      };
      paramsArray.push(params2);
    }




    return paramsArray;
  }
}
