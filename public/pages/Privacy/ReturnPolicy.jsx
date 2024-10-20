import '../../css/Privacy/ReturnPolicy.css';

const ReturnPolicy = () => {
    return (
        <div className="return-policy-wrapper">
            <h1 className="return-policy-title">Política de Devoluciones</h1>

            <section className="return-conditions-section">
                <h2 className="return-conditions-title">Condiciones de Devolución</h2>
                <p className="return-conditions-text">
                    En Inkoria Books, ofrecemos un periodo de 30 días para devolver productos adquiridos, siempre que cumplan con las siguientes condiciones:
                </p>
                <ul className="return-conditions-list">
                    <li className="return-conditions-item">El producto debe estar en su estado original, sin usar y con el embalaje intacto.</li>
                    <li className="return-conditions-item">Debe incluir todos los accesorios y documentos que acompañaban al producto.</li>
                    <li className="return-conditions-item">Se requiere una prueba de compra válida (recibo o factura).</li>
                </ul>
                <p className="return-conditions-note">
                    Nota: Los productos en oferta o personalizados no son elegibles para devolución.
                </p>
            </section>

            <section className="return-process-section">
                <h2 className="return-process-title">Proceso de Devolución</h2>
                <p className="return-process-text">
                    Si deseas devolver un producto, sigue estos pasos:
                </p>
                <ol className="return-process-list">
                    <li className="return-process-item">Contáctanos a través de nuestro correo electrónico <a href="mailto:devoluciones@inkoriabooks.com" className="return-process-link">devoluciones@inkoriabooks.com</a> con tu número de pedido.</li>
                    <li className="return-process-item">Empaqueta el producto de manera segura junto con la prueba de compra.</li>
                    <li className="return-process-item">Envía el paquete a la dirección que te proporcionaremos tras recibir tu solicitud de devolución.</li>
                </ol>
                <p className="return-process-note">
                    Ten en cuenta que los gastos de envío para la devolución corren por cuenta del cliente, a menos que el producto haya llegado defectuoso o incorrecto.
                </p>
            </section>

            <section className="return-refunds-section">
                <h2 className="return-refunds-title">Reembolsos</h2>
                <p className="return-refunds-text">
                    Una vez recibido el producto devuelto y verificado su estado, procesaremos el reembolso dentro de un periodo de 7 días hábiles. El reembolso se realizará a través del mismo método de pago utilizado en la compra.
                </p>
                <p className="return-refunds-note">
                    Si el producto no cumple con las condiciones de devolución, nos reservamos el derecho de rechazar el reembolso.
                </p>
            </section>

            <section className="return-exchanges-section">
                <h2 className="return-exchanges-title">Cambios</h2>
                <p className="return-exchanges-text">
                    Actualmente no ofrecemos cambios directos. Si deseas cambiar un producto, deberás devolver el artículo y realizar un nuevo pedido.
                </p>
            </section>

            <section className="return-contact-section">
                <h2 className="return-contact-title">Contacto</h2>
                <p className="return-contact-text">
                    Si tienes alguna duda sobre nuestra política de devoluciones, no dudes en contactarnos en <a href="mailto:soporte@inkoriabooks.com" className="return-contact-link">soporte@inkoriabooks.com</a>.
                </p>
            </section>
        </div>
    );
};

export default ReturnPolicy;
