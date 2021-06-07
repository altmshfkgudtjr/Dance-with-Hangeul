import Hangul from '../Hangul';



export default class Warr extends Hangul {
  constructor(props) {
    super(props);
    this.gravityValue = 2;
    this.acc_value = 2;
    this.x_acc = 0;
    this.y_acc = 45;

    this.rotate_acc = props.rotate_acc;
    this.vibeValue = 1;
  }


  draw() {
    if (this.life < this.finLife) {
      this.gravity();
      this.rotate += this.rotate_acc
    }
    this.airResistance();
    this.vibe();
    this.move();

    super.draw(() => {

    })

  }

  gravity() { this.y_acc += this.gravityValue; }

  airResistance() {
    this.x_acc *= 0.95
    this.y_acc *= 0.9
  }

  move() {
    if (Math.abs(this.x_acc) > 2) this.x += this.x_acc;
    if (Math.abs(this.y_acc) > this.gravityValue) this.y += this.y_acc;
  }


  destory() {
    super.destory(() => {

    })

  }



  vibe() {
    if (this.life < this.maxLife - 60 && this.life > this.finLife) {
      this.x += this.vibeValue;
      this.vibeValue *= -1.01;
      if (this.vibeValue > 5) this.vibeValue = 10;
    }
  }
}
