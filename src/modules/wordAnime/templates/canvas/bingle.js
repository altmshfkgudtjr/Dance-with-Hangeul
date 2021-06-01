import HangulCanvas from '../HangulCanvas';
import Bingle from '../hangul/bingle';
import { getRandomInt } from '../utils';

const textArray = ['빙', '글', '뱅', '글'];
export default class Canvas_Bingle extends HangulCanvas {
    constructor(props) {
        super(props);
        this.HangulClass = Bingle;
        this.rectSum = (this.width + this.height) / 2860
    }
    init() {
        super.init();
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = '#fff';
        this.maxCooltime = 100
        this.maxObjectCount = 40
    }

    start() {
        //const colors = ["#ffc107", "#80bdff", "#ff9800"]
        const step = timestamp => {
            this.createObjects();
            //this.detectObjects();
            this.removeObject();
            this.drawBackground();
            this.drawObject();
            this.animation = requestAnimationFrame(step);
        };
        this.animation = requestAnimationFrame(step);
    }
    getParams() {
        const acc = 12.5 * this.rectSum;
        const groupId = new Date();
        const superParams = super.getParams();
        const paramsArray = [];

        const maxCount = 7;
        const count = getRandomInt(4, maxCount) * 2;
        const x = getRandomInt(this.width * 0.2, this.width * 0.7);
        const y = getRandomInt(this.height * 0.3, this.height * 0.8)
        const fontSize = 60 * this.rectSum;
        const x_acc = Math.random() > 0.5 ? getRandomInt(2, 5) : getRandomInt(-5, -2);
        const y_acc = Math.random() > 0.5 ? getRandomInt(2, 5) : getRandomInt(-5, -2);
        const distance = 70 * (count / maxCount) * this.rectSum;
        const defaultParams = {
            ...superParams,
            groupId: groupId,
            fontSize: fontSize,
            life: 800,
            x: x,
            y: y,
            x_acc: x_acc,
            y_acc: y_acc,
        };

        let i;
        for (i = 0; i < count; i++) {
            const radian = i / count

            const params = {
                ...defaultParams,
                text: textArray[i % 4],
                distance: distance,
                rotate: radian * -360
            }
            paramsArray.push(params);
        }



        return paramsArray;
    }
}
