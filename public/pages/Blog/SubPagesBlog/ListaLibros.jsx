import '../../../css/Blog/SubPageBlog/Lista.css'; // Importa tus estilos
import img1 from '../img/2.jpg'; // Importa imágenes locales
import principito from '../img/principito.jpg';
import adivina from '../img/adivina.webp';
import enciclopedia from '../img/enciplopedia.jpg';
import matilda from '../img/matilda.jpg';

const ListaLibros = () => {
    return (
        <div className='box-container-lista'>
            <main>
                <section>
                    <div className="caja-contenido">
                        <div className="principal">
                            <h1>Libros que todo pequeño debe leer🧸</h1>
                            <img id="img1" src={img1} alt="imagen de libros para peques" />
                            <p className="parrafo">
                                Aquí tienes una lista de libros que pueden ser maravillosos para los niños, estimulando su
                                imaginación, valores y amor por la lectura:
                            </p>
                        </div>

                        <p className="titulo">El principito <span>de Antoine de Saint-Exupéry</span></p>
                        <img src={principito} alt="libro" />
                        <p>Autor: Antoine de Saint-Exupéry</p>

                        <p className="parrafo">
                            Es una historia mágica y profundamente conmovedora que invita a reflexionar sobre las cosas más importantes
                            de la vida: el amor, la amistad, y la inocencia. A través de los ojos de un niño que viaja de planeta en
                            planeta, conocemos personajes curiosos y situaciones que revelan verdades universales sobre el mundo de los
                            adultos, el poder de las emociones y la importancia de lo invisible.
                        </p>
                        <div className="comprar">
                            <a href=""><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href=""><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">Adivina cuánto te quiero <span>de Sam Mcbratney</span></p>
                        <img src={adivina} alt="libro" />
                        <p>Autor: Sam Mcbratney</p>

                        <p className="parrafo">
                            Es una dulce y encantadora historia sobre el amor incondicional entre una pequeña liebre y su padre. En el
                            relato, la pequeña liebre intenta expresar cuánto ama a su papá, usando comparaciones que crecen más y más:
                            Te quiero hasta la luna. Sin embargo, su papá, siempre un paso adelante, responde con una expresión aún
                            más grande de amor.
                        </p>
                        <div className="comprar">
                            <a href=""><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href=""><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">Mi pequeña enciclopedia <span>de Eric Carle</span></p>
                        <img src={enciclopedia} alt="libro" />
                        <p>Autor: Eric Carle</p>

                        <p className="parrafo">
                            Es una versión expandida del clásico infantil, La oruga muy hambrienta de Eric Carle, donde los niños no
                            solo disfrutan de la historia, sino que también aprenden sobre el mundo natural. A lo largo de las páginas,
                            los pequeños lectores acompañan a la oruga mientras se alimenta y crece, descubriendo datos fascinantes
                            sobre insectos, mariposas y la naturaleza en general.
                        </p>
                        <div className="comprar">
                            <a href=""><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href=""><span>Consíguelo ahora</span></a>
                        </div>

                        <p className="titulo">Matilda <span>de Roald Dahl</span></p>
                        <img src={matilda} alt="libro" />
                        <p>Autor: Roald Dahl</p>

                        <p className="parrafo">
                            Es una historia fascinante sobre una niña extraordinariamente inteligente y valiente que usa su ingenio
                            para superar las dificultades. Aunque crece en una familia que no valora su amor por los libros y el
                            conocimiento, Matilda encuentra consuelo en la lectura y en su dulce maestra, la señorita Honey. Pero
                            también deberá enfrentarse a la terrible directora Trunchbull, una figura autoritaria y cruel.
                        </p>
                        <div className="comprar">
                            <a href=""><i className="fa-solid fa-book-open-reader"></i></a>
                            <a href=""><span>Consíguelo ahora</span></a>
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
                            <label htmlFor="nombre">Usuario :</label>
                            <input type="text" placeholder="Ingresa tu nombre" name="nombre" id="nombre" />
                            <label htmlFor="email">Correo :</label>
                            <input type="email" placeholder="Ingresa tu correo" name="email" id="email" autoComplete="email" />
                            <label htmlFor="coment">Escribe tu opinión :</label>
                            <textarea name="coment" id="coment"></textarea>
                            <button id="boton" type="submit">Enviar</button>
                        </div>
                    </div>

                    <h2>Publicaciones</h2>
                    <hr />

                    <div className="caja-post">
                        <div className="post">
                            <a href=""><img src={img1} alt="libro" /></a>
                            <div className="descrip">
                                <a href=""><h2>Libros que todo pequeño debe leer🧸</h2></a>
                                <p>Aquí tienes una lista de libros que pueden ser maravillosos para los niños, estimulando su
                                    imaginación, valores y amor por la lectura...</p>
                            </div>
                        </div>

                        <div className="post">
                            <a href=""><img src={adivina} alt="libro" /></a>
                            <div className="descrip">
                                <a href="lista2.html"><h2>Los libros más esperados de Agosto✨</h2></a>
                                <p>En este mes de Agosto, hemos seleccionado nuevas y emocionantes historias que merecen ser leídas...</p>
                            </div>
                        </div>

                        <div className="post">
                            <a href=""><img src={enciclopedia} alt="libro" /></a>
                            <div className="descrip">
                                <a href=""><h2>Reseña de El Alquimista⏳</h2></a>
                                <p>El Alquimista de Paulo Coelho es una novela inspiradora que sigue a Santiago...</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="caja-derecha">
                    <aside className="about">
                        <a href="../pages/about.html"><h2>Nosotros</h2></a>
                        <p>BookStore empezó en el año 2015, un pequeño negocio de libros que surgió de la pasión por compartir
                            historias. Comenzamos con una modesta selección de títulos, pero lo que nos distinguió fue nuestro
                            compromiso con cada lector...</p>
                        <div id="icon">
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </aside>

                    <aside className="submenu">
                        <h2>Post recientes</h2>
                        <a href="#1"><p>🌻¡¡Nuevos lanzamientos de septiembre!!🌼</p></a>
                        <a href=""><p>Libros que todo pequeño debe leer🧸</p></a>
                        <a href=""><p>Reseña de El Alquimista⏳</p></a>
                        <a href=""><p>Los libros más esperados de Agosto✨</p></a>
                        <a href=""><p>Reseña de Anna la de Tejas Verdes💚</p></a>
                    </aside>

                    <aside className="categorias">
                        <h2>Categorías</h2>
                        <a href=""><p>Novedades</p></a>
                        <a href=""><p>Próximos lanzamientos</p></a>
                        <a href=""><p>Libros infantiles</p></a>
                        <a href=""><p>Best-sellers</p></a>
                        <a href=""><p>Libros clásicos</p></a>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default ListaLibros;
