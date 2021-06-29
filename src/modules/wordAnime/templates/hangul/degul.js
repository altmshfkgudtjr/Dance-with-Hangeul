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
            this.count = getRandomInt(-20, -10);

        } else if (this.count < 0) {
            this.x_acc += 1 + (getRandomInt(120, 130) * 0.001);
            this.y_acc -= getRandomInt(15, 20) * 0.1;
        }
        if (this.count < 10) {
            this.angle += 15
        } else {
            this.angle += 5;

            //this.angle += getRandomInt(-3, 3);
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

    detectBottom(value = -0.5, func = () => { }) {
        const bottom = window.innerHeight - (this.fontSize);
        if (this.y + this.y_acc > bottom) {
            this.y = bottom
            this.y_acc *= value
            func();
        }
    }

    destory() {
        super.destory()
        if (this.x > window.innerWidth + this.fontSize ||
            this.x < -this.fontSize * 3) {
            this.life = -1
        }
    }

}
