import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';

const Footer = () => {
    
    return ( 
        <footer id="contacto" className="mt-5">
        <div className="titles text-center">
            <h1 className="h1-footer">Gamer's Edge</h1>
            <br />
            <h1 className="footer-title">Acerca de Nosotros</h1>
        </div>
        <div className="footer-icons d-flex justify-content-around">
            <div className="redes">
            <h1 className="redes-footer">Redes Sociales</h1>
            <a href="#" className="social-link"><i className="fa-brands fa-github" id="git"></i>@Gamers.Edge</a>
            <a href="#" className="social-link"><i className="fa-brands fa-instagram" id="ig"></i>@GamersEdge</a>
            <a href="#" className="social-link"><i className="fa-brands fa-linkedin" id="li"></i>@Gamer's Edge</a>
            </div>
            <div className="contactanos">
            <h1 className="contacto-footer">Contactanos</h1>
            <a href="#" className="contact-link"><i className="fa-brands fa-whatsapp" id="wh"></i>+54 9 11 9999-0000</a>
            <a href="#" className="contact-link"><i className="fa-regular fa-envelope" id="mail"></i>GamersEdge@gmail.com</a>
            
            </div>
        </div>
        <div className="Copyright text-center">
            <p className="parrafo-footer">Copyright &copy; 2024 - Todos los derechos reservados</p>
        </div>
        </footer>
    )
}

export default Footer;