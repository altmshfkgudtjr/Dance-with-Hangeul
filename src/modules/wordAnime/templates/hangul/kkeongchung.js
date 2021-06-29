import Hangul from '../Hangul';
import { easeOutExpo } from '../utils';


export class Kkeong extends Hangul {
    constructor(props) {
        super(props);

        this.text = "껑충"
        this.gravityValue = 1;
        this.default_x_acc = props.default_x_acc;
        this.default_y_acc = props.default_y_acc;
        this.bottom = props.bottom

        this.m11 = 1;
        this.m12 = 0;
        this.m21 = 0;
        this.m22 = 1;

        this.frame = 0
        this.frame1 = 12
        this.frame2 = 20



    }

    draw() {
        this.frame += 1
        if (this.frame < this.frame1) {
            const progress = 1 - ((this.frame1 - this.frame) / this.frame1)
            const value = easeOutExpo(progress)
            const m11_value = 0.5
            this.m11 = 1 + (m11_value * value)
            this.m22 = 1 - (m11_value * value)
            this.x_acc = 0
            this.y_acc = 0
        } else if (this.frame === this.frame1) {
            this.x_acc = this.default_x_acc
            this.y_acc = this.default_y_acc
        } else if (this.frame < this.frame2) {
            const progress = 1 - ((this.frame2 - this.frame) / (this.frame2 - this.frame1))
            const value = easeOutExpo(progress)
            const m11_value = 0.5
            this.m11 = 1.5 - (m11_value * value)
            this.m22 = 0.5 + (m11_value * value)
        } else if (this.y === this.bottom) {
            this.frame = 0
        }


        this.gravity();
        this.detectBottom();
        this.move();

        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        this.ctx.rotate((this.angle * Math.PI) / 180);
        this.ctx.globalAlpha = this.opacity;
        this.ctx.setTransform(this.m11, this.m12, this.m21, this.m22, this.x + this.fontSize, this.y + this.fontSize / 2);
        //this.drawPadding();

        this.ctx.fillText(this.text, 0, 0);
        this.ctx.restore();


        this.destory();
    }

    drawPadding() {
        this.ctx.fillRect(this.fontSize, this.fontSize * -1, this.fontSize, this.fontSize)
    }
    destory() {
        super.destory()
        if (this.x > window.innerWidth + this.fontSize ||
            this.x < -this.fontSize * 3) {
            this.life = -1
        }
    }
    detectBottom() {
        if (this.y + this.y_acc > this.bottom) {
            this.y = this.bottom
            this.y_acc = 0
            // if (this.currentFrame < this.frame2) {
            //     if (!this.fin) this.fin = this.currentFrame
            //     this.x_acc = 0
            // }

        }
    }
}
