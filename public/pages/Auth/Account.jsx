import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Auth/account.css'; // Asegúrate de importar el archivo CSS

const Account = () => {
    const [userData, setUserData] = useState({ nombre: '', apellido: '', email: '', password: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) setUserData(user); // Cargar los datos del usuario
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/update/${userData.email}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message || 'Datos actualizados exitosamente.');
                localStorage.setItem('user', JSON.stringify(userData)); // Actualizar localStorage
            } else {
                alert(data.message || 'Error al actualizar los datos.');
            }
        } catch (error) {
            console.error('Error al actualizar los datos:', error);
            alert('Error al actualizar los datos.');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar tu cuenta?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/delete/${userData.email}`, {
                    method: 'DELETE',
                });

                const data = await response.json();
                if (response.ok) {
                    alert(data.message || 'Cuenta eliminada.');
                    localStorage.removeItem('user'); // Eliminar la cuenta del localStorage
                    navigate('/register'); // Redirigir al registro
                } else {
                    alert(data.message || 'Error al eliminar la cuenta.');
                }
            } catch (error) {
                console.error('Error al eliminar la cuenta:', error);
                alert('Error al eliminar la cuenta.');
            }
        }
    };

    return (
        <div className="account-container">
            <h1 className="account-title">Bienvenid@ a su Gestor de cuenta!</h1>
            <h2 className="account-subtitle">Mi Cuenta</h2>
            <form className="account-form">
                <h3>| Actualize sus datos o elimine su cuenta.</h3>
                <div className="account-form-group">
                    <label className="account-label">Nombre:</label>
                    <input className="account-input" type="text" name="nombre" value={userData.nombre} onChange={handleChange} />
                </div>

                <div className="account-form-group">
                    <label className="account-label">Apellido:</label>
                    <input className="account-input" type="text" name="apellido" value={userData.apellido} onChange={handleChange} />
                </div>

                <div className="account-form-group">
                    <label className="account-label">Email:</label>
                    <input className="account-input" type="email" name="email" value={userData.email} onChange={handleChange} />
                </div>

                <div className="account-form-group">
                    <label className="account-label">Contraseña:</label>
                    <input className="account-input" type="password" name="password" value={userData.password} onChange={handleChange} />
                </div>

                <div className="account-button-group">
                    <button className="account-button update-button" type="button" onClick={handleUpdate}>Actualizar Datos</button>
                    <button className="account-button delete-button" type="button" onClick={handleDelete}>Eliminar Cuenta</button>
                </div>
            </form>
        </div>
    );
};

export default Account;
