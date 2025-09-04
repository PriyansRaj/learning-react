import { useState } from "react";
function App(){
  const [value,setvalue] = useState(0);

  const addValue = () =>{
    // console.log("Value added ",Math.random()*10);
    // counter++;
    // console.log(counter);
    let temp = value
    temp+=1;
    setvalue(temp);
    
    
  }

  function RemValue(){
    let temp =value;
temp-=1;
setvalue(temp);
  }
  return <>
  <h1>Counter Value: {value}</h1>
  <button onClick={addValue}>Increase</button> <br />
  <button onClick={RemValue}>Decrease</button>
  </>
}


export default  App;