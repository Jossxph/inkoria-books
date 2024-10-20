import '../../public/css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Sección Redes Sociales */}
                <div className="footer-section social-media">
                    <div className="footer-logo">
                        <img src="../../src/assets/img/logos/logo-negro.webp" alt="Logo" />
                    </div>
                    <p>Visita nuestras redes</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                {/* Secciones adicionales */}
                <div className="footer-section">
                    <h4>Sobre nosotros</h4>
                    <ul>
                        <li><a href="/nosotros">Nosotros</a></li>
                        <li><a href="/contacto">Contáctanos</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div> 

                <div className="footer-section">
                    <h4>Nuestro Horario</h4>
                    <p>De Lunes a Sábado</p>
                    <p>9 am a 7 pm</p>
                    <p>Domingos de 9 am a 5 pm</p>
                </div>

                <div className="footer-section">
                    <h4>Atención al Cliente</h4>
                    <ul>
                        <li><a href="/política-de-privacidad">Políticas de privacidad</a></li>
                        <li><a href="/política-de-cookies">Políticas de Cookies</a></li>
                        <li><a href="/política-de-devoluciones">Políticas de Devoluciones</a></li>
                        <li><a href="/política-de-envío">Políticas de Envío</a></li>
                        <li><a href="/términos-y-condiciones">Términos y Condiciones</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Inkoria Books. <span>Todos los derechos reservados.</span></p>
            </div>
        </footer>
    );
}

export default Footer;
