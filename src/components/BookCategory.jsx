import { useState } from 'react';
import PropTypes from 'prop-types';
import BookCard from '../components/BookCard';
import BookDetailModal from '../components/BookDetailModal';

const BookCategory = ({ libros, categoria }) => {
    const [selectedLibro, setSelectedLibro] = useState(null);

    const handleCardClick = (libro) => {
        setSelectedLibro(libro);
    };

    const handleCloseModal = () => {
        setSelectedLibro(null);
    };

    return (
        <div className={`books-list ${categoria.toLowerCase()}-category`}>
            {libros.length > 0 ? (
                libros.map((libro) => (
                    <BookCard key={libro.id} libro={libro} onClick={() => handleCardClick(libro)} />
                ))
            ) : (
                <p>No hay libros de {categoria} disponibles.</p>
            )}
            {selectedLibro && (
                <BookDetailModal libro={selectedLibro} onClose={handleCloseModal} />
            )}
        </div>
    );
};

BookCategory.propTypes = {
    libros: PropTypes.arrayOf(
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
    ),
    categoria: PropTypes.string.isRequired,
};

export default BookCategory;
