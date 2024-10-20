import PropTypes from 'prop-types';
import '../../public/css/LibCates/BookCard.css';

const BookCard = ({ libro, onClick }) => {
  return (
    <div className="bookCard hoverEffect" onClick={onClick}>
      <img src={libro.portada} alt={libro.titulo} className="bookCover" />
      <h3 className="bookTitle">{libro.titulo}</h3>
      <p className="bookGenre">{libro.genero}</p>
      <p className="bookPrice">${libro.precio.toFixed(2)}</p>
      <button className="buyButton">Comprar</button>
    </div>
  );
};

BookCard.propTypes = {
  libro: PropTypes.shape({
    portada: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookCard;
