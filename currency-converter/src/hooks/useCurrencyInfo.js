import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    let [data,setData]=useState({})
  useEffect(() => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_uVvyS7mCu9jOrPLJnlBE9kKHZembjXiXLE96bg5K"
    ).then((response) => response.json())
    .then((response) => setData(response["data"]));
    console.table(data);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;