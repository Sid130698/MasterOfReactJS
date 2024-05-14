import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_uVvyS7mCu9jOrPLJnlBE9kKHZembjXiXLE96bg5K"
    )
      .then((res) => res.json())
      .then((res) => {
        if (res && res.data) {
          const newData = { ...res.data };
          // Manipulate the data based on the selected currency
          if (currency && newData[currency]) {
            const rate = newData[currency]; // Get the rate of the selected currency
            // Convert all currency values to their equivalents in the selected currency
            Object.keys(newData).forEach((key) => {
              newData[key] = newData[key] / rate;
            });
          }
          setData(newData);
        }
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);
  console.log(data);
  return data;
}
 export default useCurrencyInfo;