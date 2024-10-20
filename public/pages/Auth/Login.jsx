import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import '../../css/Auth/login.css';

function Login1() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Para redirigir después del inicio de sesión

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) { // Cambiado a response.ok para verificar si la respuesta fue exitosa
                alert('Inicio de sesión exitoso');
                
                // Guardar datos del usuario en localStorage
                localStorage.setItem('user', JSON.stringify({
                    email: formData.email,
                }));

                navigate('/'); // Redirigir al Home
            } else {
                alert(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Hubo un problema. Intenta nuevamente más tarde.');
        }
    };

    return (
        <div className="body-login">
            <div className="login-card-container">
                <div className="login-card">
                    <div className="login-logo">
                        <img src="../../../src/assets/img/logos/logbook.jpg" alt="logo" />
                    </div>
                    <div className="login-header">
                        <h1>Iniciar sesión</h1>
                        <div>Por favor inicie sesión para continuar</div>
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        {/* Campo de correo electrónico */}
                        <div className="form-item">
                            <span className="form-icon">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Su correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoFocus
                            />
                        </div>

                        {/* Campo de contraseña */}
                        <div className="form-item">
                            <span className="form-icon">
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

                        {/* Checkbox "Recuérdame" */}
                        <div className="form-other">
                            <div className="checkbox-container-login">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    id="rememberMeCheckbox"
                                    className="checkbox-input-login"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                />
                                <label htmlFor="rememberMeCheckbox" className="custom-checkbox-login">
                                    <span className="checkmark-login"></span>
                                </label>
                                <span>Recuérdame</span>
                            </div>
                        </div>

                        <button type="submit">Ingresar</button>
                    </form>

                    <div className="login-footer">
                        ¿No tienes una cuenta? <a href="/register">Crea una cuenta nueva.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login1;
