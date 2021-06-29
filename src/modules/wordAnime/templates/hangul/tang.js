import Hangul from '../Hangul';

export class Tang extends Hangul {
    constructor(props) {
        super(props);

        this.text = "탕"
        this.angle = props.angle;
        this.distance = 0;
        this.stop = false;

        this.vibe_acc = 1;
    }

    draw() {
        this.vibe_acc *= -1;
        if (!this.stop)
            this.distance -= 25;

        const x_distance = this.distance * Math.sin((90 - this.angle) / 180 * Math.PI);
        const y_distance = this.distance * Math.cos((90 - this.angle) / 180 * Math.PI);

        this.detect(this.x + x_distance, 150);
        this.detect(this.y + y_distance, 200);
        this.detect(this.y + y_distance, window.innerHeight + 50, 1);

        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        this.ctx.globalAlpha = this.opacity;
        this.ctx.translate(this.x + x_distance, this.y + y_distance - 25);
        this.ctx.rotate((this.angle * Math.PI) / 180);

        this.ctx.rotate((this.vibe_acc * Math.PI) / 180);
        this.ctx.fillText(this.text, -150, -150);

        this.ctx.restore();
        this.destory();
    }

    detect(value, limit, bigger = 0) {
        if ((!bigger && value < limit) || (bigger && value > limit)) {
            if (!this.stop) {
                this.life = 60;
                this.vibe_acc = 0;
            }
            this.stop = true;
        }
    }


    destory() {
        super.destory(() => {
            this.opacity = this.life / 60;
        })
    }

}
