import React, { Component } from 'react';
import { FaExchangeAlt, FaBitcoin, FaHandsHelping } from 'react-icons/fa';
import { AiFillSafetyCertificate, AiFillStar, AiFillGift, AiFillInfoCircle } from 'react-icons/ai';
import logo from '../../assets/img/logo-main.png';


export class Sidenav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="navbar">
                <a href="#!" className="logo-section">
                    <h1>Minter</h1><img src={logo} alt="Logo" />
                </a>
                <nav className="nav">
                    <a href="#!" className="nav-link"><FaExchangeAlt className="nav-link-icon" />Обмен</a>
                    <a href="#!" className="nav-link"><FaBitcoin className="nav-link-icon" />Курс/Резерв</a>
                    <a href="#!" className="nav-link"><AiFillSafetyCertificate className="nav-link-icon" />Сделки</a>
                    <a href="#!" className="nav-link"><AiFillStar className="nav-link-icon" />Отзывы</a>
                    <a href="#!" className="nav-link"><AiFillGift className="nav-link-icon" />Бонусы</a>
                    <a href="#!" className="nav-link"><FaHandsHelping className="nav-link-icon" />Партнерка</a>
                    <a href="#!" className="nav-link"><AiFillInfoCircle className="nav-link-icon" />О минтере</a>
                </nav>
            </div>
        )
    }
}

export default Sidenav;
