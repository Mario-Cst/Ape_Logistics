import Modal from "../modal/modal";
import {useState} from 'react';



const Button2 = () => {
    const [isClick, setIsClick] = useState(false);
    console.log(isClick);
    
    return(
        <div>
            <button onClick={() => setIsClick(!isClick)}>Modal</button>
            {isClick ===true && <Modal/>}
            <Modal />
        </div>
                
    );

};

export default Button2;