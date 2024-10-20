import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../public/css/header.css';

// Importar arrays de libros
import librosArteCreatividad from '../lib/librosArteCreatividad';
import librosClasicos from '../lib/librosClasicos';
import librosComicMangas from '../lib/librosComicMangas';
import librosCulturaSociedad from '../lib/librosCulturaSociendad';
import librosEducativos from '../lib/librosEducativos';
import librosFiccion from '../lib/librosFiccion';
import librosInfantil from '../lib/librosInfantil';
import librosJuvenil from '../lib/librosJuvenil';
import librosNoFiccion from '../lib/librosNoFiccion';
import librosReligiosos from '../lib/librosReligiosos';

// Unir todos los arrays de libros en uno solo
const todosLosLibros = [
    ...librosArteCreatividad,
    ...librosClasicos,
    ...librosComicMangas,
    ...librosCulturaSociedad,
    ...librosEducativos,
    ...librosFiccion,
    ...librosInfantil,
    ...librosJuvenil,
    ...librosNoFiccion,
    ...librosReligiosos
];

// Función de búsqueda
function buscarLibros(query) {
    return todosLosLibros.filter((libro) =>
        libro.titulo.toLowerCase().includes(query.toLowerCase()) ||
        libro.autor.toLowerCase().includes(query.toLowerCase()) ||
        libro.isbn.includes(query)
    );
}

const Header = () => {
    const [query, setQuery] = useState('');
    const [resultados, setResultados] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')); // Verificar si hay usuario logueado
        setIsLoggedIn(!!user); // Si hay usuario, cambiar el estado a true
    }, []);

    const manejarCambio = (e) => {
        setQuery(e.target.value);
        setResultados(e.target.value ? buscarLibros(e.target.value) : []);
    };

    const manejarLogout = () => {
        localStorage.removeItem('user'); // Eliminar el usuario del storage
        setIsLoggedIn(false);
        navigate('/login'); // Redirigir al login
    };

    return (
        <header className="container-header">
            {query && (
                <div className="resultados active">
                    <ul>
                        {resultados.map((libro, index) => (
                            <li key={index} onClick={() => navigate(libro.categoria)}>
                                <strong>{libro.titulo}</strong> - {libro.autor} (ISBN: {libro.isbn})
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="navbar">
                <div className="logoprincipal">
                    <a href="/">Inkoria <span>Books</span></a>
                    <p>Los mejores en libros</p>
                </div>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar por título, autor o ISBN"
                        value={query}
                        onChange={manejarCambio}
                    />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                <nav>
                    <ul className="navbargroup">
                        <li><a href="/blog" className="nav-item"><i className="fa-solid fa-book"></i> Blog</a></li>
                        <li><a href="/nosotros" className="nav-item"><i className="fa-solid fa-house"></i> Nosotros</a></li>
                        {isLoggedIn ? (
                            <li><a href="/cuenta" className="nav-item"><i className="fa-solid fa-user"></i> Cuenta</a></li>
                        ) : (
                            <li><a href="/register" className="nav-item"><i className="fa-solid fa-user"></i> Registrarse</a></li>
                        )}
                        <li><a href="/carrito" className="nav-item"><i className="fa-solid fa-cart-shopping"></i> Carrito</a></li>
                        {isLoggedIn && <li><button onClick={manejarLogout} className='button-salir'><i className="fa-solid fa-arrow-right-to-bracket"></i>Salir</button></li>}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
