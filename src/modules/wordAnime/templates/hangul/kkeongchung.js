import Hangul from '../Hangul';

function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export class Kkeong extends Hangul {
    constructor(props) {
        super(props);

        this.text = "껑"
        this.gravityValue = 1;


        this.m11 = 1;
        this.m12 = 0;
        this.m21 = 0;
        this.m22 = 1;

        this.frameUnit = this.maxLife / 15;

        this.frame0 = this.maxLife
        this.frame1 = this.maxLife - this.frameUnit * 1.2
        this.frame2 = this.maxLife - this.frameUnit * 2


    }


    draw() {
        const a = 0.5
        if (this.life > this.frame1) {
            const progress = 1 - ((this.life - this.frame1) / (this.frame0 - this.frame1))
            const value = easeOutExpo(progress)
            const m11_value = 0.5
            const m12_value = 0.5
            this.m11 = 1 + (m11_value * value)
            this.m22 = 1 - (m11_value * value)
            //this.m12 = m12_value * value
        } else if (this.life === this.frame1) {
            this.x_acc = 10
            this.y_acc = -30
        } else if (this.life > this.frame2) {
            const progress = 1 - ((this.life - this.frame2) / (this.frame1 - this.frame2))
            const value = easeOutExpo(progress)
            const m11_value = 0.5
            const m12_value = 0.5
            this.m11 = 1.5 - (m11_value * value)
            this.m22 = 0.5 + (m11_value * value)
            //this.m12 = 0.5 - m12_value * value
        }

        if (this.fin) {
            const frame3 = this.fin - this.frameUnit * 1
            const frame4 = this.fin - this.frameUnit * 2
            const frame5 = this.fin - this.frameUnit * 3
            const frame6 = this.fin - this.frameUnit * 4
            const frame7 = this.fin - this.frameUnit * 4.5
            const frame8 = this.fin - this.frameUnit * 5
            const frame9 = this.fin - this.frameUnit * 5.5
            if (this.life >= frame3) {
                const progress = 1 - ((this.life - frame3) / (this.fin - frame3))
                const value = easeOutExpo(progress)
                const m11_value = 0.5
                this.m11 = 1 + (m11_value * value)
                this.m22 = 1 - (m11_value * value)
            } else if (this.life >= frame4) {
                const progress = 1 - ((this.life - frame4) / (frame3 - frame4))
                const value = easeOutExpo(progress)
                const m11_value = 0.5
                this.m11 = 1.5 - (m11_value * value)
                this.m22 = 0.5 + (m11_value * value)
            }
            // else if (this.life >= frame5) {
            //     const progress = 1 - ((this.life - frame5) / (frame4 - frame5))
            //     const value = easeOutExpo(progress)
            //     const m12_value = 0.5
            //     this.m12 = m12_value * value
            //     //this.m22 = 0.1 + (m11_value * value)
            // } else if (this.life >= frame6) {
            //     const progress = 1 - ((this.life - frame6) / (frame5 - frame6))
            //     const value = easeOutExpo(progress)
            //     const m11_value = 0.5
            //     this.m22 = 1 - (m11_value * value)
            //     const m12_value = 1
            //     this.m12 = 0.5 - m12_value * value
            // } else if (this.life >= frame7) {
            //     const progress = 1 - ((this.life - frame7) / (frame6 - frame7))
            //     const value = easeOutExpo(progress)
            //     const m12_value = 1
            //     this.m12 = -0.5 + m12_value * value
            //     const m11_value = 0.5
            //     this.m22 = 0.5 + (m11_value * value)
            // }
            // else if (this.life >= frame8) {
            //     const progress = 1 - ((this.life - frame8) / (frame7 - frame8))
            //     const value = easeOutExpo(progress)
            //     const m12_value = 1
            //     this.m12 = 0.5 - m12_value * value
            //     const m11_value = 0.5
            //     this.m22 = 1 - (m11_value * value)
            // }
            // else if (this.life >= frame9) {
            //     const progress = 1 - ((this.life - frame9) / (frame8 - frame9))
            //     const value = easeOutExpo(progress)
            //     const m12_value = 0.5
            //     this.m12 = -0.5 + m12_value * value
            //     const m11_value = 0.5
            //     this.m22 = 0.5 + (m11_value * value)
            // }
        }


        this.gravity();
        this.detectBottom();
        this.move();

        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        this.ctx.rotate((this.rotate * Math.PI) / 180);
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
    detectBottom() {
        const bottom = window.innerHeight - (this.fontSize / 2);
        if (this.y + this.y_acc > bottom) {
            this.y = bottom
            this.y_acc = 0
            if (this.life < this.frame2) {
                if (!this.fin) this.fin = this.life
                this.x_acc = 0
            }

        }
    }
}


export class Chung extends Hangul {
    constructor(props) {
        super(props);
        this.text = "충"
        this.gravityValue = 1;


        this.m11 = 1;
        this.m12 = 0;
        this.m21 = 0;
        this.m22 = 1;

        this.frameUnit = this.maxLife / 15;

        this.frame0 = this.maxLife
        this.frame1 = this.maxLife - this.frameUnit * 1.2
        this.frame2 = this.maxLife - this.frameUnit * 2


    }



    draw() {
        if (this.life > this.frame1) {
            const progress = 1 - ((this.life - this.frame1) / (this.frame0 - this.frame1))
            const value = easeOutExpo(progress)
            const m11_value = 0.5
            const m22_value = 0.7
            const m12_value = 0.5
            this.m11 = 1 + (m11_value * value)
            this.m22 = 1 - (m11_value * value)
            //this.m12 = m12_value * value
        } else if (this.life === this.frame1) {
            this.x_acc = 10
            this.y_acc = -30
        } else if (this.life > this.frame2) {
            const progress = 1 - ((this.life - this.frame2) / (this.frame1 - this.frame2))
            const value = easeOutExpo(progress)
            const m11_value = 0.5
            const m22_value = 0.7
            const m12_value = 0.5
            this.m11 = 1.5 - (m11_value * value)
            this.m22 = 0.5 + (m11_value * value)
            //this.m12 = 0.5 - m12_value * value
        }

        if (this.fin) {
            const frame3 = this.fin - this.frameUnit * 1
            const frame4 = this.fin - this.frameUnit * 2
            const frame5 = this.fin - this.frameUnit * 3
            const frame6 = this.fin - this.frameUnit * 4
            const frame7 = this.fin - this.frameUnit * 4.5
            const frame8 = this.fin - this.frameUnit * 5
            const frame9 = this.fin - this.frameUnit * 5.5
            if (this.life >= frame3) {
                const progress = 1 - ((this.life - frame3) / (this.fin - frame3))
                const value = easeOutExpo(progress)
                const m11_value = 0.5
                this.m11 = 1 + (m11_value * value)
                this.m22 = 1 - (m11_value * value)
            } else if (this.life >= frame4) {
                const progress = 1 - ((this.life - frame4) / (frame3 - frame4))
                const value = easeOutExpo(progress)
                const m11_value = 0.5
                this.m11 = 1.5 - (m11_value * value)
                this.m22 = 0.5 + (m11_value * value)
            }
            // else if (this.life >= frame5) {
            //     const progress = 1 - ((this.life - frame5) / (frame4 - frame5))
            //     const value = easeOutExpo(progress)
            //     const m11_value = 0.5
            //     this.m22 = 1 - (m11_value * value)
            //     const m12_value = 0.5
            //     this.m12 = m12_value * value

            //     //this.m22 = 0.1 + (m11_value * value)
            // } else if (this.life >= frame6) {
            //     const progress = 1 - ((this.life - frame6) / (frame5 - frame6))
            //     const value = easeOutExpo(progress)
            //     const m12_value = 1
            //     this.m12 = 0.5 - m12_value * value
            //     const m11_value = 0.5
            //     this.m22 = 0.5 + (m11_value * value)

            // } else if (this.life >= frame7) {
            //     const progress = 1 - ((this.life - frame7) / (frame6 - frame7))
            //     const value = easeOutExpo(progress)
            //     const m12_value = 1
            //     this.m12 = -0.5 + m12_value * value
            //     const m11_value = 0.5
            //     this.m22 = 1 - (m11_value * value)
            // }
            // else if (this.life >= frame8) {
            //     const progress = 1 - ((this.life - frame8) / (frame7 - frame8))
            //     const value = easeOutExpo(progress)
            //     const m12_value = 1
            //     this.m12 = 0.5 - m12_value * value
            //     const m11_value = 0.5
            //     this.m22 = 0.5 + (m11_value * value)
            // }
            // else if (this.life >= frame9) {
            //     const progress = 1 - ((this.life - frame9) / (frame8 - frame9))
            //     const value = easeOutExpo(progress)
            //     const m12_value = 0.5
            //     this.m12 = -0.5 + m12_value * value

            // }
        }

        this.gravity();
        this.detectBottom();
        this.move();

        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        this.ctx.rotate((this.rotate * Math.PI) / 180);
        this.ctx.globalAlpha = this.opacity;
        this.ctx.setTransform(this.m11, this.m12, this.m21, this.m22, this.x + this.fontSize, this.y + this.fontSize / 2);
        //this.drawPadding();

        this.ctx.fillText(this.text, 0, 0);
        this.ctx.restore();

        this.destory();
    }

    drawPadding() {
        this.ctx.fillRect(this.fontSize * -0.5, this.fontSize * -1, this.fontSize, this.fontSize)
    }
    detectBottom() {
        const bottom = window.innerHeight - (this.fontSize / 2);
        if (this.y + this.y_acc > bottom) {
            this.y = bottom
            this.y_acc = 0
            if (this.life < this.frame2) {
                if (!this.fin) this.fin = this.life
                this.x_acc = 0
            }

        }
    }

}

