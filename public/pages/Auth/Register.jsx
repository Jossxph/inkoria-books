import '../../css/Auth/register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register1() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate(); // Para redirigir después del registro

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Guardar datos en localStorage para mantener al usuario autenticado
                localStorage.setItem('user', JSON.stringify({
                    nombre: formData.nombre,
                    apellido: formData.apellido,
                    email: formData.email,
                }));

                alert(data.message);
                navigate('/'); // Redirigir al Home
            } else {
                alert(data.message || 'Error en el registro.');
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            alert('Hubo un problema. Intenta de nuevo más tarde.');
        }
    };

    return (
        <div className="body-register">
            <div className="register-card-container">
                <div className="register-card">
                    <div className="register-logo">
                        <img src="../../../src/assets/img/logos/logbook.jpg" alt="logo" />
                    </div>

                    <div className="register-header">
                        <h1>Crear cuenta</h1>
                        <div>Completa los campos para registrarte</div>
                    </div>

                    <form className="register-form" onSubmit={handleSubmit}>
                        <div className="register-item">
                            <span className="register-icon">
                                <i className="fas fa-user"></i>
                            </span>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-item">
                            <span className="register-icon">
                                <i className="fas fa-user"></i>
                            </span>
                            <input
                                type="text"
                                name="apellido"
                                placeholder="Apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-item">
                            <span className="register-icon">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-item">
                            <span className="register-icon">
                                <i className="fas fa-lock"></i>
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <span
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                            >
                                <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                            </span>
                        </div>

                        <div className="register-item">
                            <span className="register-icon">
                                <i className="fas fa-lock"></i>
                            </span>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Confirmar contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <span
                                className="toggle-password"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                <i className={`fas ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                            </span>
                        </div>

                        <div className="register-other">
                            <div className="checkbox-container-register">
                                <input
                                    type="checkbox"
                                    id="termsCheckbox"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    className="checkbox-input-register"
                                    required
                                />
                                <label htmlFor="termsCheckbox" className="custom-checkbox-register">
                                    <span className="checkmark-register"></span>
                                </label>
                                <span>Acepto los <a href="/términos-y-condiciones">términos y condiciones</a></span>
                            </div>
                        </div>

                        <button type="submit" className="register-button">Registrarse</button>
                    </form>

                    <div className="register-footer">
                        ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register1;
