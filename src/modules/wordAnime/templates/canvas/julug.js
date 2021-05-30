import HangulCanvas from '../HangulCanvas';
import Julug from '../hangul/julug';
import { getRandomInt } from '../utils';
class Canvas_Julug extends HangulCanvas {
  init() {
    super.init();
    this.HangulClass = Julug;
    this.maxObjectCount = 50
    this.maxCooltime = 2
  }

  start() {
    const step = () => {
      this.createObject();
      this.removeObject();
      this.drawBackground();
      this.drawObject();

      this.animation = requestAnimationFrame(step);
    };
    this.animation = requestAnimationFrame(step);
  }

  getParams() {
    const params = super.getParams();
    let fontSize, life, crush_acc
    fontSize = getRandomInt(10, 20) * this.rectSum
    return {
      ...params,
      fontSize: fontSize,
      x: getRandomInt(fontSize / 2, window.innerWidth - fontSize / 2),
      y: 0,
      y_acc: 5,
      life: 80,
      rectSum: this.rectSum
    };
  }
}

export default Canvas_Julug;
