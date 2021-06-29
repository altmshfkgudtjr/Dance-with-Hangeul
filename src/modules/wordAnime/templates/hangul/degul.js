import Hangul from '../Hangul';
import { easeOutExpo, getRandomInt } from '../utils';


export class Degul extends Hangul {
    constructor(props) {
        super(props);

        this.text = "데굴"
        this.gravityValue = 1;
        this.angle_acc = props.angle_acc;
        this.cooltime = getRandomInt(60, 100);
        this.count = 0;
        this.bottom = window.innerHeight;
    }

    draw() {

        this.count += 1
        if (this.count >= this.cooltime) {
            this.count = -15;

        } else if (this.count < 0) {
            this.x_acc *= 1.1;
            this.y_acc -= 1.5
        }
        if (this.count < 10) {
            this.angle -= 12
        } else {
            this.angle += getRandomInt(-3, 3);
        }
        super.draw(() => {
            if (this.y < this.bottom - 60) {

            }
            this.move();
            this.airResistance(0.99);
            this.gravity();
            this.detectBottom();
        })
    }


    destory() {
        super.destory()
        if (this.x > window.innerWidth + this.fontSize ||
            this.x < -this.fontSize * 3) {
            this.life = -1
        }
    }

}
