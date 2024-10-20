import '../css/lanzamientos.css';

const Lanzamientos = () => {
    return (
        <div className="box">
            <main>
                <section>
                    <div className="caja-contenido">
                        <div className="principal">
                            <h1>Novedades de Julio🎉</h1>
                            <img id="1" className="img1" src="../img/5.jpg" alt="imagen de libros para Setiembre" />
                            <p className="parrafo">
                                Por el mes de Julio, hemos seleccionado nuevas y emocionantes historias que merecen ser leídas. Ya sea que estés buscando la próxima gran novela, descubrir la obra de un autor emergente, o mantenerte al tanto de las novedades en tus géneros favoritos, aquí encontrarás lo más destacado de los lanzamientos editoriales recientes.
                            </p>
                        </div>

                        <p className="titulo">El resplandor</p>
                        <img src="../img/julio1.webp" alt="libro" />
                        <div className="parrafo">
                            <p>Sthepen King</p>
                            <p>Drama</p>
                        </div>
                        <p className="parrafo">
                            Jack Torrance, un escritor en apuros y exalcohólico, acepta un trabajo como cuidador de invierno en el aislado Hotel Overlook, llevándose a su esposa Wendy y su hijo Danny. Danny tiene un don psíquico llamado el resplandor, que le permite ver las aterradoras presencias que habitan el hotel. Mientras el invierno avanza, Jack comienza a perder la cordura, influenciado por las fuerzas sobrenaturales del hotel, poniendo en peligro la vida de su familia. La novela explora temas de locura, aislamiento y los horrores internos que pueden desatarse en situaciones extremas.
                        </p>
                        <div className="fecha">
                            <span className="material-symbols-outlined">calendar_today</span>
                            <p>Disponible el 4 de julio</p>
                        </div>

                        <p className="titulo">La magia del orden </p>
                        <img src="../img/julio2.webp" alt="libro" />
                        <div className="parrafo">
                            <p>Marie Kondo</p>
                            <p>Genero</p>
                        </div>
                        <p className="parrafo">
                            Marie Kondo, experta en organización, presenta el método KonMari, una forma revolucionaria de ordenar y deshacerse de lo innecesario en casa y en la vida. El enfoque se basa en conservar solo aquellos objetos que despierten alegría y deshacerse de lo que no lo haga, ayudando a crear espacios organizados y armoniosos. Kondo también toca la importancia emocional del orden, mostrando cómo vivir en un entorno organizado puede generar bienestar y claridad mental.
                        </p>
                        <div className="fecha">
                            <span className="material-symbols-outlined">calendar_today</span>
                            <p>Disponible el 10 de julio</p>
                        </div>

                        <p className="titulo">El hombre en busca de sentido</p>
                        <img src="../img/julio3.webp" alt="libro" />
                        <div className="parrafo">
                            <p>Viktor Frankl</p>
                            <p>Genero</p>
                        </div>
                        <p className="parrafo">
                            Viktor Frankl, psiquiatra y sobreviviente del Holocausto, relata sus experiencias en los campos de concentración nazis, ofreciendo una profunda reflexión sobre la capacidad humana de encontrar sentido en medio del sufrimiento. Frankl desarrolla la logoterapia, una rama de la psicoterapia que sostiene que el principal motor del ser humano es la búsqueda de sentido en la vida. La obra mezcla sus vivencias personales con observaciones filosóficas sobre la resiliencia y la condición humana.
                        </p>
                        <div className="fecha">
                            <span className="material-symbols-outlined">calendar_today</span>
                            <p>Disponible el 20 de julio</p>
                        </div>

                        <p className="titulo">La casa de los espíritus</p>
                        <img src="../img/julio4.webp" alt="libro" />
                        <div className="parrafo">
                            <p>Isabel Allende </p>
                            <p>Genero</p>
                        </div>
                        <p className="parrafo">
                            Esta novela sigue la historia de la familia Trueba a lo largo de varias generaciones, mezclando elementos de lo sobrenatural y lo real. La narrativa gira en torno a Esteban Trueba, un terrateniente patriarcal, y las mujeres de su familia, quienes poseen habilidades psíquicas. A través de una rica mezcla de política, amor, traición y lo mágico, Allende explora la historia de Chile y los efectos de los cambios políticos y sociales en el país. Es una saga familiar que entrelaza lo personal con lo histórico, con un fuerte enfoque en el realismo mágico.
                        </p>
                        <div className="fecha">
                            <span className="material-symbols-outlined">calendar_today</span>
                            <p>Disponible el 22 de julio</p>
                        </div>
                    </div>

                    <div className="espacio-coment">
                        <h3>Comentarios<hr /></h3>
                    </div>

                    <div id="comentario"></div>

                    <div className="caja-comentario">
                        <h3>Regístrate para comentar</h3>
                        <div className="form-coment">
                            <label htmlFor="nombre">Usuario :</label>
                            <input type="text" placeholder="ingresa tu nombre" name="nombre" id="nombre" />
                            <label htmlFor="email">Correo :</label>
                            <input type="email" placeholder="ingresa tu correo" name="email" id="email" autoComplete="email" />
                            <label htmlFor="coment">Escribe tu opinión :</label>
                            <textarea name="coment" id="coment"></textarea>
                            <button id="boton" type="submit">Enviar</button>
                        </div>
                    </div>

                    <h2>Publicaciones <hr /></h2>
                    <div className="caja-post">
                        <div className="post">
                            <a href=""><img src="../img/resena2.jpg" alt="" /></a>
                            <div className="descrip">
                                <a href=""><h2>¿Por qué leer la biblioteca de la medianoche?🌘 </h2></a>
                                <p> La biblioteca de la medianoche (2020) de Matt Haig. Es una novela que sigue a Nora Seed, una mujer que siente que su vida está llena de malas decisiones y arrepentimientos. Cuando llega a un punto de desesperación y se siente sin salida, Nora se encuentra en una misteriosa biblioteca..</p>
                            </div>
                        </div>
                        <div className="post">
                            <a href=""><img src="../img/club-portada.jpg" alt="" /></a>
                            <div className="descrip">
                                <a href="lista2.html"><h2>Club de lectura del mes de Julio📚</h2></a>
                                <p> En este mes de Agosto, hemos seleccionado nuevas y emocionantes historias que merecen ser leídas...</p>
                            </div>
                        </div>
                        <div className="post">
                            <a href=""><img src="../img/recom-portada.jpg" alt="" /></a>
                            <div className="descrip">
                                <a href=""><h2>❤️Recomendaciones de Julio🤍</h2></a>
                                <p>El Alquimista de Paulo Coelho es una novela inspiradora que sigue a Santiago, un joven pastor andaluz que sueña repetidamente con un tesoro escondido en las pirámides de Egipto. Decidido a seguir su sueño, deja su vida en España y emprende un viaje...</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="caja-derecha">
                    <aside className="about">
                        <a href="../pages/about.html"><h2>Nosotros</h2></a>
                        <p>
                            BookStore empezó en el año 2015, un pequeño negocio de libros que surgió de la pasión por compartir historias. Comenzamos con una modesta selección de títulos, desde los clásicos hasta las últimas novedades, pero lo que nos distinguió desde el principio fue nuestro compromiso con cada lector que cruzaba nuestra puerta...
                        </p>
                        <div id="icon">
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                            <a href=""><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </aside>
                    <aside className="submenu">
                        <h2>Post recientes</h2>
                        <a href=""><p>Libros clásicos que deberías leer 📖</p></a>
                        <a href=""><p>Libros imperdibles de ciencia ficción⭐</p></a>
                        <a href=""><p>Las mejores novelas de amor para el verano 💖</p></a>
                        <a href=""><p>Nuevas series de libros para devorar en 2024 📚</p></a>
                        <a href=""><p>Los libros más esperados del año 🌟</p></a>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Lanzamientos;

