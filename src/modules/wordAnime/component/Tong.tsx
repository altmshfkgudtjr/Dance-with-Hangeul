import { useEffect, useRef } from 'react'
import TongCanvas from '../templates/canvas/tong'

type AppProps = {
    color:string[],
    backgroundColor:string,
    fontFamily:string,
}

function TongComponent(props:AppProps) {
    const ref = useRef(null)
    useEffect(() => {
        const canvasRef = ref.current
        const canvas = new TongCanvas({
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

export default TongComponent
