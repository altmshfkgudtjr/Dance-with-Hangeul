import HangulCanvas from '../HangulCanvas';
import { Degul } from '../hangul/degul';

export default class Canvas_Degul extends HangulCanvas {
    constructor(props) {
        super(props);
        this.HangulClass = Degul;
        this.maxObjectCount = this.width < 800 ? 1 : 1;
        this.maxCooltime = 40;
        this.count = 0
        this.latterSpacing = -5 * this.rectSum;
    }
    init() {
        this.canvas.style.letterSpacing = `${this.latterSpacing}px`;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.save();

        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    start() {
        //const colors = ["#ffc107", "#80bdff", "#ff9800"]
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
        const num = this.count % this.maxObjectCount;
        let x_acc = 9 * this.rectSum - ((6 * this.rectSum) * (num / this.maxObjectCount));
        const y_acc = -25 + (15 * (num / this.maxObjectCount));
        const angle = 5
        const fontSize = 100
        const bottom = window.innerHeight - fontSize / 2
        const x = 0
        return {
            ...params,
            fontSize: fontSize,
            x: x,
            y: bottom,
            x_acc: 5,
            y_acc: -3,
            bottom: bottom,
            angle: 0,
            angle_acc: angle,

            life: 3000,
        };
    }



}
