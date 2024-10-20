import '../../css/Privacy/PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-wrapper">
            <h1 className="privacy-policy-title">Política de Privacidad</h1>

            <section className="privacy-introduction-section">
                <h2 className="privacy-introduction-title">Introducción</h2>
                <p className="privacy-introduction-text">
                    En Inkoria Books, tu privacidad es una prioridad. Esta política de privacidad describe cómo recopilamos, usamos y protegemos tu información personal cuando visitas nuestro sitio web o realizas compras en nuestra tienda en línea.
                </p>
            </section>

            <section className="privacy-data-collection-section">
                <h2 className="privacy-data-collection-title">Recolección de Datos</h2>
                <p className="privacy-data-collection-text">
                    Recopilamos información personal como tu nombre, dirección de envío, correo electrónico, número de teléfono y métodos de pago para procesar tus pedidos de manera eficiente. Además, podemos recolectar datos sobre tu navegación en nuestro sitio web mediante cookies y otras tecnologías para mejorar tu experiencia de usuario.
                </p>
                <ul className="privacy-data-collection-list">
                    <li className="privacy-data-collection-item">Información de contacto (nombre, dirección, correo electrónico).</li>
                    <li className="privacy-data-collection-item">Información de pago (número de tarjeta, métodos de pago).</li>
                    <li className="privacy-data-collection-item">Historial de compras y preferencias.</li>
                    <li className="privacy-data-collection-item">Datos de navegación (cookies, dirección IP).</li>
                </ul>
            </section>

            <section className="privacy-data-usage-section">
                <h2 className="privacy-data-usage-title">Uso de la Información</h2>
                <p className="privacy-data-usage-text">
                    Usamos la información que recolectamos para los siguientes propósitos:
                </p>
                <ul className="privacy-data-usage-list">
                    <li className="privacy-data-usage-item">Procesar y completar tus pedidos.</li>
                    <li className="privacy-data-usage-item">Brindar soporte al cliente y gestionar devoluciones.</li>
                    <li className="privacy-data-usage-item">Personalizar tu experiencia en nuestro sitio web.</li>
                    <li className="privacy-data-usage-item">Mejorar nuestros productos y servicios basados en tus comentarios y preferencias.</li>
                    <li className="privacy-data-usage-item">Cumplir con obligaciones legales y fiscales.</li>
                </ul>
            </section>

            <section className="privacy-security-section">
                <h2 className="privacy-security-title">Seguridad</h2>
                <p className="privacy-security-text">
                    Nos comprometemos a proteger tus datos. Implementamos medidas de seguridad avanzadas, como el cifrado SSL, para garantizar que tu información esté protegida en todo momento. Sin embargo, es importante recordar que ninguna transmisión de datos por Internet es completamente segura.
                </p>
            </section>

            <section className="privacy-third-parties-section">
                <h2 className="privacy-third-parties-title">Compartición con Terceros</h2>
                <p className="privacy-third-parties-text">
                    No vendemos ni compartimos tu información personal con terceros, excepto cuando sea necesario para completar tu transacción o cumplir con obligaciones legales. Los proveedores de servicios de pago, compañías de envíos y plataformas de análisis web que utilizamos también están sujetos a estrictas políticas de privacidad.
                </p>
            </section>

            <section className="privacy-rights-section">
                <h2 className="privacy-rights-title">Tus Derechos</h2>
                <p className="privacy-rights-text">
                    Tienes el derecho de acceder, corregir o eliminar tu información personal en cualquier momento. Si deseas ejercer alguno de estos derechos, puedes ponerte en contacto con nuestro equipo de soporte a través de <a href="mailto:support@inkoriabooks.com" className="privacy-rights-link">support@inkoriabooks.com</a>.
                </p>
            </section>

            <section className="privacy-changes-section">
                <h2 className="privacy-changes-title">Cambios en la Política de Privacidad</h2>
                <p className="privacy-changes-text">
                    Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te notificaremos cualquier cambio importante por correo electrónico o mediante una notificación en nuestro sitio web.
                </p>
                <p className="privacy-changes-text">
                    Fecha de la última actualización: 18 de octubre de 2024.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
