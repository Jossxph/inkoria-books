// src/pages/ContactPage.jsx
import ContactForm from '../../src/components/ContactForm'; 
import '../css/contac.css'; 

const ContactPage = () => {
    return (
        <div className='container-contac'>
            <header className='header-contact'>
                <div className="hero">
                    <h1>Inkoria Books - Contáctanos</h1>
                    <p>Estamos aquí para ayudarte a encontrar el libro perfecto</p>
                </div>
            </header>

            <main className='main-contact'>
                <section id="contact-info">
                    <h2>Información de Contacto</h2>
                    <div className="info-box">
                        <div className="info-item">
                            <i className="fas fa-phone-alt"></i>
                            <p><strong>Teléfono:</strong> +51 983 589 679</p>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <p><strong>Email:</strong> support@inkoriabooks.com</p>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <p><strong>Horario:</strong> Lunes a Sábado 9 AM - 7 PM</p>
                        </div>
                    </div>
                </section>

                <section id="contact-form">
                    <h2>Envíanos un Mensaje</h2>
                    <ContactForm /> 
                </section>

                <section id="map">
                    <h2>Ubicación de nuestra tienda</h2>
                    <div id="map-container" style={{ width: '100%', height: '450px', margin: '0 auto' }}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.4570568991937!2d-77.00587647343966!3d-11.98044459409079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5639b5e5631%3A0x92e4873e7f233e35!2sCIBERTEC-%20Sede%20San%20Juan%20de%20Lurigancho!5e0!3m2!1ses-419!2spe!4v1729218138074!5m2!1ses-419!2spe" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
