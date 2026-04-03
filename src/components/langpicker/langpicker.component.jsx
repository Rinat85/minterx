import React, { useContext, useState, useEffect, useRef } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';


import { LangContext } from '../../App';



const LangPicker = () => {

    const [ lang, setLang, langs ] = useContext(LangContext);
    const [ langTitle, setLangTitle ] = useState(null);
    
    useEffect(() => {
        setLangTitle(lang.title);   
    }, [lang]);
    

    const [ isOpen, setIsOpen ] = useState(false);

    const toggleList = () => setIsOpen(!isOpen);

    const changeLang = (item) => {
        setLang(item);
        closeList();
    }

    const closeList = () => setIsOpen(false);

    function useOutsideAlerter(ref) {
    
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                closeList();
            }
        }
    
        useEffect(() => {
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            };
        });
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    

    return (
        <div className="lang-wrapper" ref={wrapperRef}>
            <div className="lang-header" onClick={() => toggleList()}>
                <div className="lang-header-title">{langTitle}</div>
                {isOpen ? <MdExpandLess />
                        : <MdExpandMore />
                }
            </div>
            {isOpen && 
                <ul className="lang-list">
                    {langs.map((lang, idx) => (
                        <li className="lang-list-item" key={idx} onClick={() => changeLang(lang)}>{lang.title}</li>
                    ))}
                </ul>
            }
            
        </div>
    )
}

export default LangPicker;
