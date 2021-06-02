import './modal.css';
import Loguito from '../../img/onlymonkey.png'

const Modal = ({closeModal}) => {
    return(
        <div className="modal" onClick = {closeModal}>
            <div className="modal-content" onClick = {(e) => {e.stopPropagation();}} >
                <div className="header">
                    <div className="first-block">
                        <img src={Loguito} alt="Ape Logistics Logo"/>
                        <h1>Login</h1>
                    </div>
                    <button onClick = {closeModal}>&times;</button>
                </div>
            <hr/>
            <div className= "form">
                <form>
                    <label>Introduce tu Email</label>
                    <br/>
                    <input placeholder="example@example.com"></input>
                    <br/>
                    <label>Introduce tu contraseña</label>
                    <br/>
                    <input placeholder="Password"></input>
                    <br/>
                    <button>Login</button>
                </form>
            </div>
                
                
            </div>
        </div>
    );

};

export default Modal;