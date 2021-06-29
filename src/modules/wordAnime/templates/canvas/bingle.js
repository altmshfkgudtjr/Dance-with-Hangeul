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
        this.maxCooltime = 5
        this.maxObjectCount = 40
    }

    start() {
        //const colors = ["#ffc107", "#80bdff", "#ff9800"]
        const step = timestamp => {
            this.createObjects();
            this.detectObjects();
            this.removeObject();
            this.drawBackground();
            this.drawObject();
            this.animation = requestAnimationFrame(step);
        };
        this.animation = requestAnimationFrame(step);
    }
    getParams() {
        const groupId = new Date();
        const superParams = super.getParams();
        const paramsArray = [];

        const maxCount = 11;
        const count = getRandomInt(8, maxCount) * 2;
        const x = getRandomInt(this.width * 0.2, this.width * 0.7);
        const y = getRandomInt(this.height * 0.3, this.height * 0.8)
        const fontSize = 60 * this.rectSum;
        const x_acc = Math.random() > 0.5 ? getRandomInt(2, 5) : getRandomInt(-5, -2);
        const y_acc = Math.random() > 0.5 ? getRandomInt(2, 5) : getRandomInt(-5, -2);
        const distance = 120 * (count / maxCount) * this.rectSum;
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
                angle: radian * -360
            }
            paramsArray.push(params);
        }



        return paramsArray;
    }

    detectObjects() {
        let i = 0,
            j = 0,
            k = 0;
        const length = this.objects.length;

        const groups = []
        const groups_pos = []
        for (i = 0; i < length; i++) {
            if (!groups.includes(this.objects[i].groupId)) {
                groups.push(this.objects[i].groupId)
                groups_pos.push({
                    x: this.objects[i].x,
                    y: this.objects[i].y,
                    distance: this.objects[i].distance
                })
            }
        }
        for (i = 0; i < groups.length; i++) {
            for (j = 0; j < groups.length; j++) {
                if (i !== j) {
                    const x = groups_pos[i].x - groups_pos[j].x;
                    const y = groups_pos[i].y - groups_pos[j].y;
                    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 1.2;
                    if (distance < groups_pos[i].distance + groups_pos[j].distance + 50) {
                        const radian = Math.atan2(y, x);
                        for (k = 0; k < length; k++) {
                            if (groups[i] === this.objects[k].groupId) {
                                this.objects[k].x_acc = Math.sin(radian + Math.PI / 2) * 5;
                                this.objects[k].y_acc = Math.cos(radian - Math.PI / 2) * 5;
                            } else if (groups[j] === this.objects[k].groupId) {
                                this.objects[k].x_acc = -Math.sin(radian + Math.PI / 2) * 5;
                                this.objects[k].y_acc = -Math.cos(radian - Math.PI / 2) * 5;
                            }
                        }

                    }
                }
            }
        }

    }
}