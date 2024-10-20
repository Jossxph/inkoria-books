
import '../../../css/Blog/SubPageBlog/Recomendacion.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

const Recomendaciones = () => {
    return (
        <div className="box">
            <main>
                <section>
                    <div className="caja-contenido">
                        <div className="principal">
                            <h1>Recomendaciones de libros que representan la literatura Peruana 📚</h1>
                            <img className="img1" src="../img/recomendaciones.jpg" alt="imagen de libros para peques" />
                            <p className="parrafo">
                                La literatura peruana es rica y diversa, abarcando una amplia gama de estilos, épocas y temas que reflejan tanto la historia como la cultura de Perú. Aquí te dejo algunas recomendaciones de libros representativos de la literatura peruana junto con un breve resumen de cada uno:
                            </p>
                        </div>

                        <p className="titulo">El mundo es ancho y ajeno</p>
                        <img src="../img/el mundo.jpg" alt="libro" />
                        <p>Autor: Ciro Alegría</p>

                        <p className="parrafo">
                            Esta novela relata la lucha de una comunidad indígena por preservar sus tierras frente a la opresión de los terratenientes y el gobierno. A través de la historia de Rosendo Maqui, el líder de la comunidad, Alegría expone las injusticias sociales y la resistencia indígena en la sierra peruana. Es una obra clave del indigenismo literario.
                        </p>
                        <div className="comprar">
                            <a href="">
                                <i className="fa-solid fa-book-open-reader"></i>
                            </a>
                            <a href="">
                                <span>Consíguelo ahora</span>
                            </a>
                        </div>

                        <p className="titulo">Aves sin nido</p>
                        <img src="../img/aves.webp" alt="libro" />
                        <p>Autor: Clorinda Matto de Turner</p>

                        <p className="parrafo">
                            Escrita por Clorinda Matto de Turner, la obra expone la explotación y abuso que sufren los indígenas en las comunidades rurales peruanas a manos de las autoridades locales y de la iglesia. La historia se desarrolla en Kíllac, un pequeño pueblo andino, donde los terratenientes y sacerdotes manipulan y oprimen a los indígenas. El matrimonio Marín, los protagonistas de la novela, lucha por ayudar a los indígenas y denunciar las injusticias.
                        </p>
                        <div className="comprar">
                            <a href="">
                                <i className="fa-solid fa-book-open-reader"></i>
                            </a>
                            <a href="">
                                <span>Consíguelo ahora</span>
                            </a>
                        </div>

                        <p className="titulo">La hora azul</p>
                        <img src="../img/lahora.jpeg" alt="libro" />
                        <p>Autor: Alonso Cueto</p>

                        <p className="parrafo">
                            Esta novela contemporánea trata sobre Adrián Ormache, un abogado limeño de clase alta que descubre secretos oscuros sobre el papel de su padre en la guerra interna del Perú durante los años del terrorismo. La historia explora temas como la culpa, el perdón, y las heridas de una sociedad dividida entre la capital y las zonas rurales afectadas por el conflicto armado.
                        </p>
                        <div className="comprar">
                            <a href="">
                                <i className="fa-solid fa-book-open-reader"></i>
                            </a>
                            <a href="">
                                <span>Consíguelo ahora</span>
                            </a>
                        </div>

                        <p className="titulo">Todas las sangres</p>
                        <img src="../img/todaslassangres.webp" alt="libro" />
                        <p>Autor: José María Arguedas</p>

                        <p className="parrafo">
                            La novela se centra en la familia Aragón, propietarios de una gran hacienda, y en el enfrentamiento entre dos hermanos: Fermín, un capitalista que busca modernizar la propiedad explotando sus recursos, y Bruno, quien está más conectado con las tradiciones indígenas. A través de este conflicto, Arguedas retrata la explotación de los indígenas, las tensiones entre la modernización y la tradición, y las desigualdades socioeconómicas que afectan a la población peruana.
                        </p>
                        <div className="comprar">
                            <a href="">
                                <i className="fa-solid fa-book-open-reader"></i>
                            </a>
                            <a href="">
                                <span>Consíguelo ahora</span>
                            </a>
                        </div>
                    </div>

                    <div className="espacio-coment">
                        <h3>Comentarios</h3>
                        <hr />
                    </div>

                    <div id="comentario"></div>

                    <div className="caja-comentario">
                        <h3>Registrate para comentar</h3>
                        <div className="form-coment">
                            <label htmlFor="nombre">Usuario :</label>
                            <input type="text" placeholder="ingresa tú nombre" name="nombre" id="nombre" />
                            <label htmlFor="email">Correo :</label>
                            <input type="email" placeholder="ingresa tu correo" name="email" id="email" autoComplete="email" />
                            <label htmlFor="coment">Escribe tú opinión :</label>
                            <textarea name="coment" id="coment"></textarea>
                            <button id="boton" type="submit">Enviar</button>
                        </div>
                    </div>

                    <h2>Publicaciones</h2>
                    <hr />
                    <div className="caja-post">
                        <div className="post">
                            <a href="">
                                <img src="../img/2.jpg" alt="libro" />
                            </a>
                            <div className="descrip">
                                <a href="">
                                    <h2>Libros que todo pequeño debe leer 🧸</h2>
                                </a>
                                <p>
                                    Aquí tienes una lista de libros que pueden ser maravillosos para los niños, estimulando su imaginación, valores y amor por la lectura...
                                </p>
                            </div>
                        </div>

                        <div className="post">
                            <a href="">
                                <img src="../img/agosto.jpg" alt="libro" />
                            </a>
                            <div className="descrip">
                                <a href="">
                                    <h2>Los libros más esperados de Agosto ✨</h2>
                                </a>
                                <p> En este mes de Agosto, hemos seleccionado nuevas y emocionantes historias que merecen ser leídas...</p>
                            </div>
                        </div>

                        <div className="post">
                            <a href="">
                                <img src="../img/alquimista2.jpg" alt="libro" />
                            </a>
                            <div className="descrip">
                                <a href="">
                                    <h2>Reseña de el Alquimista ⏳</h2>
                                </a>
                                <p>
                                    El Alquimista de Paulo Coelho es una novela inspiradora que sigue a Santiago, un joven pastor andaluz que sueña repetidamente con un tesoro escondido en las pirámides de Egipto. Decidido a seguir su sueño, deja su vida en España y emprende un viaje...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="caja-derecha">
                    <aside className="about">
                        <a href="../pages/about.html">
                            <h2>Nosotros</h2>
                        </a>
                        <p>
                            BookStore empezo en el año 2015, un pequeño negocio de libros que surgió de la pasión por compartir historias. Comenzamos con una modesta selección de títulos, desde los clásicos hasta las últimas novedades, pero lo que nos distinguió desde el principio fue nuestro compromiso con cada lector que cruzaba nuestra puerta...
                        </p>
                        <div id="icon">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </aside>

                    <aside className="submenu">
                        <h2>Post recientes</h2>
                        <a href="#1">
                            <p>🌻¡¡Nuevos lanzamientos de setiembre!!🌼</p>
                        </a>
                        <a href="">
                            <p>Libros que todo pequeño debe leer 🧸</p>
                        </a>
                        <a href="">
                            <p>Reseña de el Alquimista ⏳</p>
                        </a>
                        <a href="">
                            <p>Los libros más esperados de Agosto ✨</p>
                        </a>
                        <a href="">
                            <p>Recomendaciones de literatura peruana 📚</p>
                        </a>
                        <a href="">
                            <p>¿Qué libro debería leer?</p>
                        </a>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Recomendaciones;
