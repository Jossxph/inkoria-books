import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../public/css/PagoModal.css';

const PagoModal = ({ onClose, total, onConfirm, carrito }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [nombre, setNombre] = useState(''); 
    const [apellidos, setApellidos] = useState(''); 
    const [error, setError] = useState('');

    const validateCardNumber = (number) => {
        return /^\d{16}$/.test(number);
    };

    const validateExpiryDate = (date) => {
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);
    };

    const validateCvv = (cvv) => {
        return /^\d{3}$/.test(cvv);
    };

    const handleConfirm = () => {
        if (!validateCardNumber(cardNumber)) {
            setError('Número de tarjeta inválido. Debe tener 16 dígitos.');
            return;
        }
        if (!validateExpiryDate(expiryDate)) {
            setError('Fecha de vencimiento inválida. Formato: MM/AA.');
            return;
        }
        if (!validateCvv(cvv)) {
            setError('CVV inválido. Debe tener 3 dígitos.');
            return;
        }
        if (!nombre || !apellidos) {
            setError('El nombre y los apellidos son requeridos.');
            return;
        }

        
        onConfirm({ nombre, apellidos });
        onClose(); 
    };

    return (
        <div className="pagoModalOverlay">
            <div className="pagoModalContent">
                <button className="closeBtn" onClick={onClose}>X</button>
                <h2 className="pagoModalTitle">Completa tus datos de pago</h2>
                {error && <p className="error">{error}</p>}
                <form className="pagoModalForm">
                    <label className="pagoModalLabel">Nombre:</label>
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        className="pagoModalInput"
                    />

                    <label className="pagoModalLabel">Apellidos:</label>
                    <input 
                        type="text" 
                        value={apellidos} 
                        onChange={(e) => setApellidos(e.target.value)} 
                        className="pagoModalInput"
                    />

                    <label className="pagoModalLabel">Número de tarjeta:</label>
                    <input 
                        type="text" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                        maxLength="16"
                        className="pagoModalInput"
                    />

                    <label className="pagoModalLabel">Fecha de vencimiento (MM/AA):</label>
                    <input 
                        type="text" 
                        value={expiryDate} 
                        onChange={(e) => setExpiryDate(e.target.value)} 
                        placeholder="MM/AA" 
                        maxLength="5"
                        className="pagoModalInput"
                    />

                    <label className="pagoModalLabel">CVV:</label>
                    <input 
                        type="text" 
                        value={cvv} 
                        onChange={(e) => setCvv(e.target.value)} 
                        maxLength="3"
                        className="pagoModalInput"
                    />

                    <h3 className="pagoModalTotal">Total a pagar: ${total.toFixed(2)}</h3>
                    <button type="button" onClick={handleConfirm} className="pagoModalConfirmBtn">Confirmar Pago</button>
                </form>

                {/* Resumen de la compra */}
                <div className="pagoModalResumen">
                    <h3 className="resumenTitle">Resumen de Compra</h3>
                    <ul className="resumenLista">
                        {carrito.map((libro) => (
                            <li key={libro.isbn} className="resumenItem">
                                <span>{libro.titulo}</span>
                                <span>${libro.precio.toFixed(2)} x {libro.cantidad}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

PagoModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    onConfirm: PropTypes.func.isRequired,
    carrito: PropTypes.array.isRequired, // Se añade la prop para el carrito
};

export default PagoModal;
