import PropTypes from 'prop-types';
import BookCategory from '../../../src/components/BookCategory';
import '../../css/LibCates/Ficcion.css'; 

const ArteCreatividad = ({ librosArteCreatividad }) => {
    return <BookCategory libros={librosArteCreatividad} categoria="ArteCreatividad" />;
};


ArteCreatividad.propTypes = {
    librosArteCreatividad: PropTypes.arrayOf(
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

export default ArteCreatividad;
