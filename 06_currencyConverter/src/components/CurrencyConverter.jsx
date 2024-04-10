import React, { useEffect, useState } from 'react';
import CurrencyDropDown from './CurrencyDropDown';

function CurrencyConverter() {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [amount, setAmount] = useState(1)
    const [convertedAmount, setConvertedAmount] = useState(null)
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]
    )

    const fetchCurrencies = () => {
        fetch(`https://api.frankfurter.app/currencies`)
            .then((res) => res.json())
            .then(data => setCurrencies(Object.keys(data)))
            .catch((e) => console.log(`error in fetching data ${e}`));
    };

    useEffect(() => {
        fetchCurrencies();
    }, []);

    const swapCurrencies = ()=>{
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }
    // useEffect(()=>{
    //     convertCurrency()
    // }, [amount, swapCurrencies])

    const convertCurrency = () =>{
        if(!amount)
        return false
        fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
        .then((res) => res.json())
        .then(data => setConvertedAmount(data.rates[toCurrency] + " " + toCurrency))
        .catch((e) => console.log(`error in fetching data ${e}`));
    }

    const handleFavorite = (currency) => {
        let updatedFavorites = [...favorites]
        if(favorites.includes(currency)){
            updatedFavorites = updatedFavorites.filter(fav => fav !== currency)
        }
        else{
            updatedFavorites.push(currency)
        }
        setFavorites(updatedFavorites)
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }
    return (

        <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
            <h2 className="mb-5 text-2xl font-semibold text-gray-700">Currency Converter</h2>
            <CurrencyDropDown
                currencies={currencies} 
                title = "From"
                setCurrency = {setFromCurrency}
                currency = {fromCurrency}
                handleFavorite = {handleFavorite}
                favorites = {favorites}
            />
            
            <div className="flex justify-center -mb-5 sm:mb-0">
                <button 
                onClick={swapCurrencies}
                className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="text-xl text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z" clipRule="evenodd">
                </path>
                </svg>
                </button>
            </div>
            <CurrencyDropDown
                currencies={currencies} 
                title = "To"
                setCurrency = {setToCurrency}
                currency = {toCurrency}
                handleFavorite = {handleFavorite}
                favorites={favorites}
            />
            <div className="mt-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
                <input type="number" className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1" 
                value={amount} 
                onChange={(e)=> setAmount(e.target.value)}
                />
                <div className="flex justify-end mt-6">
                    <button 
                    onClick={convertCurrency}
                    className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  ">convert</button>
                </div>
                <div className="mt-4 text-lg font-medium text-right text-green-600">
                     {`converted Amount :${convertedAmount}`}
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverter;
