
import "../../../css/Blog/SubPageBlog/Noticias.css";

const Noticias = () => {
  return (
    <div className="caja-contenido">
      <main>
        <section>
          <h1>Club de lectura del mes de Julio📚</h1>
          <div className="tags">
            <a href="#">Novedades</a>
          </div>

          <div className="principal">
            <img className="img1" src="../img/4.jpg" alt="libro" />
            <p className="parrafo">
              ¡Bienvenidos al Club de Lectura! Estamos encantados de que te unas a nosotros en este espacio diseñado
              para los amantes de los libros, las grandes conversaciones y el crecimiento personal a través de la
              lectura. <br />
              Aquí encontrarás un lugar donde las páginas cobran vida, los personajes nos acompañan y los debates nos
              hacen crecer. No importa si eres un ávido lector o alguien que está redescubriendo el amor por los libros,
              todos son bienvenidos. Cada mes exploraremos nuevas historias, debatiremos ideas y, sobre todo,
              disfrutaremos de la magia de la literatura en compañía de personas con el mismo entusiasmo.
            </p>
            <p className="parrafo">
              En nuestro club, cada voz cuenta. Aquí no hay opiniones correctas o incorrectas, solo diferentes
              perspectivas que enriquecerán nuestra experiencia compartida. Ya sea que prefieras los clásicos, las
              novelas contemporáneas, la ciencia ficción o las biografías, este es tu lugar para descubrir, aprender y
              disfrutar del poder de la palabra escrita.
            </p>
            <p className="parrafo">Los libros elegidos para este mes son:</p>

            <h2 className="titulo">
              Le dedico mi silencio <span>de Mario Vargas Llosa</span>
            </h2>
            <img src="../img/club.jpg" alt="libro" className="portada" />
            <h2 className="titulo">
              Rompe la barrera del no <span>de Chris Voss</span>
            </h2>
            <img src="../img/club2.webp" alt="libro" className="portada" />
          </div>

          <p className="parrafo">
            <span>Forma parte de nuestro club:</span> por la compra de uno de nuestros libros seleccionados, podrás
            participar de las sesiones virtuales del club de lectura, además el último día se dará un encuentro
            presencial, ¡no te lo pierdas!
          </p>

          <div className="espacio-coment">
            <h3>
              Comentarios
              <hr />
            </h3>
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
              <button id="boton" type="submit">
                Enviar
              </button>
            </div>
          </div>

          <h2>
            Publicaciones
            <hr />
          </h2>

          <div className="caja-post">
            <div className="post">
              <a href="">
                <img src="../img/resena2.jpg" alt="" />
              </a>
              <div className="descrip">
                <a href="">
                  <h2>¿Por qué leer la biblioteca de la medianoche?🌘</h2>
                </a>
                <p>
                  La biblioteca de la medianoche (2020) de Matt Haig. Es una novela que sigue a Nora Seed, una mujer que
                  siente que su vida está llena de malas decisiones y arrepentimientos. Cuando llega a un punto de
                  desesperación y se siente sin salida, Nora se encuentra en una misteriosa biblioteca...
                </p>
              </div>
            </div>

            <div className="post">
              <a href="">
                <img src="../img/recom-portada.jpg" alt="" />
              </a>
              <div className="descrip">
                <a href="lista2.html">
                  <h2>❤️Recomendaciones de Julio🤍</h2>
                </a>
                <p>En este mes de Agosto, hemos seleccionado nuevas y emocionantes historias que merecen ser leídas...</p>
              </div>
            </div>

            <div className="post">
              <a href="">
                <img src="../img/alquimista2.jpg" alt="" />
              </a>
              <div className="descrip">
                <a href="">
                  <h2>Reseña de el Alquimista⏳</h2>
                </a>
                <p>
                  El Alquimista de Paulo Coelho es una novela inspiradora que sigue a Santiago, un joven pastor andaluz
                  que sueña repetidamente con un tesoro escondido en las pirámides de Egipto. Decidido a seguir su sueño,
                  deja su vida en España y emprende un viaje...
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
              BookStore empezó en el año 2015, un pequeño negocio de libros que surgió de la pasión por compartir
              historias. Comenzamos con una modesta selección de títulos, desde los clásicos hasta las últimas
              novedades, pero lo que nos distinguió desde el principio fue nuestro compromiso con cada lector que cruzaba
              nuestra puerta...
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
              <p>¿Por qué leer la biblioteca de la medianoche?🌘</p>
            </a>
            <a href="">
              <p>Club de lectura del mes de Julio📚</p>
            </a>
            <a href="">
              <p>❤️Recomendaciones de Julio🤍</p>
            </a>
          </aside>

          <aside className="categorias">
            <h2>Categorías</h2>
            <a href="">
              <p>Novedades</p>
            </a>
            <a href="">
              <p>Próximos lanzamientos</p>
            </a>
            <a href="">
              <p>Clásicos</p>
            </a>
            <a href="">
              <p>Ficción</p>
            </a>
            <a href="">
              <p>Novelas</p>
            </a>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Noticias;
