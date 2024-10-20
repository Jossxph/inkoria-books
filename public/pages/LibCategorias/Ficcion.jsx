import PropTypes from 'prop-types';
import BookCategory from '../../../src/components/BookCategory';
import '../../css/LibCates/Ficcion.css'; 

const Ficcion = ({ librosFiccion }) => {
    return <BookCategory libros={librosFiccion} categoria="Ficción" />;
};


Ficcion.propTypes = {
    librosFiccion: PropTypes.arrayOf(
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
    ).isRequired, 
};

export default Ficcion;
