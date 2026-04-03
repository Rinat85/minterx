import React, { useState, useEffect } from 'react';
import ExchangeSelect from '../../components/exchange-select/exchange-select.component';

import BipIcon from '../../assets/img/bip-icon.png';
import EthIcon from '../../assets/img/eth-icon.svg';
import BtcIcon from '../../assets/img/btc-icon.svg';



const Exchange = () => {

    const [ deposit, setDeposit ] = useState('');
    const [ earn, setEarn ] = useState('');

    const currencies = [
        {   
            id: 0,
            name: 'BIP',
            value: 'BIP',
            iconUrl: BipIcon
        },
        {   
            id: 1,
            name: 'BTC',
            value: 'BTC',
            iconUrl: BtcIcon
        },
        {   
            id: 2,
            name: 'ETH',
            value: 'ETH',
            iconUrl: EthIcon
        }
    ];
    
    const [ depositCurrency, setDepositCurrency ] = useState(currencies[0]);
    const [ earnCurrency, setEarnCurrency ] = useState(currencies[0]);
    

    const handleDepositCurrenciesSelect = currency => {
        setDepositCurrency(currency, console.log(earnCurrency));
    };

    const handleEarnCurrenciesSelect = currency => {
        setEarnCurrency(currency, console.log(depositCurrency));
        
    };

    const localStringToNumber = 
        (s) => Number(String(s).replace(/[^0-9.-]+/g,""));

    const handleDepositInputChange = event => {
        let value = event.target.value;
        value = event.target.value ? localStringToNumber(event.target.value) : '';
        setDeposit(value);
    };

    const handleEarnInputChange = event => {
        let value = event.target.value;
        value = event.target.value ? localStringToNumber(event.target.value) : '';
        setEarn(value);
    };

    const handleDepositInputFocus = event => {
        let value = event.target.value;
        event.target.value = value ? localStringToNumber(event.target.value) : '';
    }


    useEffect(() => {
        console.log(deposit);
    }, [deposit]);

    useEffect(() => {
        console.log(earn);
    }, [earn]);
    
    return (
        <section className="exchange">
            <form className="exchange-box" method="post">
                <div className="exchange-item">
                    <h2 className="exchange-item-title">Отдаю</h2>
                    <ExchangeSelect
                      currency={depositCurrency}
                      currencies={currencies}
                      handleSelect={handleDepositCurrenciesSelect}
                    />
                    <div className="exchange-input-wrap">
                        <label htmlFor="deposit" className="exchange-label">{depositCurrency.name}</label>
                        <input
                            id="deposit"  
                            type="currency"
                            onChange={event => handleDepositInputChange(event)}
                            onFocus={event => handleDepositInputFocus(event)}
                            value={deposit}
                            className="exchange-input" />
                    </div>
                    <p className="exchange-item-content">
                        <span>Min: 10 Max: 50000</span>
                        <span>С учетом комиссии: 100.8 WMZ</span>
                        <span>1 WMZ = 63.51 SBERRUB</span>
                    </p>
                    <button type="button" className="exchange-btn">Получить бонус</button>
                </div>

                <div className="exchange-item">
                    <h2 className="exchange-item-title">Получаю</h2>
                    <ExchangeSelect
                      currency={earnCurrency}
                      currencies={currencies}
                      handleSelect={handleEarnCurrenciesSelect}
                    />
                    <div className="exchange-input-wrap">
                        <label htmlFor="earn" className="exchange-label">{earnCurrency.name}</label>
                        <input
                            id="earn"  
                            type="currency"
                            onChange={event => handleEarnInputChange(event)}
                            onFocus={event => handleDepositInputFocus(event)}
                            value={earn}
                            className="exchange-input" />
                    </div>
                    <p className="exchange-item-content">
                        <span>Min: 10 Max: 50000</span>
                        <span>С учетом комиссии: 100.8 WMZ</span>
                        <span>1 WMZ = 63.51 SBERRUB</span>
                    </p>
                    <input type="text" name="wallet-number" className="earn-wallet-input" placeholder="Номер BIP кошелька" />
                    <button type="submit" className="exchange-submit-btn">Обменять</button>
                </div>
            </form>
        </section>
    )
}

export default Exchange;