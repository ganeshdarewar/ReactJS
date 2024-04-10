import React from 'react';
import {HiOutlineStar, HiStar} from "react-icons/hi2";

function CurrencyDropDown({ 
    currencies,
    title,
    setCurrency,
    currency,
    favorites,
    handleFavorite,

}) {
    
    const isFavorite = cur => favorites.includes(cur)
    return (
        <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">{title}</label>
            <div className="mt-1 relative">
                <select 
                value={currency}
                onChange={(e)=> setCurrency(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              {favorites.map((currency)=>{
                return <option className='bg-gray-200' value={currency} key={currency}>{currency}</option> 
              })}
                    {currencies.map((currency) => (
                        <option value={currency} key={currency}>{currency}</option>
                    ))}
                </select>
                <button
            onClick={()=>{
              handleFavorite(currency)
            }}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5" >
              {isFavorite(currency) ? <HiStar/> : <HiOutlineStar/> }
            </button>
            </div>
        </div>
    );
}

export default CurrencyDropDown;
