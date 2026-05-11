import { useEffect, useState } from "react"
Currencyinfo = process.env.CURRENCYINFO

function useCurrency(currency){
const [data, setdata] = useState({})

    useEffect(() => {
        fetch(Currencyinfo)
            .then((res) => res.json())
            .then((res) => setdata(res[currency]))
            console.log(data);

    }, [currency])  
    console.log(data);
    return data;
}

export default useCurrency;

