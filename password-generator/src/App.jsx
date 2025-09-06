import { useState, useCallback,useEffect,useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");
  const ref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "{}!@#$%&*";
    for (let i = 0; i < length; i++) {
      let temp = Math.floor(Math.random() * str.length);
      password += str.charAt(temp);
    }
    setPass(password);
  }, [length, num, char]);

  const copyToClipboard = useCallback(()=>{
    ref.current?.select();
    //ref.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(pass)
  },[pass])
  useEffect(()=>{
    passwordGenerator();
  },[length,num,char,passwordGenerator])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
        <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6">
          
          <h1 className="text-4xl font-bold text-center text-orange-400 mb-6 tracking-wide">
            Password Generator
          </h1>

      
          <div className="flex shadow-inner rounded-lg overflow-hidden bg-gray-700 focus-within:ring-2 focus-within:ring-orange-400">
            <input
              type="text"
              value={pass}
              readOnly
              placeholder="Generated password"
              className="outline-none w-full py-2 px-4 bg-gray-700 text-white placeholder-gray-400" 
              ref = {ref}
            />
            <button
              onClick={copyToClipboard}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 transition-colors duration-200"
            >
              Copy
            </button>
          </div>

        
          <div className="mt-6 space-y-4">
         
            <div className="flex items-center justify-between">
              <label className="text-white font-medium">
                Length: <span className="text-orange-400">{length}</span>
              </label>
              <input
                type="range"
                min="4"
                max="32"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-2/3 accent-orange-500"
              />
            </div>

            
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={num}
                  onChange={() => setNum((prev) => !prev)}
                  className="w-4 h-4 accent-orange-500"
                />
                Numbers
              </label>

              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={char}
                  onChange={() => setChar((prev) => !prev)}
                  className="w-4 h-4 accent-orange-500"
                />
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
