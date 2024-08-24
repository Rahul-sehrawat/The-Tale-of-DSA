import { FC, useState } from 'react'
import { useDraw } from '@/hooks/useDraw'
import { CirclePicker } from 'react-color'
import Topbar from '@/components/Topbar/Topbar'

interface pageProps {}

const DrawPage: FC<pageProps> = ({}) => {
  const [color, setColor] = useState<string>('#000')
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine)
  const [showColors, setShowColors] = useState(false);
  const [range, setRange] = useState<number | string>(5)
	  
  const handleToggleColors = () => {
        setShowColors(!showColors);
      };


  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint
    const lineColor = color
    const lineWidth = range

    let startPoint = prevPoint ?? currentPoint
    ctx.beginPath()
    ctx.lineWidth = lineWidth as number
    ctx.strokeStyle = lineColor
    ctx.moveTo(startPoint.x, startPoint.y)
    ctx.lineTo(currX, currY)
    ctx.stroke()

    ctx.fillStyle = lineColor
    ctx.beginPath()
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  return (
    <>
    <Topbar/>
    <h1 className=' text-center font-sans text-dark-yellow text-2xl font-bold mt-2'>Visualize D.S.A Problem Here 🎨 </h1>
    <div className='bg-white m-4 flex justify-center items-center '>
        <canvas
            ref={canvasRef}
            onMouseDown={onMouseDown}
            width={900}
            height={600}
            className='border border-black rounded-md'
        />
      <div className='flex flex-col gap-6 pl-10'>
        <div onClick={handleToggleColors} className="cursor-pointer ">
        <img className="hover:scale-110" src="/draw.png" alt="draw-image" width={80} />
        </div>
        {showColors && <div >
            <CirclePicker  color={color} onChange={(e) => setColor(e.hex)}/>
            <div className='flex mt-8 gap-2 '>
            <h1>Line width :</h1>
            <input 
                className=" cursor-pointer accent-black"
                type="range" 
                min={1} max={10}
                value={range}
                onChange={(e)=>{setRange(e.target.value)}}
                />
                <h1>{range}</h1>
            </div>

            <button type='button' className='p-2 mt-6 rounded-md border border-black text-white text-lg ' style={{backgroundColor:`${color}`}} onClick={clear}>
                Clear canvas
            </button>
            
        </div>
        
        

        }
        
      </div>
      
    </div>
    </>
  )
}

export default DrawPage