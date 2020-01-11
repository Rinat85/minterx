import React from 'react';

const Deals = () => {

    const data = [
        {
            id: 0,
            date: '28:10 20:50',
            sellAmount: '0.0015989',
            sellTrans: '123F543444334344324',
            buyAmount: '818.1213434',
            buyTrans: 'MTA32230099023322332',
            status: 'COMPLETED' 
        },
        {
            id: 1,
            date: '28:10 20:50',
            sellAmount: '0.0015989',
            sellTrans: '123F543444334344324',
            buyAmount: '818.1213434',
            buyTrans: 'MTA32230099023322332',
            status: 'COMPLETED' 
        },
        {
            id: 2,
            date: '28:10 20:50',
            sellAmount: '0.0015989',
            sellTrans: '123F543444334344324',
            buyAmount: '818.1213434',
            buyTrans: 'MTA32230099023322332',
            status: 'COMPLETED' 
        },
        {
            id: 3,
            date: '28:10 20:50',
            sellAmount: '0.0015989',
            sellTrans: '123F543444334344324',
            buyAmount: '818.1213434',
            buyTrans: 'MTA32230099023322332',
            status: 'COMPLETED' 
        },
        {
            id: 4,
            date: '28:10 20:50',
            sellAmount: '0.0015989',
            sellTrans: '123F543444334344324',
            buyAmount: '818.1213434',
            buyTrans: 'MTA32230099023322332',
            status: 'COMPLETED' 
        }
    ]

    return (
        <section className="deals">
            <h2 className="deals-title">Последние сделки</h2>
            <div className="deals-table-wrap">
                <table className="deals-table">
                    <thead className="deals-table-head">
                        <tr>
                            <th>Время</th>
                            <th>Продажа</th>
                            <th>Транз.продажи</th>
                            <th>Покупка</th>
                            <th>Транз.покупки</th>
                            <th>Статус</th>
                        </tr>
                    </thead>
                    <tbody className="deals-table-body">
                    {data.map(({id, date, sellAmount, sellTrans, buyAmount, buyTrans, status}) => (
                        <tr key={id}>
                            <td>{date}</td>
                            <td>{sellAmount}</td>
                            <td>{sellTrans}</td>
                            <td>{buyAmount}</td>
                            <td>{buyTrans}</td>
                            <td>{status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="deals-footer">
                <a href="#!">
                    <button className="deals-footer-btn">Показать все сделки</button>
                </a>
                <form className="deals-footer-search">
                    <input
                      type="search"
                      name="deals-search"
                      placeholder="Введите адрес или транзакцию"
                      className="deals-search-input" />
                    <button type="submit" className="deals-search-btn">Поиск</button>
                </form>
            </div>

        </section>
    )
}

export default Deals;