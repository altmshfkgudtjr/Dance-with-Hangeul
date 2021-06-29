import Hangul from '../Hangul';
import { easeInOutCubic, getRandomInt } from '../utils';


const boomPos = [];
for (let i = 0; i < 20; i++) {
    boomPos.push({
        x: Math.sin(Math.PI / 10 * i),
        y: Math.cos(Math.PI / 10 * i)
    })
}

export class Peong extends Hangul {
    constructor(props) {
        super(props);

        this.text = "폭죽"
        this.y_limit = props.y_limit;
        this.isBoom = false;

        this.boomCount = 5;
        this.initBoomPos = 30;
        this.boom_acc = 10;
        this.goal_boom_acc = 200;

        this.peongs = [];

    }

    draw() {
        if (!this.isBoom) {
            super.draw(() => {
                this.y_acc = (this.y_limit - this.y) * 0.02
                this.move();
            })
            this.checkLimit()
        } else {
            this.boom_acc += (this.goal_boom_acc - this.boom_acc) * 0.05;
            this.ctx.save();

            this.move();
            this.gravity(0.002);
            this.ctx.fillStyle = this.color;
            this.ctx.strokeStyle = this.color;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
            this.ctx.globalAlpha = this.opacity;
            this.ctx.translate(this.x, this.y);
            this.ctx.lineWidth = 5;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';

            if (this.life > 30) {
                const lineLife = (this.life - 30) / 60;
                const linePosConstant = this.boom_acc * easeInOutCubic(1 - lineLife);
                boomPos.forEach(pos => {
                    this.ctx.save();

                    this.ctx.beginPath();
                    this.ctx.globalAlpha = easeInOutCubic(lineLife);
                    this.ctx.moveTo(pos.x * linePosConstant, pos.y * linePosConstant);
                    this.ctx.lineTo(pos.x * this.boom_acc, pos.y * this.boom_acc);
                    this.ctx.stroke();
                    this.ctx.restore();
                })
            }

            this.peongs.forEach(peong => {
                if (this.life > 90 - peong.appear) return;
                this.ctx.save();
                this.ctx.globalAlpha = (90 - peong.appear - this.life) / 20;
                this.ctx.font = `${peong.fontSize}px ${this.fontFamily}`;
                this.ctx.fillText("펑", peong.x, peong.y);
                this.ctx.restore();
            })




            this.ctx.restore();
            this.destory();
        }


    }


    destory() {
        super.destory(() => {
            this.opacity = this.life / 60;
        })

    }

    checkLimit() {
        if (this.y_limit + 30 >= this.y) {
            this.y_acc = 0
            this.isBoom = true;
            this.life = 90;

            let x, y;
            const boom_range = this.goal_boom_acc
            const boom_acc_pow = Math.pow(boom_range * 0.6, 2)
            for (x = -boom_range; x <= boom_range; x += 50) {
                for (y = -boom_range; y <= boom_range; y += 50) {
                    if (Math.pow(x, 2) + Math.pow(y, 2) < boom_acc_pow) {
                        const x_ = Math.random() > 0.5 ? 1 : -1;
                        const y_ = Math.random() > 0.5 ? 1 : -1;
                        this.peongs.push({
                            x: x + getRandomInt(10, 15) * x_,
                            y: y + getRandomInt(10, 15) * y_,
                            fontSize: this.fontSize * getRandomInt(10, 20) * 0.01,
                            appear: getRandomInt(0, 45),
                            time: getRandomInt(5, 20),
                        })
                    }
                }
            }

        }
    }

    boomDraw() {

    }

}
