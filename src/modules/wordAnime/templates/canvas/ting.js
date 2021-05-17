import HangulCanvas from '../HangulCanvas';
import Ting from '../hangul/ting';

export default class Canvas_Ting extends HangulCanvas {
  constructor(props) {
    super(props);
    this.HangulClass = Ting;
    this.maxObjectCount = 1;
    this.maxCooltime = 120;
  }
  init() {
    super.init();
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#fff';
  }

  start() {
    //const colors = ["#ffc107", "#80bdff", "#ff9800"]
    const step = timestamp => {
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
    const groupId = new Date();
    const fontSize = 100;
    const x = 500;
    const superParams = super.getParams();
    const params = {
      ...superParams,
      groupId: groupId,
      fontSize: fontSize,
      fontFamily: 'Nanum Myeongjo',
      text: '펄럭',
      opacity: 1,
      x: x,
      y: 500,
      life: 800,
      isGravity: false,
    };

    return params;
  }
}
