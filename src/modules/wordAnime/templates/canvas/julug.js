import HangulCanvas from '../HangulCanvas';
import Julug from '../hangul/julug';
import { getRandomInt } from '../utils';
class Canvas_Julug extends HangulCanvas {
  init() {
    super.init();
    this.HangulClass = Julug;
    this.maxObjectCount = 50
    this.maxCooltime = 2
    if (this.width < 1000) {
      this.maxCooltime = 8
    } else {
      this.maxCooltime = 2

    }

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
    let fontSize
    fontSize = getRandomInt(10, 20)
    const y_acc = this.width < 1000 ? 2 : 5
    const gravity = this.width < 1000 ? 0.2 : 2
    const life = this.width < 1000 ? 135 : 80
    return {
      ...params,
      fontSize: fontSize,
      x: getRandomInt(fontSize / 2, window.innerWidth - fontSize / 2),
      y: 0,
      y_acc: y_acc,
      life: life,
      gravity: gravity,
      rectSum: this.rectSum
    };
  }
}

export default Canvas_Julug;
