import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import NepaliCal from "./components/NepaliCal";
import NepaliDateConverter from 'nepali-date-converter';
import Result from "./components/Result";
function App() {
  const [resDate, setresDate] = useState("");
  const [ad,setAd]  = useState()
   const [bs,setBs]  = useState()

  const [lastChanged, setLastChanged] = useState(null);

  function convertNepaliToEnglishNumber(nepaliNumberString) {
  const nepaliToEnglishMap = {
    '०': '0',
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9'
  };

  let englishNumberString = '';
  for (let i = 0; i < nepaliNumberString.length; i++) {
    const char = nepaliNumberString[i];
    if (nepaliToEnglishMap[char]) {
      englishNumberString += nepaliToEnglishMap[char];
    } else {
      
      englishNumberString += char;
    }
  }
  return englishNumberString;
}
  const handleConvert = ()=>{
    
  }


  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
        <div className="flex space-x-16">
          <Card ConvertTo="BS" ConvertFrom="AD" onChange={(e)=>{
            setAd(e.target.value)
            setLastChanged("AdToBs")
          }} />
          <NepaliCal onChange={(e)=>{
            setBs(e)
            console.log(e);
            setLastChanged('BsToAd')
          }}></NepaliCal>
        </div>

        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                     hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 
                     focus:ring-offset-1 transition-all duration-200" onClick={handleConvert}>
          Convert
        </button>
            <Result date={resDate}></Result>
      </div>
    </>
  );
}

export default App;
