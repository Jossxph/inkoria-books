import '../../css/Privacy/CookiePolicy.css';

const CookiePolicy = () => {
    return (
        <div className="cookie-policy-wrapper">
            <h1 className="cookie-policy-title">Política de Cookies</h1>

            <section className="cookie-introduction-section">
                <h2 className="cookie-introduction-title">¿Qué son las Cookies?</h2>
                <p className="cookie-introduction-text">
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas permiten que el sitio recuerde información sobre tu visita, como tus preferencias de idioma, elementos en tu carrito de compras o detalles de inicio de sesión. Las cookies hacen que tu experiencia de navegación sea más eficiente y personalizada.
                </p>
            </section>

            <section className="cookie-types-section">
                <h2 className="cookie-types-title">Tipos de Cookies que Usamos</h2>
                <ul className="cookie-types-list">
                    <li className="cookie-type-item">
                        <strong>Cookies Esenciales:</strong> Necesarias para el correcto funcionamiento del sitio. Permiten la navegación y el uso de las funciones básicas, como el acceso a áreas seguras.
                    </li>
                    <li className="cookie-type-item">
                        <strong>Cookies de Rendimiento:</strong> Nos ayudan a mejorar el rendimiento del sitio recopilando datos sobre cómo los usuarios interactúan con las páginas, sin identificar personalmente a los usuarios.
                    </li>
                    <li className="cookie-type-item">
                        <strong>Cookies de Funcionalidad:</strong> Permiten recordar las elecciones que haces (como tu nombre de usuario, idioma o región) y proporcionan características mejoradas y más personalizadas.
                    </li>
                    <li className="cookie-type-item">
                        <strong>Cookies de Publicidad:</strong> Se utilizan para mostrar anuncios más relevantes para ti. Estas cookies pueden rastrear tu actividad en varios sitios web.
                    </li>
                    <li className="cookie-type-item">
                        <strong>Cookies de Terceros:</strong> Algunas cookies son colocadas por servicios externos (como Google Analytics) que utilizamos para mejorar la experiencia del usuario.
                    </li>
                </ul>
            </section>

            <section className="cookie-purpose-section">
                <h2 className="cookie-purpose-title">¿Por Qué Usamos Cookies?</h2>
                <p className="cookie-purpose-text">
                    Utilizamos cookies para mejorar tu experiencia en nuestro sitio, ofrecer contenido personalizado, analizar el tráfico de nuestro sitio web y mejorar su rendimiento. Además, usamos cookies para garantizar la seguridad de nuestros usuarios y para ofrecerte publicidad relevante.
                </p>
                <p className="cookie-purpose-text">
                    Las cookies también nos permiten recopilar estadísticas anónimas sobre el uso del sitio, lo que nos ayuda a mejorar continuamente nuestro contenido y servicios.
                </p>
            </section>

            <section className="cookie-control-section">
                <h2 className="cookie-control-title">Cómo Controlar y Eliminar las Cookies</h2>
                <p className="cookie-control-text">
                    Puedes gestionar el uso de cookies a través de la configuración de tu navegador. La mayoría de los navegadores te permiten bloquear o eliminar cookies, o ser notificado antes de que una cookie sea almacenada en tu dispositivo.
                </p>
                <ul className="cookie-control-options">
                    <li className="cookie-control-item">
                        <strong>Google Chrome:</strong> Ve a Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.
                    </li>
                    <li className="cookie-control-item">
                        <strong>Mozilla Firefox:</strong> Ve a Opciones &gt; Privacidad &gt; Cookies y datos de sitios.
                    </li>
                    <li className="cookie-control-item">
                        <strong>Microsoft Edge:</strong> Ve a Configuración &gt; Privacidad, búsqueda y servicios &gt; Cookies.
                    </li>
                    <li className="cookie-control-item">
                        <strong>Safari:</strong> Ve a Preferencias &gt; Privacidad &gt; Gestionar cookies.
                    </li>
                </ul>
                <p className="cookie-control-text">
                    Para obtener más información sobre cómo gestionar las cookies en diferentes navegadores, consulta <a href="https://www.aboutcookies.org/" className="cookie-control-link" target="_blank" rel="noopener noreferrer">AboutCookies.org</a>.
                </p>
            </section>

            <section className="cookie-consent-section">
                <h2 className="cookie-consent-title">Tu Consentimiento</h2>
                <p className="cookie-consent-text">
                    Al utilizar nuestro sitio web, das tu consentimiento para que coloquemos cookies en tu dispositivo según los términos de esta Política de Cookies. Si deseas retirar tu consentimiento, puedes hacerlo ajustando la configuración de tu navegador o no utilizando nuestro sitio web.
                </p>
            </section>

            <section className="cookie-changes-section">
                <h2 className="cookie-changes-title">Cambios en la Política de Cookies</h2>
                <p className="cookie-changes-text">
                    Podemos actualizar esta Política de Cookies en cualquier momento. Te recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio. La fecha de la última actualización se indica en la parte superior de esta política.
                </p>
            </section>
        </div>
    );
};

export default CookiePolicy;
