import '../../../css/Blog/SubPageBlog/book-todos.css';

const LanzamientosSetiembre = () => {
    return (
        <div className="blog-container">
            <main className="blog-main-content">
                <section className="blog-content">
                    <article className="blog-article">
                        <div className="blog-header">
                            <h1 className="blog-title">🌻¡¡Nuevos lanzamientos de setiembre!!🌼</h1>
                            <img className="blog-image" src="../../../../src/assets/img/blog/Libros del mes.jpg" alt="imagen de libros para setiembre" />
                            <p className="blog-description">
                                En este mes de la primavera, hemos seleccionado nuevas y emocionantes historias que merecen ser leídas.
                                Ya sea que estés buscando la próxima gran novela para devorar, descubrir la obra de un autor emergente,
                                o mantenerte al tanto de las novedades en tus géneros favoritos, aquí encontrarás lo más destacado de los lanzamientos editoriales recientes.
                            </p>
                        </div>

                        {/* Primer libro */}
                        <div className="book-section">
                            <h2 className="book-title">El perro enamorado de las estrellas</h2>
                            <img className="book-image" src="../../../../src/assets/img/blog/dog.webp" alt="libro" />
                            <div className="book-details">
                                <p><strong>Autor:</strong> Takashi Murakami</p>
                                <p><strong>Género:</strong> Drama</p>
                            </div>
                            <p className="book-description">
                                La historia gira en torno a un perro llamado Happy y su dueño, un hombre que enfrenta una serie de dificultades en la vida.
                                A medida que su situación empeora, ambos se embarcan en un viaje por carretera sin un destino claro. A lo largo del camino,
                                el vínculo entre el hombre y el perro se profundiza, mostrando la lealtad incondicional de Happy, incluso en los momentos más duros.
                                El manga explora temas de soledad, abandono, y el inquebrantable amor entre humanos y animales.
                            </p>
                            <div className="release-date">
                                <i className="fas fa-calendar-alt"></i>
                                <p>Disponible el 14 de setiembre</p>
                            </div>
                        </div>

                        {/* Segundo libro */}
                        <div className="book-section">
                            <h2 className="book-title">Mujercitas</h2>
                            <img className="book-image" src="../../../../src/assets/img/blog/mujercitas.jpeg" alt="libro" />
                            <div className="book-details">
                                <p><strong>Autor:</strong> Louisa May Alcott</p>
                                <p><strong>Género:</strong> Clásico</p>
                            </div>
                            <p className="book-description">
                                Es un clásico de la literatura que sigue la vida de las hermanas March: Meg, Jo, Beth y Amy. La historia está ambientada en la Guerra Civil estadounidense
                                y muestra su transición de la niñez a la adultez, enfrentando desafíos económicos, sociales y personales. El libro explora temas como la familia, el amor,
                                la ambición, el sacrificio y la importancia de los valores.
                            </p>
                            <div className="release-date">
                                <i className="fas fa-calendar-alt"></i>
                                <p>Disponible el 20 de setiembre</p>
                            </div>
                        </div>

                        {/* Tercer libro */}
                        <div className="book-section">
                            <h2 className="book-title">El arte de la quietud en un mundo agitado</h2>
                            <img className="book-image" src="../../../../src/assets/img/blog/el arte de la quietud.jpg" alt="libro" />
                            <div className="book-details">
                                <p><strong>Autor:</strong> Magnus Fridh</p>
                                <p><strong>Género:</strong> Crecimiento personal</p>
                            </div>
                            <p className="book-description">
                                El experto en mindfulness Magnus Fridh nos enseña a través de sencillas prácticas cómo hallar paz en un mundo estresado.
                                Este libro explora cómo, sin necesidad de hacer grandes cambios, podemos encontrar esos momentos de silencio que nos permiten relajarnos,
                                recargar energía y dar sentido a lo que experimentamos, para volver a conectar con nuestra creatividad e inspiración.
                            </p>
                            <div className="release-date">
                                <i className="fas fa-calendar-alt"></i>
                                <p>Disponible el 25 de setiembre</p>
                            </div>
                        </div>

                        {/* Cuarto libro */}
                        <div className="book-section">
                            <h2 className="book-title">El camino del artista</h2>
                            <img className="book-image" src="../../../../src/assets/img/blog/elcamino.webp" alt="libro" />
                            <div className="book-details">
                                <p><strong>Autor:</strong> Julia Cameron</p>
                                <p><strong>Género:</strong> Creatividad</p>
                            </div>
                            <p className="book-description">
                                El camino del artista nos enseña a crear con mayor libertad a través de la utilización consciente de una serie de herramientas
                                que nos ayudarán a terminar con el bloqueo creativo. Gracias a las enseñanzas de Julia Cameron, iniciaremos un camino creativo
                                y espiritual que nos hará remontarnos a nuestra verdadera naturaleza.
                            </p>
                            <div className="release-date">
                                <i className="fas fa-calendar-alt"></i>
                                <p>Disponible el 30 de setiembre</p>
                            </div>
                        </div>

                        {/* Botón para volver al blog */}
                        <div className="back-btn-container">
                            <a href="/blog" className="back-btn">Volver al Blog</a>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default LanzamientosSetiembre;
