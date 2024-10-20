import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../public/css/categoriaPrevie.css'

const CategoriaPreview = ({ titulo, libros, enlace }) => {
    // Mostrar solo 3 libros por categoría
    const librosAMostrar = libros.slice(0, 6);

    return (
        <section className="categoria-section">
            <div className="header-section">
                <h3>{titulo}</h3>
                <Link to={enlace} className="ver-todos-btn">
                    Ver todos los libros
                </Link>
            </div>
            <div className="libros-grid">
                {librosAMostrar.map((libro, index) => (
                    <div key={index} className="libro-card">
                        <img src={libro.portada} alt={libro.titulo} className="libro-imagen" />
                        <div className="libro-info">
                            <h4>{libro.titulo}</h4>
                            <p>{libro.genero}</p>
                            <p className="libro-precio">${libro.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Validación de propiedades con PropTypes
CategoriaPreview.propTypes = {
    titulo: PropTypes.string.isRequired,
    libros: PropTypes.array.isRequired,
    enlace: PropTypes.string.isRequired
};

export default CategoriaPreview;
