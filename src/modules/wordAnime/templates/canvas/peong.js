import HangulCanvas from '../HangulCanvas';
import { Peong } from '../hangul/peong';
import { getRandomInt } from '../utils';

export default class Canvas_Peong extends HangulCanvas {
    constructor(props) {
        super(props);
        this.HangulClass = Peong;
        this.maxObjectCount = this.width < 800 ? 1 : 3;
        this.maxCooltime = 10;
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
            this.createObject([60, 240, 300]);
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
        const fontSize = getRandomInt(100, 160);
        const bottom = window.innerHeight + fontSize
        const y_limit = getRandomInt(this.height * 0.2, this.height * 0.6);
        const x = getRandomInt(this.width * 0.1, this.width * 0.9);
        return {
            ...params,
            fontSize: fontSize,
            x: x,
            y: bottom,
            x_acc: 0,
            y_limit: y_limit,
            life: 3000,
        };
    }



}
