
import '../../../css/Blog/SubPageBlog/Lista.css'; // Importa tus estilos

const ListaLibros4= () => {
    return (
        <div>
            <main>
                <section>
                    <div className="caja-contenido">
                        <div className="principal">
                            <h1>Libros imperdibles de ciencia ficción⭐</h1>
                            <img id="img1" src="../img/portada-2.jpg" alt="imagen de libros" />
                            <p className="parrafo">
                                La ciencia ficción nos lleva a mundos y futuros imaginarios, nos
                                permite pensar más allá de lo que conocemos y expandir nuestros
                                horizontes. Te desafía a imaginar cómo podría ser el futuro de
                                la humanidad, la tecnología, otros planetas, o cómo enfrentaríamos
                                realidades desconocidas.
                            </p>
                        </div>

                        <p className="titulo">
                            El juego de Ender <span> de Fiódor Dostoyevski</span>
                        </p>
                        <img src="../img/ciencia4.webp" alt="libro" />
                        <p className="parrafo">
                            La historia sigue a Ender Wiggin, un niño prodigio que es entrenado
                            para liderar una flota en la lucha contra una raza alienígena
                            llamada los insectores. La novela aborda la manipulación, la
                            moralidad en tiempos de guerra y las consecuencias psicológicas de
                            convertir a un niño en un comandante militar. Es conocida tanto
                            por su intrincada estrategia bélica como por su profundo análisis
                            emocional.
                        </p>
                        <div className="comprar">
                            <a href="">
                                <i className="fa-solid fa-book-open-reader"></i>
                            </a>
                            <a href="">
                                <span>Consíguelo ahora</span>
                            </a>
                        </div>

                        <p className="titulo">
                            Solaris <span>de Stanislaw Lem</span>
                        </p>
                        <img src="../img/ciencia3.jpg" alt="libro" />
                        <p className="parrafo">
                            Este clásico de la literatura española narra las aventuras del
                            caballero Don Quijote, un hombre que, obsesionado con las novelas
                            de caballería, decide convertirse en caballero andante. Junto a su
                            fiel escudero, Sancho Panza, Don Quijote enfrenta múltiples
                            aventuras cómicas y conmovedoras, mientras lucha por imponer su
                            visión idealista de la realidad en un mundo que no lo comprende.
                        </p>
                        <div className="comprar">
                            <a href="">
                                <i className="fa-solid fa-book-open-reader"></i>
                            </a>
                            <a href="">
                                <span>Consíguelo ahora</span>
                            </a>
                        </div>

                        <p className="titulo">
                            Un mundo feliz <span>de Aldous Huxley</span>
                        </p>
                        <img src="../img/ciencia2.webp" alt="libro" />
                        <p className="parrafo">
                            Ambientada en un futuro distópico, la novela describe una sociedad
                            aparentemente perfecta donde los humanos son condicionados
                            genéticamente, las emociones son controladas y el placer se
                            antepone a todo. Sin embargo, la historia revela la alienación y
                            la falta de libertad individual en una sociedad que ha sacrificado
                            el libre albedrío por la estabilidad.
                        </p>
                        <div className="comprar">
                            <a href="">
                                <i className="fa-solid fa-book-open-reader"></i>
                            </a>
                            <a href="">
                                <span>Consíguelo ahora</span>
                            </a>
                        </div>

                        <p className="titulo">
                            Dune <span>de Frank Herbert</span>
                        </p>
                        <img src="../img/ciencia.webp" alt="libro" />
                        <p className="parrafo">
                            Ambientada en el lejano futuro, la novela sigue la vida de Paul
                            Atreides, un joven noble cuyo destino está ligado al desértico
                            planeta Arrakis, la única fuente de la especia melange, la
                            sustancia más valiosa del universo. Dune explora temas como el
                            poder, la religión, la ecología y el destino, en un complejo mundo
                            lleno de intriga política, profecías y rebeliones.
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
                        <h3>
                            Comentarios
                            <hr />
                        </h3>
                    </div>

                    <div id="comentario"></div>

                    <div className="caja-comentario">
                        <h3>Registrate para comentar</h3>
                        <div className="form-coment">
                            <label htmlFor="nombre">Usuario :</label>
                            <input
                                type="text"
                                placeholder="ingresa tú nombre"
                                name="nombre"
                                id="nombre"
                            />
                            <label htmlFor="email">Correo :</label>
                            <input
                                type="email"
                                placeholder="ingresa tu correo"
                                name="email"
                                id="email"
                                autoComplete="email"
                            />
                            <label htmlFor="coment">Escribe tú opinión :</label>
                            <textarea name="coment" id="coment"></textarea>
                            <button id="boton" type="submit">
                                Enviar
                            </button>
                        </div>
                    </div>

                    <h2>
                        Publicaciones <hr />
                    </h2>
                    <div className="caja-post">
                        <div className="post">
                            <a href="">
                                <img src="../img/agosto.jpg" alt="" />
                            </a>
                            <div className="descrip">
                                <a href="lista2.html">
                                    <h2>Novedades de Julio🎉</h2>
                                </a>
                                <p>
                                    Por el mes de Julio, hemos seleccionado nuevas y emocionantes
                                    historias que merecen ser leídas. Ya sea que estés buscando la
                                    próxima gran novela para devorar, descubrir la obra de un
                                    autor emergente, o mantenerte al tanto de las novedades en tus
                                    géneros favoritos...
                                </p>
                            </div>
                        </div>

                        <div className="post">
                            <a href="">
                                <img src="../img/alquimista2.jpg" alt="" />
                            </a>
                            <div className="descrip">
                                <a href="">
                                    <h2>¿Por qué leer la biblioteca de la medianoche?🌘</h2>
                                </a>
                                <p>
                                    La biblioteca de la medianoche (2020) de Matt Haig. Es una
                                    novela que sigue a Nora Seed, una mujer que siente que su vida
                                    está llena de malas decisiones y arrepentimientos...
                                </p>
                            </div>
                        </div>

                        <div className="post">
                            <a href="">
                                <img src="../img/2.jpg" alt="" />
                            </a>
                            <div className="descrip">
                                <a href="">
                                    <h2>Club de lectura del mes de Julio📚</h2>
                                </a>
                                <p>
                                    La ciencia ficción nos lleva a mundos y futuros imaginarios,
                                    nos permite pensar más allá de lo que conocemos y expandir
                                    nuestros horizontes. Te desafía a imaginar cómo podría ser el
                                    futuro ...
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
                            BookStore empezo en el año 2015, un pequeño negocio de libros que
                            surgió de la pasión por compartir historias. Comenzamos con una
                            modesta selección de títulos, desde los clásicos hasta las últimas
                            novedades, pero lo que nos distinguió desde el principio fue
                            nuestro compromiso con cada lector que cruzaba nuestra puerta...
                        </p>
                        <div id="icon">
                            <a href="">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </aside>

                    <aside className="submenu">
                        <h2>Post recientes</h2>
                        <a href="">
                            <p>Libros clásicos que deberías leer 📖</p>
                        </a>
                        <a href="">
                            <p>Libros imperdibles de ciencia ficción⭐</p>
                        </a>
                        <a href="">
                            <p>Novedades de Julio🎉</p>
                        </a>
                        <a href="">
                            <p>Club de lectura del mes de Julio📚</p>
                        </a>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default ListaLibros4;
