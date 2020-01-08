import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink to="/" className="logo-section">
                    <h1>Minter</h1><img src={logo} alt="Logo" />
                </NavLink>
                <nav className="nav">
                    <NavLink exact to="/" activeClassName="nav-link-active" className="nav-link"><FaExchangeAlt className="nav-link-icon" />Обмен</NavLink>
                    <NavLink to="/rate-reserv" activeClassName="nav-link-active" className="nav-link"><FaBitcoin className="nav-link-icon" />Курс/Резерв</NavLink>
                    <NavLink to="/deals" activeClassName="nav-link-active" className="nav-link"><AiFillSafetyCertificate className="nav-link-icon" />Сделки</NavLink>
                    <NavLink to="/reviews" activeClassName="nav-link-active" className="nav-link"><AiFillStar className="nav-link-icon" />Отзывы</NavLink>
                    <NavLink to="/bonuses" activeClassName="nav-link-active" className="nav-link"><AiFillGift className="nav-link-icon" />Бонусы</NavLink>
                    <NavLink to="/affiliate" activeClassName="nav-link-active" className="nav-link"><FaHandsHelping className="nav-link-icon" />Партнерка</NavLink>
                    <NavLink to="/about" activeClassName="nav-link-active" className="nav-link"><AiFillInfoCircle className="nav-link-icon" />О минтере</NavLink>
                </nav>
            </div>
        )
    }
}

export default Sidenav;
