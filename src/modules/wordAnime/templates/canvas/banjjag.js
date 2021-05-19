import HangulCanvas from '../HangulCanvas'
import Banjjag from '../hangul/banjjag'
import {getRandomInt} from '../utils'

export default class Canvas_Banjjag extends HangulCanvas {

    constructor(props){
        super(props);
        this.HangulClass = Banjjag;
        this.maxCooltime = 10;
        this.maxObjectCount = 20;
    }
    start() {
        const step = () => {
            this.createObject();
            this.detectObjects();
            this.removeObject();
            this.drawBackground();
            this.drawObject();

            this.animation = requestAnimationFrame(step);
        }
        this.animation = requestAnimationFrame(step);
    }

    getParams(){
        const params = super.getParams();
        let fontSize = Math.random() < 0.8 ? getRandomInt(30, 40) : getRandomInt(80, 90)
        fontSize *= this.rectSum/ 2000
        return {
            ...params,
            text: '반짝',
            fontSize: fontSize,
            fontFamily: 'Nanum Myeongjo',
            opacity: 0,
            x: getRandomInt(this.width *0.2, this.width *0.7),
            y: getRandomInt(this.height *0.3, this.height *0.8),
            x_acc: getRandomInt(10, 30) / -20,
            life: 60,
            finLife: 30,
            isFadeIn: true,
            isDetect: true,
            crush_acc: 1.5,
            rotate: getRandomInt(-20, 20),
            isBlur: Math.random() > 0.2 ? true : false
        }
    }



}

