import { useEffect, useRef } from 'react'
import BanjjagCanvas from '../templates/canvas/banjjag'

type AppProps = {
    color:string[],
    backgroundColor:string,
    fontFamily:string,
}

function Banjjag(props:AppProps) {
    const ref = useRef(null)
    useEffect(() => {
        const canvasRef = ref.current
        const canvas = new BanjjagCanvas({
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

export default Banjjag
