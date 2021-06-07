import HangulCanvas from '../HangulCanvas';
import { Kkeong } from '../hangul/kkeongchung';

export default class Canvas_Warr extends HangulCanvas {
    constructor(props) {
        super(props);
        this.HangulClass = Kkeong;
        this.maxObjectCount = this.width < 800 ? 4 : 3;
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

    createObject() {
        this.cooltime += 1;
        if (this.cooltime < this.maxCooltime) return;
        if (this.objects.length >= this.maxObjectCount) return;
        this.objects.push(new Kkeong(this.getParams()));
        this.cooltime = 0;
        this.count += 1
    }
    getParams() {
        const params = super.getParams();
        const num = this.count % this.maxObjectCount;
        let x_acc = 9 * this.rectSum - ((6 * this.rectSum) * (num / this.maxObjectCount));
        const y_acc = -25 + (15 * (num / this.maxObjectCount));
        let fontSize, x, bottom
        if (num == 0) {
            fontSize = 150 * this.rectSum;
            bottom = window.innerHeight - (fontSize / 2)
            x = -fontSize * 2;
        } else if (num == 1) {
            fontSize = 100 * this.rectSum;
            x_acc *= -1
            bottom = window.innerHeight * (1 - (num / this.maxObjectCount)) - (fontSize / 2)
            x = this.width;
        } else if (num == 2) {
            fontSize = 70 * this.rectSum;
            bottom = window.innerHeight * (1 - (num / this.maxObjectCount)) - (fontSize / 2)
            x = -fontSize * 2;
        } else if (num === 3) {
            fontSize = 50 * this.rectSum;
            x_acc *= -1
            bottom = window.innerHeight * (1 - (num / this.maxObjectCount)) - (fontSize / 2)
            x = this.width;
        }

        return {
            ...params,
            fontSize: fontSize,
            x: x,
            y: bottom,
            default_x_acc: x_acc,
            default_y_acc: y_acc,
            bottom: bottom,

            life: 3000,
        };
    }



}
