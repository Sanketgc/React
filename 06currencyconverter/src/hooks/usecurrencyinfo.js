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



import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
