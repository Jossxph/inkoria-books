import PropTypes from 'prop-types';
import { useState } from 'react';
import '../../public/css/LibCates/BookDetailModal.css';

const BookDetailModal = ({ libro, onClose }) => {
    const [cantidad, setCantidad] = useState(1);

    const handleComprar = () => {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const libroEnCarrito = carrito.find(item => item.isbn === libro.isbn);

        if (libroEnCarrito) {
            libroEnCarrito.cantidad += cantidad; // Aumentar la cantidad si ya está en el carrito
        } else {
            carrito.push({ ...libro, cantidad }); // Agregar libro al carrito
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Libro agregado al carrito.');
        onClose(); // Cerrar el modal después de agregar
    };

    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <button className="closeBtn" onClick={onClose}>X</button>
                <div className="modalBody">
                    <img src={libro.portada} alt={libro.titulo} className="modalCover" />
                    <div className="modalInfo">
                        <h2 className="modalTitle">{libro.titulo}</h2>
                        <p><strong>Autor:</strong> {libro.autor}</p>
                        <p><strong>Género:</strong> {libro.genero}</p>
                        <p><strong>Año:</strong> {libro.anio}</p>
                        <p><strong>Editorial:</strong> {libro.editorial}</p>
                        <p><strong>ISBN:</strong> {libro.isbn}</p>
                        <p className="modalDescription">{libro.descripcion}</p>
                        <p><strong>Precio:</strong> ${libro.precio.toFixed(2)}</p>
                        <p><strong>Stock:</strong> {libro.stock}</p>
                        <div className="modalQuantity">
                            <label htmlFor="cantidad">Cantidad:</label>
                            <input
                                type="number"
                                id="cantidad"
                                value={cantidad}
                                min="1"
                                max={libro.stock}
                                onChange={(e) => setCantidad(Number(e.target.value))}
                            />
                        </div>
                    </div>
                </div>
                <div className="modalActions">
                    <button className="buyBtn" onClick={handleComprar}>Comprar</button>
                    <button className="whatsappBtn">Más info vía WhatsApp</button>
                </div>
            </div>
        </div>
    );
};

BookDetailModal.propTypes = {
    libro: PropTypes.shape({
        portada: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        autor: PropTypes.string.isRequired,
        genero: PropTypes.string.isRequired,
        anio: PropTypes.number.isRequired,
        editorial: PropTypes.string.isRequired,
        isbn: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default BookDetailModal;
