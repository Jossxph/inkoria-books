// src/components/ContactForm.jsx
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
        tipoConsulta: 'General',
        sugerenciaLibro: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/guardar-solicitud', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('¡Solicitud enviada y guardada con éxito!');
                setFormData({
                    nombre: '',
                    email: '',
                    telefono: '',
                    asunto: '',
                    mensaje: '',
                    tipoConsulta: 'General',
                    sugerenciaLibro: '',
                });
            } else {
                alert('Hubo un problema al enviar la solicitud.');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('Error al enviar la solicitud.');
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre Completo"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
            />
            <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                value={formData.mensaje}
                onChange={handleChange}
                required
            />
            <select
                name="tipoConsulta"
                value={formData.tipoConsulta}
                onChange={handleChange}
                required
            >
                <option value="General">General</option>
                <option value="Reclamación">Reclamación</option>
                <option value="Sugerencia">Sugerencia</option>
                <option value="Otros">Otros</option>
            </select>
            <input
                type="text"
                name="sugerenciaLibro"
                placeholder="¿Sugerencia de un libro?"
                value={formData.sugerenciaLibro}
                onChange={handleChange}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;
