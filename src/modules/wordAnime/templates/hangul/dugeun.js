import Hangul from '../Hangul';
import { easeInExpo, easeOutExpo } from '../utils';


export class Du extends Hangul {
    constructor(props) {
        super(props);
        this.text = '두';
        this.rotate = -10
        this.x -= this.fontSize / 2

        this.frame = 0;
        this.scale = 1
        this.scenes = [0, 15, 30, 50, 60, 75, 90, 115, 140]
    }

    draw() {
        this.frame += 1
        super.draw(() => {

            if (this.life > this.maxLife - 40) {
                this.scale = easeInExpo(this.progress(0, 40, this.maxLife - this.life));
            } else if (this.frame <= this.scenes[1]) {
                this.scale = 1 + (easeInExpo(this.progress(this.scenes[0], this.scenes[1], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[2]) {
                this.scale = 1.1 - (easeOutExpo(this.progress(this.scenes[1], this.scenes[2], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[3]) {
                this.scale = 1 + (easeInExpo(this.progress(this.scenes[2], this.scenes[3], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[4]) {
                this.scale = 1.1 - (easeOutExpo(this.progress(this.scenes[3], this.scenes[4], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[5]) {
                this.scale = 1 + (easeInExpo(this.progress(this.scenes[4], this.scenes[5], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[6]) {
                this.scale = 1.1 - (easeOutExpo(this.progress(this.scenes[5], this.scenes[6], this.frame)) * 0.1)
            }
            else if (this.frame <= this.scenes[7]) {
                this.scale = 1 + (easeInExpo(this.progress(this.scenes[6], this.scenes[7], this.frame)) * 0.5)
            } else if (this.frame <= this.scenes[8]) {
                this.scale = 1.5 - (easeOutExpo(this.progress(this.scenes[7], this.scenes[8], this.frame)) * 0.5)
            } else {
                this.frame = 0
            }


            this.ctx.scale(this.scale, this.scale)

        });


    }
}

export class Geun extends Hangul {
    constructor(props) {
        super(props);
        this.text = '근';
        this.rotate = 10
        this.x += this.fontSize / 2
        this.frame = 0;
        this.scenes = [0, 15, 30, 50, 60, 75, 90, 115, 140]
    }
    draw() {
        this.frame += 1
        super.draw(() => {

            if (this.life > this.maxLife - 40) {
                this.scale = easeInExpo(this.progress(0, 40, this.maxLife - this.life));
            } else if (this.frame <= this.scenes[1]) {
                this.scale = 1 + (easeInExpo(this.progress(this.scenes[0], this.scenes[1], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[2]) {
                this.scale = 1.1 - (easeOutExpo(this.progress(this.scenes[1], this.scenes[2], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[3]) {
                this.scale = 1 + (easeInExpo(this.progress(this.scenes[2], this.scenes[3], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[4]) {
                this.scale = 1.1 - (easeOutExpo(this.progress(this.scenes[3], this.scenes[4], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[5]) {
                this.scale = 1 + (easeInExpo(this.progress(this.scenes[4], this.scenes[5], this.frame)) * 0.1)
            } else if (this.frame <= this.scenes[6]) {
                this.scale = 1.1 - (easeOutExpo(this.progress(this.scenes[5], this.scenes[6], this.frame)) * 0.1)
            }
            else if (this.frame <= this.scenes[7]) {
                this.scale = 1 + (easeInExpo(this.progress(this.scenes[6], this.scenes[7], this.frame)) * 0.5)
            } else if (this.frame <= this.scenes[8]) {
                this.scale = 1.5 - (easeOutExpo(this.progress(this.scenes[7], this.scenes[8], this.frame)) * 0.5)
            } else {
                this.frame = 0
            }
            this.ctx.scale(this.scale, this.scale)

        })
    }
}
