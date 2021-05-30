import HangulCanvas from '../HangulCanvas';
import { Du, Geun } from '../hangul/dugeun';
import { getRandomInt } from '../utils';

class Canvas_Dugeun extends HangulCanvas {
    init() {
        super.init();
        this.maxObjectCount = 2
    }

    start() {
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
        this.objects.push(new Du(this.getDuParams()));
        this.objects.push(new Geun(this.getGuenParams()));
        this.cooltime = 0;
    }

    getParams() {
        const params = super.getParams();
        return {
            ...params,
            fontSize: 250 * this.rectSum,
            y: this.height * 0.4,
            life: 999999,
        };
    }
    getDuParams() {
        const params = this.getParams();
        return {
            ...params,
            x: this.width / 2,
        };
    }
    getGuenParams() {
        const params = this.getParams();
        return {
            ...params,
            x: this.width / 2,
        };
    }
}

export default Canvas_Dugeun;
