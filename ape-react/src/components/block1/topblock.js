import Captura from '../../img/img_prueba.png';
import('./topblock.css');


const TopBlock = () => {
    return(
        <div className="top_container">
            <div className="text_container">
                <p className="titulo">Todo lo que necesitas para tu 2.0.</p>
                <p className="subtitulo">Olvídate de cientos de Excels, grupos de WhatsApp y cientos de documentos esparcidos por tu ordenador y controla hasta el más mínimo detalle tu flota y tu plantilla</p>
                <button className="button_secundary">EMPIEZA AHORA</button>
            </div>
            <div className="img_container">
                <img src={Captura} alt=""/>
            </div>
        </div>

    );
};

export default TopBlock;