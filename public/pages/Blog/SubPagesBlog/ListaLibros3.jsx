import '../../../css/Blog/SubPageBlog/Lista.css'; // Importa tus estilos

const ListaLibros3 = () => {
    return (
        <div>
            <main>
                <section>
                    <div className="caja-contenido">
                        <div className="principal">
                            <h1>Libros clásicos que deberías leer 📖</h1>
                            <img id="img1" src="../img/Yeseva One.jpg" alt="imagen de libros" />
                            <p className="parrafo">
                                Los clásicos han perdurado a lo largo de los siglos porque siguen ofreciendo algo valioso a los lectores.
                                Son historias que han resistido el paso del tiempo y han sido reconocidas por generaciones de lectores.
                                Leerlos te conecta con una tradición literaria que ha impactado a millones de personas en todo el mundo.
                            </p>
                        </div>

                        <p className="titulo">Crimen y castigo <span>de Fiódor Dostoyevski</span></p>
                        <img src="../img/libro6.webp" alt="libro" />
                        <p>Autor: Fiódor Dostoyevski</p>
                        <p className="parrafo">
                            Raskólnikov, un estudiante empobrecido de San Petersburgo, asesina a una anciana usurera con la creencia de
                            que el fin justifica los medios. Sin embargo, tras el crimen, es atormentado por la culpa y el remordimiento.
                            La novela explora temas profundos como la moralidad, la justicia y el impacto psicológico de la culpabilidad.
                        </p>
                        <div className="comprar">
                            <a href="#"><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href="#"><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">Don Quijote de la Mancha <span>de Miguel de Cervantes</span></p>
                        <img src="../img/libro7.webp" alt="libro" />
                        <p>Autor: Miguel de Cervantes</p>
                        <p className="parrafo">
                            Este clásico de la literatura española narra las aventuras del caballero Don Quijote, un hombre que,
                            obsesionado con las novelas de caballería, decide convertirse en caballero andante. Junto a su fiel escudero,
                            Sancho Panza, Don Quijote enfrenta múltiples aventuras cómicas y conmovedoras, mientras lucha por imponer su
                            visión idealista de la realidad en un mundo que no lo comprende.
                        </p>
                        <div className="comprar">
                            <a href="#"><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href="#"><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">Orgullo y prejuicio <span>de Jane Austen</span></p>
                        <img src="../img/orgullo.webp" alt="libro" />
                        <p>Autor: Jane Austen</p>
                        <p className="parrafo">
                            La historia sigue a Elizabeth Bennet, una joven inteligente y vivaz, y su relación con el misterioso y
                            orgulloso señor Darcy. A lo largo de la novela, Austen explora temas como el orgullo, el prejuicio, la
                            diferencia de clases sociales y los roles de género en la Inglaterra del siglo XIX, enmarcados en una
                            brillante historia de amor y malentendidos.
                        </p>
                        <div className="comprar">
                            <a href="#"><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href="#"><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">Los Miserables <span>de Victor Hugo</span></p>
                        <img src="../img/losmiserables.jpg" alt="libro" />
                        <p>Autor: Victor Hugo</p>
                        <p className="parrafo">
                            La novela sigue la vida de Jean Valjean, un exconvicto que intenta redimirse y escapar de la persecución
                            implacable del inspector Javert. Ambientada en la Francia post-revolucionaria, la obra aborda temas como la
                            justicia, la moral, la redención, la pobreza y el poder de la compasión.
                        </p>
                        <div className="comprar">
                            <a href="#"><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href="#"><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">Las penas del joven Werther <span>de Johann Wolfgang von Goethe</span></p>
                        <img src="../img/libro9.webp" alt="libro" />
                        <p>Autor: Johann Wolfgang von Goethe</p>
                        <p className="parrafo">
                            La novela sigue la vida de Jean Valjean, un exconvicto que intenta redimirse y escapar de la persecución
                            implacable del inspector Javert. Ambientada en la Francia post-revolucionaria, la obra aborda temas como la
                            justicia, la moral, la redención, la pobreza y el poder de la compasión.
                        </p>
                        <div className="comprar">
                            <a href="#"><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href="#"><span>Consíguelo ahora</span></a>
                        </div>
                    </div>

                    <div className="espacio-coment">
                        <h3>Comentarios<hr /></h3>
                    </div>

                    <div id="comentario"></div>

                    <div className="caja-comentario">
                        <h3>Registrate para comentar</h3>
                        <div className="form-coment">
                            <label htmlFor="nombre">Usuario :</label>
                            <input type="text" placeholder="ingresa tú nombre" name="nombre" id="nombre" />
                            <label htmlFor="email">Correo :</label>
                            <input type="email" placeholder="ingresa tu correo" name="email" id="email" autoComplete="email" />
                            <label htmlFor="coment">Escribe tu opinión :</label>
                            <textarea name="coment" id="coment"></textarea>
                            <button id="boton" type="submit">Enviar</button>
                        </div>
                    </div>

                    <h2>Publicaciones<hr /></h2>

                    <div className="caja-post">
                        <div className="post">
                            <a href="#"><img src="../img/2.jpg" alt="" /></a>
                            <div className="descrip">
                                <a href="#">
                                    <h2>Libros imperdibles de ciencia ficción⭐</h2>
                                </a>
                                <p>La ciencia ficción nos lleva a mundos y futuros imaginarios, nos permite pensar más allá de lo que conocemos y expandir nuestros horizontes...</p>
                            </div>
                        </div>

                        <div className="post">
                            <a href="#"><img src="../img/agosto.jpg" alt="" /></a>
                            <div className="descrip">
                                <a href="lista2.html">
                                    <h2>Novedades de Julio🎉</h2>
                                </a>
                                <p>Por el mes de Julio, hemos seleccionado nuevas y emocionantes historias que merecen ser leídas...</p>
                            </div>
                        </div>

                        <div className="post">
                            <a href="#"><img src="../img/alquimista2.jpg" alt="" /></a>
                            <div className="descrip">
                                <a href="#">
                                    <h2>¿Por qué leer la biblioteca de la medianoche?🌘</h2>
                                </a>
                                <p>La biblioteca de la medianoche (2020) de Matt Haig es una novela que sigue a Nora Seed...</p>
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
                            BookStore empezó en el año 2015, un pequeño negocio de libros que surgió de la pasión por compartir
                            historias. Comenzamos con una modesta selección de títulos...
                        </p>
                        <div id="icon">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </aside>

                    <aside className="submenu">
                        <h2>Post recientes</h2>
                        <a href="#"><p>Libros clásicos que deberías leer 📖</p></a>
                        <a href="#"><p>Libros imperdibles de ciencia ficción⭐</p></a>
                        <a href="#"><p>Novedades de Julio🎉</p></a>
                        <a href="#"><p>¿Por qué leer la biblioteca de la medianoche?🌘</p></a>
                    </aside>
                </div>
            </main>
        </div>
    );
}

export default ListaLibros3;
