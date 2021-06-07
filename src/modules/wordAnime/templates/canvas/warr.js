import HangulCanvas from '../HangulCanvas';
import Warr from '../hangul/warr';
import { getRandomInt } from '../utils';

export default class Canvas_Warr extends HangulCanvas {
  constructor(props) {
    super(props);
    this.HangulClass = Warr;
    this.maxObjectCount = 45;
    this.maxCooltime = 10;
  }
  init() {
    super.init();
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#fff';
  }

  start() {
    //const colors = ["#ffc107", "#80bdff", "#ff9800"]
    const step = () => {
      this.createObjects();
      this.removeObject();
      this.drawBackground();
      this.drawObject();
      this.animation = requestAnimationFrame(step);
    };
    this.animation = requestAnimationFrame(step);
  }

  getParams() {
    const lineCount = 5;
    const hangulCount = 9;
    const paramsArray = [];
    const superParams = super.getParams();
    let fontSize = 100;
    fontSize *= this.rectSum;
    const x = window.innerWidth / 2 - ((fontSize - 10) * (hangulCount - 1)) / 2;
    const params = {
      ...superParams,
      fontSize: fontSize,
      x: x,
      y: 0,
      life: 700,
    };
    let i, j, finLife;
    for (j = 0; j < lineCount; j++) {
      for (i = 0; i < hangulCount; i++) {
        // if (j < 2) {
        //   finLife = 500 - 100 * j - getRandomInt(0, 100);
        // } else {
        //   finLife = 250 + getRandomInt(0, 50);
        // }
        if (j % 2 === 0)
          finLife = 500 - (42 * j) - (i * 5) + getRandomInt(-5, 5);
        else
          finLife = 500 - (42 * j) - ((hangulCount - i) * 5) + getRandomInt(-5, 5);
        paramsArray.push({
          ...params,
          text: i % 3 === 0 ? '와' : '르',
          x: x + ((fontSize - 10) * i),
          y: 0 - (fontSize - 0) * j,
          line: j,
          finLife: finLife,
          rotate: getRandomInt(-20, 20),
          rotate_acc: getRandomInt(-5, 5),
        });
      }
    }

    return paramsArray;
  }

}
