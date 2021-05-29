import HangulCanvas from '../HangulCanvas';
import Tong from '../hangul/tong';
import { getRandomInt } from '../utils';
class Canvas_Tong extends HangulCanvas {
  init() {
    super.init();
    this.HangulClass = Tong;
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#fff';
    if (this.width <= 600) {
      this.maxObjectCount = 3
    }
  }

  start() {
    const step = () => {
      this.createObject();
      this.detectObjects();
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
    if (this.width > 600) {
      crush_acc = 40
      fontSize = getRandomInt(150, 200)
      life = 300
    } else {
      crush_acc = 30
      fontSize = getRandomInt(120, 150);
      life = 180
    }
    return {
      ...params,
      fontSize: fontSize,
      x: getRandomInt(fontSize / 2, window.innerWidth - fontSize / 2),
      y: 0,
      y_acc: 5,
      crush_acc: crush_acc,
      life: life,
      rectSum: this.rectSum
    };
  }
}

export default Canvas_Tong;
