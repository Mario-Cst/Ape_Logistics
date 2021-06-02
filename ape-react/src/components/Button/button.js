import('./button.css')
const Button = ({nombre}) => {
    return(
        <button className="button">{nombre}</button>
    );

};

export default Button;