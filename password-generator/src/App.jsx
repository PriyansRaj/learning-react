import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8);
  const [num,setNum] = useState(false)
  const [char,setChar] = useState(false);
  const [pass,setPass] = useState()
  const passwordGenerator = useCallback(()=>{
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num) str+='0123456789';
    if(char) str+='{}!@#$%&*';
    for(let i=0;i<length;i++){
      let temp = Math.floor(Math.random()*str.length+1)
      password+=str.charAt(temp);
    }
    setPass(password);
    
  },[length,num,char,setPass])
  
  
  return (
    <>
<>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
    <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-orange-400 mb-6 tracking-wide">
        Password Generator
      </h1>

      {/* Input Box */}
      <div className="flex shadow-inner rounded-lg overflow-hidden bg-gray-700 focus-within:ring-2 focus-within:ring-orange-400">
        <input
          type="text"
          value={pass}
          readOnly
          placeholder="Generated password"
          className="outline-none w-full py-2 px-4 bg-gray-700 text-white placeholder-gray-400"
        />
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 transition-colors duration-200"
        >
          Copy
        </button>
      </div>

      {/* Example Button Section (Optional) */}
      <div className="flex justify-between mt-6">
        <input type='checkbox' className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-white font-medium transition duration-200" /> <label for=""></label>
        <input type='checkbox' className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-white font-medium transition duration-200" />
        <input type='checkbox' className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-white font-medium transition duration-200" />



    </div>
    </div>
      </div>
  </div>
</>
      
    
  )
}

export default App
