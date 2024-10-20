import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PagoModal from '../components/PagoModal';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../../public/css/Carrito.css';

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [isPagoModalOpen, setIsPagoModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('carrito'));
        if (storedCart) {
            setCarrito(storedCart);
            calcularTotal(storedCart);
        }
    }, []);

    const calcularTotal = (items) => {
        const totalAmount = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        setTotal(totalAmount);
    };

    const handleEliminar = (isbn) => {
        const updatedCart = carrito.filter(item => item.isbn !== isbn);
        setCarrito(updatedCart);
        localStorage.setItem('carrito', JSON.stringify(updatedCart));
        calcularTotal(updatedCart);
    };

    const handlePagar = () => {
        if (!localStorage.getItem('user')) {
            alert('Debes iniciar sesión para proceder al pago.');
            navigate('/login');
        } else {
            setIsPagoModalOpen(true); 
        }
    };

    const handleConfirmPayment = (orderDetails) => {

        // Se crea un PDF para poner la factura 

        const doc = new jsPDF();
        // Encabezado
        doc.setFontSize(20);
        doc.setTextColor(40, 62, 80);
        doc.text('INFORME DE COMPRA', 14, 22);

        // Información del comprador
        doc.setFontSize(12);
        doc.text(`Nombre: ${orderDetails.nombre}`, 14, 40);
        doc.text(`Apellidos: ${orderDetails.apellidos}`, 14, 45);
        doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 50);

        // Resumen de la compra
        doc.autoTable({
            startY: 60,
            head: [['Título', 'Precio Unitario', 'Cantidad', 'Total']],
            body: carrito.map((libro) => [
                libro.titulo,
                `$${libro.precio.toFixed(2)}`,
                libro.cantidad,
                `$${(libro.precio * libro.cantidad).toFixed(2)}`,
            ]),
            theme: 'grid',
            styles: {
                fontSize: 10,
                cellPadding: 5,
                valign: 'middle',
                overflow: 'linebreak',
            },
            headStyles: {
                fillColor: [247, 168, 55],
                textColor: [255, 255, 255],
                fontSize: 12,
                halign: 'center',
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245],
            },
        });

        const finalY = doc.lastAutoTable.finalY + 10;
        doc.setFontSize(14);
        doc.text(`Total: $${total.toFixed(2)}`, 14, finalY);

        // Mensaje de agradecimiento
        doc.setFontSize(12);
        doc.text('¡Gracias por comprar en Inkoria Books!', 14, finalY + 10);

        // (pie de archivo)
        doc.setFontSize(8);
        doc.text('© 2024 Inkoria Books. Todos los derechos reservados.', 14, finalY + 20);




        doc.save(`factura-${Date.now()}.pdf`); 

        alert('Pago exitoso. Gracias por tu compra!');
        setCarrito([]);
        localStorage.setItem('carrito', JSON.stringify([]));
        setTotal(0);
        setIsPagoModalOpen(false);
    };

    return (
        <div className="carrito-container">
            <h1 className="carrito-title">Tu Carrito</h1>
            {carrito.length === 0 ? (
                <p className="carrito-empty">No hay libros en el carrito.</p>
            ) : (
                <div className="carrito-content">
                    <ul className="carrito-list">
                        {carrito.map((libro) => (
                            <li key={libro.isbn} className="carrito-item">
                                <img src={libro.portada} alt={libro.titulo} className="carrito-cover" />
                                <div className="carrito-info">
                                    <h2 className="carrito-item-title">{libro.titulo}</h2>
                                    <p><strong>Autor:</strong> {libro.autor}</p>
                                    <p><strong>Precio:</strong> ${libro.precio.toFixed(2)}</p>
                                    <p><strong>Cantidad:</strong> {libro.cantidad}</p>
                                    <button className="carrito-delete-btn" onClick={() => handleEliminar(libro.isbn)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3 className="carrito-total">Total: ${total.toFixed(2)}</h3>
                    <button className="carrito-pay-btn" onClick={handlePagar}>Proceder a Pagar</button>
                </div>
            )}
            {isPagoModalOpen && (
                <PagoModal
                    onClose={() => setIsPagoModalOpen(false)}
                    total={total}
                    onConfirm={handleConfirmPayment}
                    carrito={carrito}
                />
            )}

        </div>
    );
};

export default Carrito;
