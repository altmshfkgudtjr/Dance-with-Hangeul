import HangulCanvas from '../HangulCanvas';
import { Kkeong } from '../hangul/kkeongchung';

export default class Canvas_Warr extends HangulCanvas {
    constructor(props) {
        super(props);
        this.maxObjectCount = 3;
        this.maxCooltime = 40;
        this.count = 0
    }
    init() {
        this.canvas.style.letterSpacing = '-10px';
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
        this.objects.push(new Kkeong(this.getKkeongParams()));
        //this.objects.push(new Chung(this.getChungParams()));
        this.cooltime = 0;
        this.count += 1
    }
    getKkeongParams() {
        const params = super.getParams();
        let fontSize, x, y, x_acc, y_acc, bottom
        if (this.count % 3 == 0) {
            fontSize = 150 * this.rectSum;
            bottom = window.innerHeight - (fontSize / 2)
            x = -fontSize * 2;
            y = bottom;
            x_acc = 9
            y_acc = -25
        } else if (this.count % 3 == 1) {
            fontSize = 100 * this.rectSum;
            bottom = window.innerHeight * 0.7 - (fontSize / 2)
            x = this.width;
            y = bottom;
            x_acc = -6
            y_acc = -20
        } else if (this.count % 3 == 2) {
            fontSize = 50 * this.rectSum;
            bottom = window.innerHeight * 0.3 - (fontSize / 2)
            x = -fontSize * 2;
            y = bottom;
            x_acc = 3
            y_acc = -16
        }

        return {
            ...params,
            fontSize: fontSize,
            x: x,
            y: y,
            default_x_acc: x_acc,
            default_y_acc: y_acc,
            bottom: bottom,

            life: 3000,
        };
    }
    getChungParams() {
        const params = super.getParams();
        const fontSize = 150 * this.rectSum;
        return {
            ...params,
            fontSize: fontSize,
            x: fontSize - 10,
            y: window.innerHeight - (fontSize / 2),
            life: 1000,
        };
    }


}
