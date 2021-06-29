import HangulCanvas from '../HangulCanvas';
import { Chal, Kag } from '../hangul/chalkag';

class Canvas_ChalKag extends HangulCanvas {
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
        this.objects.push(new Chal(this.getChalParams()));
        this.objects.push(new Kag(this.getKagParams()));
        this.cooltime = 0;
    }

    getParams() {
        const params = super.getParams();
        return {
            ...params,
            fontSize: 250 * this.rectSum,
            y: this.height * 0.45,
            life: 999999,
        };
    }
    getChalParams() {
        const params = this.getParams();
        return {
            ...params,
            x: this.width / 2,
        };
    }
    getKagParams() {
        const params = this.getParams();
        return {
            ...params,
            x: this.width / 2,
        };
    }
}

export default Canvas_ChalKag;
