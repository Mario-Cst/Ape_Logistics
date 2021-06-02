import './header.css';
import nonpicuser from '../../img/user_default.jpeg';
import Button from '../Button/button';
import Modal from "../modal/modal";
import {useState} from 'react';
import logo from '../../img/onlymonkey.png';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(isModalOpen);

    return (
        <div className="main">
            <div className="left">
                <img src={logo} alt=""/>
                <h3>Ape Logistics</h3>
            </div>
            <div className= "right">
                <button onClick={() => setIsModalOpen(!isModalOpen)}>Login</button> 
                {isModalOpen ===true && <Modal closeModal={() => setIsModalOpen(false)}/>}
                <button>SignIn</button>
                <img src={nonpicuser} alt=""/>
            </div>
            
        </div>

    );
};

export default Header;