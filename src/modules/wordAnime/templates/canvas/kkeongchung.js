import HangulCanvas from '../HangulCanvas';
import { Kkeong, Chung } from '../hangul/kkeongchung';

export default class Canvas_Warr extends HangulCanvas {
    constructor(props) {
        super(props);
        this.maxObjectCount = 1;
        this.maxCooltime = 10;
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
        this.objects.push(new Chung(this.getChungParams()));
        this.cooltime = 0;
    }
    getKkeongParams() {
        const params = super.getParams();
        const fontSize = 150 * this.rectSum;
        return {
            ...params,
            fontSize: fontSize,
            x: 0,
            y: window.innerHeight - (fontSize / 2),
            life: 250,
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
            life: 250,
        };
    }


}
