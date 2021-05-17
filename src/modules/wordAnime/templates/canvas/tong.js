import HangulCanvas from '../HangulCanvas';
import Tong from '../hangul/tong';
import { getRandomInt } from '../utils';

export default class Canvas_Tong extends HangulCanvas {
  init() {
    super.init();
    this.HangulClass = Tong;
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#fff';
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
    return {
      ...params,
      ctx: this.ctx,
      text: '통',
      fontSize: getRandomInt(500, 150),
      x: getRandomInt(this.fontSize / 2, window.innerWidth - this.fontSize / 2),
      y: 0,
      y_acc: 10,
      crush_acc: 20,
      life: 300,
    };
  }
}
