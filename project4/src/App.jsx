import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive");


  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button onClick={()=> setColor('red')} type="button" className="outline-none px-4 bg-red">Red</button>

            <button onClick={()=> setColor('green')} type="button" className="outline-none px-4 bg-green">Green</button>
            <button onClick={()=> setColor("orange")} type="button" className="outline-none px-4 bg-orange">Orange</button>
            <button onClick={()=> setColor('yellow')} type="button" className="outline-none px-4 bg-yellow">Yellow</button>
            <button onClick={()=> setColor("blue")} type="button" className="outline-none px-4 bg-blue">Blue</button>
            <button onClick={()=> setColor("pink")}  type="button" className="outline-none px-4 bg-pink">Pink</button>
            <button onClick={()=> setColor("black")} type="button" className="outline-none px-4 ">Black</button>
    
   </div> 
     </div> 
    </div>
    </>
  )
}

export default App
