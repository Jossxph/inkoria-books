import '../../css/Privacy/ShippingPolicy.css';

const ShippingPolicy = () => {
    return (
        <div className="shipping-policy-wrapper">
            <h1 className="shipping-policy-title">Política de Envíos</h1>

            <section className="shipping-options-section">
                <h2 className="shipping-options-title">Opciones de Envío</h2>
                <p className="shipping-options-text">
                    En Inkoria Books, ofrecemos diversas opciones de envío para adaptarnos a tus necesidades:
                </p>
                <ul className="shipping-options-list">
                    <li className="shipping-options-item">Envío Estándar (5-7 días hábiles)</li>
                    <li className="shipping-options-item">Envío Exprés (2-3 días hábiles)</li>
                    <li className="shipping-options-item">Envío Internacional (7-14 días hábiles)</li>
                </ul>
                <p className="shipping-options-note">
                    Nota: Los tiempos de entrega pueden variar dependiendo de la ubicación y las condiciones logísticas.
                </p>
            </section>

            <section className="shipping-cost-section">
                <h2 className="shipping-cost-title">Costos de Envío</h2>
                <p className="shipping-cost-text">
                    Los costos de envío se calculan en función del peso total del pedido y la ubicación del cliente. Durante el proceso de pago, podrás ver el costo exacto del envío antes de completar la compra.
                </p>
                <ul className="shipping-cost-list">
                    <li className="shipping-cost-item">Envío gratuito en pedidos superiores a $50 (solo en envíos nacionales).</li>
                    <li className="shipping-cost-item">Tarifas con descuento en envíos internacionales para pedidos superiores a $100.</li>
                </ul>
            </section>

            <section className="shipping-time-section">
                <h2 className="shipping-time-title">Tiempos de Procesamiento y Entrega</h2>
                <p className="shipping-time-text">
                    Nos esforzamos por procesar y enviar todos los pedidos dentro de un plazo de 2-3 días hábiles. Los tiempos de entrega pueden variar según la opción de envío seleccionada:
                </p>
                <ul className="shipping-time-list">
                    <li className="shipping-time-item">Envío Estándar: 5-7 días hábiles.</li>
                    <li className="shipping-time-item">Envío Exprés: 2-3 días hábiles.</li>
                    <li className="shipping-time-item">Envío Internacional: 7-14 días hábiles.</li>
                </ul>
                <p className="shipping-time-note">
                    Nota: Los tiempos de entrega no incluyen el tiempo de procesamiento. Durante periodos de alta demanda, como vacaciones, los tiempos de entrega pueden extenderse.
                </p>
            </section>

            <section className="shipping-tracking-section">
                <h2 className="shipping-tracking-title">Seguimiento de Pedidos</h2>
                <p className="shipping-tracking-text">
                    Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con el número de seguimiento para que puedas monitorear su progreso en tiempo real.
                </p>
                <p className="shipping-tracking-note">
                    Si no recibes el número de seguimiento en un plazo de 24 horas tras la confirmación del envío, por favor contáctanos en <a href="mailto:envios@inkoriabooks.com" className="shipping-tracking-link">envios@inkoriabooks.com</a>.
                </p>
            </section>

            <section className="shipping-international-section">
                <h2 className="shipping-international-title">Envíos Internacionales</h2>
                <p className="shipping-international-text">
                    Ofrecemos envíos a la mayoría de los países del mundo. Sin embargo, los clientes internacionales deben tener en cuenta que pueden estar sujetos a impuestos de importación, aranceles o tarifas aduaneras, los cuales son responsabilidad del destinatario.
                </p>
            </section>

            <section className="shipping-contact-section">
                <h2 className="shipping-contact-title">Contacto</h2>
                <p className="shipping-contact-text">
                    Si tienes preguntas sobre nuestra política de envíos, por favor contáctanos en <a href="mailto:soporte@inkoriabooks.com" className="shipping-contact-link">soporte@inkoriabooks.com</a>.
                </p>
            </section>
        </div>
    );
};

export default ShippingPolicy;
