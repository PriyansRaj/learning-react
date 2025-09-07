import { useEffect, useState } from "react";

function useCurrencyindex(currency) {
  const [data, setData] = useState({}); 
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({}); 
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyindex;
