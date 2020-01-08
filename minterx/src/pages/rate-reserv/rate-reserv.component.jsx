import React from 'react';

import EthIcon from '../../assets/img/eth-icon.svg';
import BtcIcon from '../../assets/img/btc-icon.svg';


const RateReserv = () => {

    const data = [
        {
            id: 0,
            name: 'BIP', 
            type: 'BIP',
            iconUrl: BtcIcon,
            sellPrice: 0.3,
            buyPrice: 0.3,
            reserv: 0.3
        },
        {
            id: 1,
            name: 'ETH', 
            type: 'ETH',
            iconUrl: EthIcon,
            sellPrice: 72543891,
            buyPrice: 72543891,
            reserv: 72543891
        },
        {
            id: 2,
            name: 'BTC', 
            type: 'BTC',
            iconUrl: BtcIcon,
            sellPrice: 12331238819,
            buyPrice: 12331238819,
            reserv: 12331238819
        }
    ]

    return (
        <section className="rate-reserv">
            <h2 className="ratereserv-title">Курс / Резерв</h2>
            <table className="ratereserv-table">
                <thead className="table-head">
                    <tr>
                        <th>Валюты</th>
                        <th>Продажа</th>
                        <th>Покупка</th>
                        <th>Резерв</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    { data.map( ({id, iconUrl, name, sellPrice, buyPrice, reserv}) => (
                        <tr key={id} className="table-row">
                            <td><img src={iconUrl} alt={name} className="table-icon" /> {name}</td>
                            <td>{sellPrice}</td>
                            <td>{buyPrice}</td>
                            <td>{reserv}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default RateReserv;