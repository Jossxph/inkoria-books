import PropTypes from 'prop-types';
import BookCategory from '../../../src/components/BookCategory';
import '../../css/LibCates/Ficcion.css'; // Estilos únicos para Ficción

const NoFiccion = ({ librosNoFiccion }) => {
    return <BookCategory libros={librosNoFiccion} categoria="NoFicción" />;
};

// Aquí agregamos la validación de PropTypes
NoFiccion.propTypes = {
    librosNoFiccion: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
            portada: PropTypes.string.isRequired,
            genero: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired,
            autor: PropTypes.string,
            anio: PropTypes.number,
            editorial: PropTypes.string,
            isbn: PropTypes.string,
            descripcion: PropTypes.string,
            stock: PropTypes.number,
        })
    ).isRequired,  // librosFiccion es requerido
};

export default NoFiccion;
