import { useEffect, useRef } from 'react'
import WarrCanvas from '../templates/canvas/warr'

type AppProps = {
    color:string[],
    backgroundColor:string,
    fontFamily:string,
}

function Warr(props:AppProps) {
    const ref = useRef(null)
    useEffect(() => {
        const canvasRef = ref.current
        const canvas = new WarrCanvas({
            canvas:canvasRef,
            ...props
        })
        canvas.init()
        canvas.start()
    }, [props])
    return (
        <canvas ref={ref}></canvas>
    );
}

export default Warr
