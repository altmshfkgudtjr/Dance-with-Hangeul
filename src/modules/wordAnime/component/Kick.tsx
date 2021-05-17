import { useEffect, useRef } from 'react'
import KickCanvas from '../templates/canvas/kick'

type AppProps = {
    color:string[],
    backgroundColor:string,
    fontFamily:string,
}

function Kick(props:AppProps) {
    const ref = useRef(null)
    useEffect(() => {
        const canvasRef = ref.current
        const canvas = new KickCanvas({
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

export default Kick
