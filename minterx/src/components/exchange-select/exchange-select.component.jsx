import React, {useState} from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const ExchangeSelect = ({currency, currencies, handleSelect}) => {

    const [ currenciesIsOpen, setCurrenciesIsOpen ] = useState(false);

    const handleTitleClick = () => {
        setCurrenciesIsOpen(!currenciesIsOpen);
    };
    
    return (
        <div className="exchange-select">
            <div className="exchange-select-header" 
                onClick={() => handleTitleClick()}>
                <div className="exchange-select-title">
                    <img
                      src={currency.iconUrl}
                      alt="bip icon"
                      className="exchange-list-icon" />
                    {currency.name}
                </div>
                {currenciesIsOpen
                    ? <MdExpandLess />
                    : <MdExpandMore />
                }
            </div>
            {currenciesIsOpen &&
                <ul className="exchange-list">
                    {currencies.map((item) => (
                        <li
                          key={item.id}
                          className="exchange-list-item"
                          onClick={() => {
                              handleSelect(item);
                              setCurrenciesIsOpen(false);}}>  
                            <img
                              src={item.iconUrl}
                              alt={item.name}
                              className="exchange-list-icon" /> 
                        {item.name} 
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
};

export default ExchangeSelect;