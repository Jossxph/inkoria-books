import '../css/home.css';



import librosClasicos from '../../src/lib/librosClasicos';
import librosComicMangas from '../../src/lib/librosComicMangas';

import librosEducativos from '../../src/lib/librosEducativos';
import librosFiccion from '../../src/lib/librosFiccion';

import librosNoFiccion from '../../src/lib/librosNoFiccion';


import Carrusel from '../../src/components/Carrusel';
import CategoriasFu from '../../src/components/Categorias';
import CategoriaPreview from '../../src/components/CategoriaPreview'; // Asegúrate de importar CategoriaPreview

// Mapeo de géneros a rutas
const categoriasRuta = {
  'Ficción': '/ficcion',
  'No Ficción': '/noficcion',
  'Juvenil': '/juvenil',
  'Infantil': '/infantil',
  'Clásicos': '/clasicos',
  'Arte y Creatividad': '/artes-creatividad',
  'Educativos': '/educativos',
  'Comics y Manga': '/comincs-y-manga',
  'Religión y Espiritualidad': '/religion-y-espiritualidad',
  'Cultura y Sociedad': '/cultura-y-sociedad'
};

const Home = () => {
  return (
    <div className="home-page">
      <Carrusel />

      <div className="container-medio">
        <h2>📚 CATEGORIAS DISPONIBLES</h2>
        <CategoriasFu />

        <div className="home-container">
          <h2>📚 VISTA DE LIBROS PREVIA DE CATEGORIAS</h2>
          <CategoriaPreview
            titulo="Ficción"
            libros={librosFiccion}
            enlace={categoriasRuta['Ficción']}
          />

          <CategoriaPreview
            titulo="Clásicos"
            libros={librosClasicos}
            enlace={categoriasRuta['Clásicos']}
          />

          <section className="slider-abjo">
            <img
              src="/src/assets/img/Banners+inkoria/banner4.webp"
              alt=""
            />
          </section>

          <CategoriaPreview
            titulo="Comics y Manga"
            libros={librosComicMangas}
            enlace={categoriasRuta['Comics y Manga']}
          />

          <CategoriaPreview
            titulo="Educativos"
            libros={librosEducativos}
            enlace={categoriasRuta['Educativos']}
          />

          <section className="slider-abjo">
            <img
              src="/src/assets/img/Banners+inkoria/banner5.webp"
              alt=""
            />
          </section>

          <CategoriaPreview
            titulo="No Ficción"
            libros={librosNoFiccion}
            enlace={categoriasRuta['No Ficción']}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
