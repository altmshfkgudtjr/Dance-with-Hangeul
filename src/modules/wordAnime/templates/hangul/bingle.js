import Hangul from '../Hangul';
import { getRandomInt } from '../utils';

export default class Bingle extends Hangul {
  constructor(props) {
    super(props);
    this.maxDistance = props.distance
    this.finLife = 30
    this.scale = 0
  }


  draw() {
    this.move();

    const after = () => {
      this.angle += this.x_acc / 4
      if (this.life > this.maxLife - 30) {
        this.scale = this.progress(0, 30, this.maxLife - this.life)
        this.distance = this.progress(0, 30, this.maxLife - this.life) * this.maxDistance;
      }
      this.ctx.translate(0, -this.distance)
      this.ctx.scale(this.scale, this.scale)
    }
    super.draw(after)

    this.detectBottom(-1);
    this.detectLeft(-1);
    this.detectTop(-1);
    this.detectRight(-1);
  }


  destory() {
    super.destory(() => {
      this.scale = 1 - this.progress(0, this.finLife, this.finLife - this.life)
      this.distance = (1 - this.progress(0, this.finLife, this.finLife - this.life)) * this.maxDistance;
    })
  }

}