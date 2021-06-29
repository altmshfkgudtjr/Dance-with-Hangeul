import Hangul from '../Hangul';
import { easeInExpo, easeOutExpo } from '../utils';



const CHAL_STATUS = [
    {
        x: 600,
        y: 400,
        angle: -50,
    }
]

const KAG_STATUS = [
    {
        x: 800,
        y: 600,
        angle: 0,
    }
]

export class Chal extends Hangul {
    constructor(props) {
        super(props);
        this.text = '찰';
    }

    draw() {

        super.draw(() => {
            this.x += (CHAL_STATUS[0].x - this.x) * 0.05;
            this.y += (CHAL_STATUS[0].y - this.y) * 0.05;
            this.angle += (CHAL_STATUS[0].angle - this.angle) * 0.05;
        });


    }
}

export class Kag extends Hangul {
    constructor(props) {
        super(props);
        this.text = '칵';
    }
    draw() {
        super.draw(() => {

            this.x += (KAG_STATUS[0].x - this.x) * 0.05;
            this.y += (KAG_STATUS[0].y - this.y) * 0.05;
            this.angle += (KAG_STATUS[0].angle - this.angle) * 0.05;
        })
    }
}
