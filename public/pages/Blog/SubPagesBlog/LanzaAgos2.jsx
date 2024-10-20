import '../../../css/Blog/SubPageBlog/LanzaAgos2.css';

const LanzaAgos2 = () => {
    return (
        <div className="lanzaagos2-container">
            <main className="lanzaagos2-main">
                <section className="lanzaagos2-content">
                    <div className="lanzaagos2-header">
                        <h1>Los libros más esperados de Agosto✨</h1>
                        <img id="1" className="lanzaagos2-img" src="../../../../src/assets/img/blog/agosto.jpg" alt="imagen de libros para agosto" />
                        <p className="lanzaagos2-text">
                            En este mes de Agosto, hemos seleccionado nuevas y emocionantes historias que merecen ser leídas. Ya sea que estés buscando la próxima gran novela para devorar, descubrir la obra de un autor emergente, o mantenerte al tanto de las novedades en tus géneros favoritos, aquí encontrarás lo más destacado de los lanzamientos editoriales recientes.
                        </p>
                    </div>

                    {/* Primer libro */}
                    <article className="lanzaagos2-book">
                        <h2 className="lanzaagos2-title">En agosto nos vemos</h2>
                        <img className="lanzaagos2-cover" src="../../../../src/assets/img/blog/en-agosto-nos-vemos.jpg" alt="libro" />
                        <p className="lanzaagos2-author"><strong>Autor:</strong> Gabriel García Márquez</p>
                        <p className="lanzaagos2-genre"><strong>Género:</strong> Novela</p>
                        <p className="lanzaagos2-description">
                            En agosto nos vemos es una novela póstuma e incompleta de Gabriel García Márquez. La historia sigue a Ana Magdalena Bach, una mujer de mediana edad que cada año viaja a la tumba de su madre en una isla tropical, en el aniversario de su muerte. Esas visitas acaban suponiendo una irresistible invitación a convertirse en una persona distinta durante una noche al año.
                        </p>
                        <div className="lanzaagos2-date">
                            <i className="fas fa-calendar-alt"></i>
                            <p>Disponible el 4 de agosto</p>
                        </div>
                    </article>

                    {/* Segundo libro */}
                    <article className="lanzaagos2-book">
                        <h2 className="lanzaagos2-title">Ikigai</h2>
                        <img className="lanzaagos2-cover" src="../../../../src/assets/img/blog/ikigai1.jpg" alt="libro" />
                        <p className="lanzaagos2-author"><strong>Autores:</strong> Francesc Miralles y Héctor García</p>
                        <p className="lanzaagos2-genre"><strong>Género:</strong> Crecimiento personal</p>
                        <p className="lanzaagos2-description">
                            Ikigai explora el concepto japonés de ikigai, que se traduce como la razón de ser. A través de ejemplos de los habitantes de Okinawa, los autores muestran cómo encontrar propósito en la vida puede ser clave para alcanzar bienestar y felicidad.
                        </p>
                        <div className="lanzaagos2-date">
                            <i className="fas fa-calendar-alt"></i>
                            <p>Disponible el 12 de agosto</p>
                        </div>
                    </article>

                    {/* Botón para volver al blog */}
                    <div className="lanzaagos2-back-btn-container">
                        <a href="/blog" className="lanzaagos2-back-btn">Volver al Blog</a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LanzaAgos2;
