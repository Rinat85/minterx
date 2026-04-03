import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Bonuses = () => {
    return (
        <section className="bonuses">
            <div className="bonuses-info">
                <h2>Приведи клиента</h2>
                <div>
                    <p>
                        Предлагаем Вам нашу партнёрскую программу:
                    </p>
                    <p>
                        Мы выплачиваем 0,7% с любой сделки, совершённой по вашей партнёрской ссылке.
                    </p>
                    <p>
                        Вознаграждения рассчитываются и выплачиваются каждые 4 часа (6 раз в сутки).
                        Выплаты производятся в нашей стабильной монете REWARD (crr 95%) по текущему курсу.
                        Не требуется никакая регистрация, вас или вашего клиента.
                        Если Ваш клиент, перейдя по партнёрской ссылке не совершил покупки BIP сразу, потерял её или закрыл браузер, то его сделка будет засчитана вам всё равно, если он совершит покупку в течение 24-х часов
                        Срок действия текущих условий партнёрской программы: до 31-го декабря 2019 года.
                    </p>
                    <p>
                        Для того, чтобы сгенерировать вашу индивидуальную ссылку или проверить выплаты, введите ваш МинтерХ адрес ниже
                    </p>
                    <form>
                        <input type="text" placeholder="Посмотреть статистику или стать партнером" />
                        <button type="submit"><AiOutlineSearch /></button>
                    </form>
                </div>
            </div>
            <div className="bonuses-apply">
                <table>
                    <thead>
                        <tr>
                            <th>Размер бонуса</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 - 2000</td>
                            <td>57A</td>
                        </tr>
                        <tr>
                            <td>2000 - 4000</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <td>4000 - 6800</td>
                            <td>15%</td>
                        </tr>
                        <tr>
                            <td>6800 - 10000</td>
                            <td>18%</td>
                        </tr>
                        <tr>
                            <td>10000 - CO</td>
                            <td>20%</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#!" className="bonuses-exchange-btn">Обменять</a>
            </div>
        </section>
    )
}

export default Bonuses;