import '../../css/Privacy/TermsAndConditions.css';

const TermsAndConditions = () => {
    return (
        <div className="terms-conditions-wrapper">
            <h1 className="terms-conditions-title">Términos y Condiciones</h1>

            <section className="terms-use-section">
                <h2 className="terms-use-title">Uso del Sitio Web</h2>
                <p className="terms-use-text">
                    Al acceder y utilizar Inkoria Books, aceptas cumplir con los términos y condiciones aquí establecidos. Nos reservamos el derecho de modificar estos términos en cualquier momento, por lo que te recomendamos revisarlos periódicamente.
                </p>
                <ul className="terms-use-list">
                    <li className="terms-use-item">No debes utilizar nuestro sitio con fines ilegales o no autorizados.</li>
                    <li className="terms-use-item">El uso indebido del sitio puede resultar en la suspensión de tu acceso.</li>
                    <li className="terms-use-item">Debes ser mayor de 18 años o contar con el consentimiento de un adulto para realizar compras.</li>
                </ul>
            </section>

            <section className="terms-intellectual-section">
                <h2 className="terms-intellectual-title">Propiedad Intelectual</h2>
                <p className="terms-intellectual-text">
                    Todos los contenidos, incluyendo textos, imágenes, logotipos, gráficos y software disponibles en Inkoria Books, están protegidos por derechos de autor y otras leyes de propiedad intelectual. No está permitido copiar, reproducir o distribuir ningún contenido sin nuestro consentimiento expreso por escrito.
                </p>
            </section>

            <section className="terms-liability-section">
                <h2 className="terms-liability-title">Limitación de Responsabilidad</h2>
                <p className="terms-liability-text">
                    Inkoria Books no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la incapacidad de usar nuestro sitio. Esto incluye, sin limitación, los daños por pérdida de datos, ingresos o beneficios, o cualquier interrupción del negocio.
                </p>
                <p className="terms-liability-note">
                    Los productos vendidos en nuestro sitio se proporcionan tal cual y no ofrecemos garantías más allá de las requeridas por ley.
                </p>
            </section>

            <section className="terms-accounts-section">
                <h2 className="terms-accounts-title">Cuentas y Seguridad</h2>
                <p className="terms-accounts-text">
                    Al crear una cuenta en Inkoria Books, eres responsable de mantener la confidencialidad de tu información de acceso. No seremos responsables de cualquier actividad no autorizada que ocurra en tu cuenta si no proteges adecuadamente tus credenciales.
                </p>
            </section>

            <section className="terms-governing-section">
                <h2 className="terms-governing-title">Ley Aplicable</h2>
                <p className="terms-governing-text">
                    Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de [país/jurisdicción aplicable]. Cualquier disputa que surja en relación con el uso del sitio será sometida a la jurisdicción exclusiva de los tribunales de [país/jurisdicción].
                </p>
            </section>

            <section className="terms-contact-section">
                <h2 className="terms-contact-title">Contacto</h2>
                <p className="terms-contact-text">
                    Si tienes alguna pregunta sobre nuestros términos y condiciones, no dudes en contactarnos en <a href="mailto:soporte@inkoriabooks.com" className="terms-contact-link">soporte@inkoriabooks.com</a>.
                </p>
            </section>
        </div>
    );
};

export default TermsAndConditions;
