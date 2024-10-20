import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// COMPONENTES (CABEZA Y PIE)

import Header from '../src/components/Header';
import Footer from './components/Footer';

import Home from '../public/pages/Home';
import About from '../public/pages/Nosotros';

// LIBROS CON SUS ARRAYS CON CATEGORIAS.


import Ficcion from '../public/pages/LibCategorias/Ficcion';
import librosFiccion from '../src/lib/librosFiccion';

import NoFiccion from '../public/pages/LibCategorias/NoFiccion';
import librosNoFiccion from '../src/lib/librosNoFiccion';

import Juvenil from '../public/pages/LibCategorias/Juvenil';
import librosJuvenil from '../src/lib/librosJuvenil';

import Clasicos from '../public/pages/LibCategorias/Clasicos';
import librosClasicos from '../src/lib/librosClasicos';

import Infantil from '../public/pages/LibCategorias/Infantil';
import librosInfantil from '../src/lib/librosInfantil';

import ArteCreatividad from '../public/pages/LibCategorias/ArtesCreatividad';
import librosArteCreatividad from '../src/lib/librosArteCreatividad';

import Educativos from '../public/pages/LibCategorias/Educativo';
import librosEducativos from '../src/lib/librosEducativos';

import ComicsManga from '../public/pages/LibCategorias/ComicsManga';
import librosComicsManga from '../src/lib/librosComicMangas';

import Religion from '../public/pages/LibCategorias/Religiosos';
import librosReligionEspiritualidad from '../src/lib/librosReligiosos';

import CulturaSociedad from '../public/pages/LibCategorias/CulturaSociedad';
import librosCulturaSociedad from '../src/lib/librosCulturaSociendad';





import ContactPage from '../public/pages/Contact';
import Carrito from '../src/components/Carrito';


// PAGINA DE USUARIO

import Login from '../public/pages/Auth/Login';
import Register from '../public/pages/Auth/Register';
import Account from '../public/pages/Auth/Account'



// PAGINAS DE BLOG

import HomeBlog from '../public/pages/Blog/HomeBlog';
import LanzaAgos2 from "../public/pages/Blog/SubPagesBlog/LanzaAgos2";
import LanzaSept1 from '../public/pages/Blog/SubPagesBlog/LanzaSepti1';

// PAGINAS DE PRIVACIDAD 

import CookiePolicy from '../public/pages/Privacy/CookiePolicy';
import PrivacyPolicy from '../public/pages/Privacy/PrivacyPolicy';
import ReturnPolicy from '../public/pages/Privacy/ReturnPolicy';
import ShippingPolicy from '../public/pages/Privacy/ShippingPolicy';
import TermsAndConditions from '../public/pages/Privacy/TermsAndConditions';

const App = () => {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/login', '/register'];

  return (
    <>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cuenta" element={<Account />} />
        
        <Route path="/carrito" element={<Carrito />} />
        
        <Route path="/ficcion" element={<Ficcion librosFiccion={librosFiccion} />} />
        <Route path="/noficcion" element={<NoFiccion librosNoFiccion={librosNoFiccion} />} />
        <Route path="/juvenil" element={<Juvenil librosJuvenil={librosJuvenil} />} />
        <Route path="/infantil" element={<Infantil librosInfantil={librosInfantil} />} />
        <Route path="/clasicos" element={<Clasicos librosClasicos={librosClasicos} />} />
        <Route path="/artes-creatividad" element={<ArteCreatividad librosArteCreatividad={librosArteCreatividad} />} />
        <Route path="/educativos" element={<Educativos librosEducativos={librosEducativos} />} />
        <Route path="/comincs-y-manga" element={<ComicsManga librosComicsManga={librosComicsManga} />} />
        <Route path="/religion-y-espiritualidad" element={<Religion librosReligionEspiritualidad={librosReligionEspiritualidad} />} />
        <Route path="/cultura-y-sociedad" element={<CulturaSociedad librosCulturaSociedad={librosCulturaSociedad} />} />


        <Route path="/política-de-cookies" element={<CookiePolicy />} />
        <Route path="/política-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/política-de-devoluciones" element={<ReturnPolicy />} />
        <Route path="/política-de-envío" element={<ShippingPolicy />} />
        <Route path="/términos-y-condiciones" element={<TermsAndConditions />} />
        
        <Route path="/blog" element={<HomeBlog />} />
        <Route path="/blog/lanzaagos2" element={<LanzaAgos2 />} />
        <Route path="/blog/lanzasept1" element={<LanzaSept1 />} />

      </Routes>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};


const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
