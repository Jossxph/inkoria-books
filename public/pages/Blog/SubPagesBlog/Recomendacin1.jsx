import '../../../css/Blog/SubPageBlog/Recomendacion.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

const Recomendacion1 = () => {
    return (
        <div className="box">
            <main>
                <section>
                    <div className="caja-contenido">
                        <div className="principal">
                            <h1>❤️Recomendaciones del mes de Julio🤍</h1>
                            <img className="img1" src="../img/6.jpg" alt="imagen de libros para peques" />
                            <p className="parrafo">
                                La literatura peruana es rica y diversa, abarcando una amplia gama de estilos, épocas y temas que reflejan tanto la historia como la cultura de Perú. Aquí te dejo algunas recomendaciones de libros representativos de la literatura peruana junto con un breve resumen de cada uno:
                            </p>
                        </div>

                        <p className="titulo">Cuzco antiguo - Tierra Natal de los incas 2ED.</p>
                        <img src="../img/recom1.webp" alt="libro" />
                        <p>Autor: Brian S. Bauer</p>

                        <p className="parrafo">
                            En este libro, Brian S. Bauer presenta un panorama completo de la historia de la región de Cuzco, desde el arribo de los primeros cazadores y recolectores (hacia 5000 a.C.) hasta la caida del Estado Inca (1532 d.C.). Basado en más de 35 años de trabajo en la región, y escrito tanto para académicos como para el público en general, el libro es considerado como el mejor resumen del trabajo arqueológico de la tierra natal de los incas.
                        </p>
                        <div className="comprar">
                            <a href="#"><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href="#"><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">Historia del Tahuantinsuyu</p>
                        <img src="../img/recom2.jpg" alt="libro" />
                        <p>Autora: María Rostworowski</p>

                        <p className="parrafo">
                            Historia del Tahuantinsuyu es, probablemente, el libro de historia más leído de los últimos tiempos en el Perú. En su lectura, la autora explica el surgimiento y el apogeo del Estado Inca, así como los principales aspectos organizativos que sirvieron de base para el ejercicio del poder y el funcionamiento de la producción económica.
                        </p>
                        <div className="comprar">
                            <a href="#"><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href="#"><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">La mujer Peruana a través de los siglos</p>
                        <img src="../img/recom4.webp" alt="libro" />
                        <p>Autora: Elvira García y García</p>

                        <p className="parrafo">
                            La historia de las mujeres del Perú cobra vida en este libro monumental escrito por Elvira García y García, una destacada educadora y escritora de principios del siglo XX. A través de testimonios orales, documentos históricos y fuentes impresas, Elvira García y García reconstruye un pasado donde las mujeres son protagonistas.
                        </p>
                        <div className="comprar">
                            <a href="#"><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href="#"><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">Los perros hambrientos</p>
                        <img src="../img/recom3.webp" alt="libro" />
                        <p>Autor: Ciro Alegría</p>

                        <p className="parrafo">
                            En sus páginas late el drama del hombre y la tierra, de la sequía y el hambre, aproximándose al mayor problema del hombre peruano: la propiedad de la tierra, su lucha diaria por vencer la agreste naturaleza y la dificultad de las relaciones humanas.
                        </p>
                        <div className="comprar">
                            <a href="#"><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href="#"><span>Consíguelo ahora</span></a>
                        </div>
                    </div>

                    <div className="espacio-coment">
                        <h3>Comentarios</h3>
                        <hr />
                    </div>

                    <div id="comentario"></div>

                    <div className="caja-comentario">
                        <h3>Regístrate para comentar</h3>
                        <div className="form-coment">
                            <label htmlFor="nombre">Usuario:</label>
                            <input type="text" placeholder="Ingresa tu nombre" name="nombre" id="nombre" />
                            <label htmlFor="email">Correo:</label>
                            <input type="email" placeholder="Ingresa tu correo" name="email" id="email" autoComplete="email" />
                            <label htmlFor="coment">Escribe tu opinión:</label>
                            <textarea name="coment" id="coment"></textarea>
                            <button id="boton" type="submit">Enviar</button>
                        </div>
                    </div>

                    <h2>Publicaciones</h2>
                    <hr />

                    <div className="caja-post">
                        <div className="post">
                            <a href="#"><img src="../img/2.jpg" alt="" /></a>
                            <div className="descrip">
                                <a href="#"><h2>Libros que todo pequeño debe leer🧸</h2></a>
                                <p>
                                    Aquí tienes una lista de libros que pueden ser maravillosos para los niños, estimulando su imaginación, valores y amor por la lectura...
                                </p>
                            </div>
                        </div>

                        <div className="post">
                            <a href="#"><img src="../img/agosto.jpg" alt="" /></a>
                            <div className="descrip">
                                <a href="#"><h2>Los libros más esperados de Agosto✨</h2></a>
                                <p>
                                    En este mes de Agosto, hemos seleccionado nuevas y emocionantes historias que merecen ser leídas...
                                </p>
                            </div>
                        </div>

                        <div className="post">
                            <a href="#"><img src="../img/alquimista2.jpg" alt="" /></a>
                            <div className="descrip">
                                <a href="#"><h2>Reseña de El Alquimista⏳</h2></a>
                                <p>
                                    El Alquimista de Paulo Coelho es una novela inspiradora que sigue a Santiago, un joven pastor andaluz que sueña repetidamente con un tesoro escondido en las pirámides de Egipto...
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
                            BookStore empezó en el año 2015, un pequeño negocio de libros que surgió de la pasión por compartir historias. Comenzamos con una modesta selección de títulos, desde los clásicos hasta las últimas novedades...
                        </p>
                    </aside>

                    <aside className="submenu">
                        <h2>Post recientes</h2>
                        <a href="#"><p>Libros clásicos que deberías leer 📖</p></a>
                        <a href="#"><p>Libros imperdibles de ciencia ficción⭐</p></a>
                        <a href="#"><p>Novedades de Julio🎉</p></a>
                        <a href="#"><p>¿Por qué leer la biblioteca de la medianoche?🌘</p></a>
                        <a href="#"><p>Club de lectura del mes de Julio📚</p></a>
                        <a href="#"><p>❤️Recomendaciones de Julio🤍</p></a>
                    </aside>

                    <aside className="categorias">
                        <h2>Categorías</h2>
                        <a href="#"><p>Novedades</p></a>
                        <a href="#"><p>Próximos lanzamientos</p></a>
                        <a href="#"><p>Clásicos</p></a>
                        <a href="#"><p>Ficción</p></a>
                        <a href="#"><p>Novelas</p></a>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Recomendacion1;
