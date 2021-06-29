import HangulCanvas from '../HangulCanvas';
import { Tang } from '../hangul/tang';
import { getRandomInt } from '../utils';


const GUN_WIDTH_POS = 0.75;
const GUN_HEIGHT_POS = 0.75

export default class Canvas_Tang extends HangulCanvas {
    constructor(props) {
        super(props);
        this.HangulClass = Tang;

        this.cooltime = {
            current: 0,
            max: [30, 40, 80, 80],
            idx: 0,
            reset: () => {
                this.cooltime.current = 0;
                this.cooltime.idx = getRandomInt(0, this.cooltime.max.length);
            }
        }

    }
    init() {
        this.canvas.style.letterSpacing = `${this.latterSpacing}px`;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.save();

        this.gun = new Gun({
            ctx: this.ctx,
            width: this.width,
            height: this.height
        });
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    start() {
        //const colors = ["#ffc107", "#80bdff", "#ff9800"]
        let count = 0;
        const step = () => {
            this.cooltime.current++;
            if (this.cooltime.current === this.cooltime.max[this.cooltime.idx]) {
                this.gun.setTang();
                const angle = this.gun.angle;
                this.objects.push(new Tang(this.getParams(angle)))
            } else if (this.cooltime.current === this.cooltime.max[this.cooltime.idx] + 80) {
                this.gun.setRotate();
                this.cooltime.reset();
            }

            this.removeObject();
            this.drawBackground();
            this.gun.draw();
            this.drawObject();
            this.animation = requestAnimationFrame(step);
        };
        this.animation = requestAnimationFrame(step);
    }

    getParams(angle) {
        const params = super.getParams();
        const fontSize = 100;
        const x = this.width * GUN_WIDTH_POS;
        const y = this.height * GUN_HEIGHT_POS;
        return {
            ...params,
            fontSize: fontSize,
            x: x,
            y: y,
            angle: angle,

        };
    }



}


class Gun {
    constructor(props) {
        this.ctx = props.ctx;
        this.width = props.width;
        this.height = props.height;
        this.size = 600;
        this.x = 0
        this.y = 0
        this.angle = 15;

        this.start_angle = undefined;
        this.fin_angle = undefined;

        this.frame = -1;
        this.rotate_frame = -1;
    }

    draw() {

        this.tang();
        this.rotate();

        this.ctx.save();
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.font = `${this.size}px NanumGothic`;
        this.ctx.translate(
            this.width * GUN_WIDTH_POS + this.x,
            this.height * GUN_HEIGHT_POS + this.y
        );
        this.ctx.rotate(this.angle / 180 * Math.PI);
        this.ctx.fillText("ㄱ", 0, 0)
        this.ctx.restore();
    }


    setTang() {
        this.start_angle = this.angle;
        this.fin_angle = this.angle + 90;
        this.start_x = this.x;
        this.fin_x = 150;
        this.frame = 0;
    }

    tang() {
        if (this.frame === -1) return;
        this.frame++;
        if (this.frame < 5) {
            this.angle += (this.fin_angle - this.angle) * 0.2
            this.x += (this.fin_x - this.x) * 0.2
        }
        else if (this.frame < 60) {
            this.angle += (this.start_angle - this.angle) * 0.08
            this.x += (this.start_x - this.x) * 0.08
        }
        else {
            this.angle = this.start_angle;
            this.x = this.start_x;
            this.frame = -1;
        }


    }

    setRotate() {
        this.fin_angle = Math.random() > 0.5 ? getRandomInt(-30, 80) : getRandomInt(330, 440);
        this.rotate_frame = 0;
    }

    rotate() {
        if (this.rotate_frame === -1) return;
        this.rotate_frame++;

        if (this.rotate_frame < 40) {
            this.angle += (this.fin_angle - this.angle) * 0.1
        }
        else {
            this.rotate_frame = -1;
        }

    }
}