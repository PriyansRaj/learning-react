import { useState } from 'react';
import useCurrencyindex from './hooks/useCurrencyindex';
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState("");

  const currencyInfo = useCurrencyindex(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmt((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 space-y-6">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 flex items-center justify-center gap-2">
          <span role="img" aria-label="currency">💱</span>
          Currency Converter
        </h1>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-5"
        >
          {/* From Input */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onAmountChange={(amt) => setAmount(amt)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
          />

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105"
            >
              🔁 Swap
            </button>
          </div>

          {/* To Input */}
          <InputBox
            label="To"
            amount={convertedAmt}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            isAmountDisabled={true}
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-3 rounded-lg font-bold shadow-lg"
          >
            Convert {from.toUpperCase()} ➜ {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
