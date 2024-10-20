// * Importaciones

import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';


// * Configuración para usar __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// * Cargar variables de entorno
dotenv.config();

const app = express();

// Usar el puerto del archivo .env o 5000 si no está definido
const PORT = process.env.PORT || 5000;




// * Middleware
app.use(cors());
app.use(bodyParser.json());

// * Ruta del archivo donde se guardan los usuarios
const USERS_FILE = path.join(__dirname, '../public/users.txt');

// * Función para leer los usuarios como objetos
function getUsers() {
    const data = fs.readFileSync(USERS_FILE, 'utf-8');
    return data.split('\n').filter(Boolean).map(line => {
        const [email, password, nombre, apellido, fechaCreacion, id] = line.split('|');
        return { email, password, nombre, apellido, fechaCreacion, id };
    });
}

// * Función para escribir los usuarios en el archivo
function writeUsers(users) {
    const data = users.map(u => `${u.email}|${u.password}|${u.nombre}|${u.apellido}|${u.fechaCreacion}|${u.id}`).join('\n');
    fs.writeFileSync(USERS_FILE, data);
}

// * Verificar si un email ya está registrado
function emailExists(email) {
    return getUsers().some(user => user.email === email);
}

// **Registro de usuario**
app.post('/api/register', (req, res) => {
    const { email, password, nombre, apellido } = req.body;

    if (emailExists(email)) {
        return res.status(400).json({ message: 'El correo ya está registrado.' });
    }

    const id = new Date().getTime(); // Se genera un ID único basado en la fecha y hora
    const fechaCreacion = new Date().toLocaleString(); // Obtener la fecha de creación

    // Formato de usuario
    const newUser = `${email}|${password}|${nombre}|${apellido}|${fechaCreacion}|${id}\n`; // Mantén un solo formato

    fs.appendFile(USERS_FILE, newUser, (err) => {
        if (err) {
            console.error('Error al registrar usuario:', err);
            return res.status(500).json({ message: 'Error al registrar el usuario' });
        }
        res.status(201).json({ message: 'Usuario registrado con éxito.' });
    });
});

// **Inicio de sesión**
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = getUsers().find(u => u.email === email && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }
});

// **Actualizar usuario**
app.put('/api/update/:email', (req, res) => {
    const { email } = req.params;
    const { password, nombre, apellido } = req.body;

    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // * Actualizar datos del usuario
    users[userIndex] = {
        email,
        password: password ? password : users[userIndex].password, // Mantener contraseña si no se proporciona
        nombre,
        apellido,
        fechaCreacion: users[userIndex].fechaCreacion, // Mantener fecha de creación
        id: users[userIndex].id // Mantener ID
    };
    writeUsers(users);

    res.status(200).json({ message: 'Usuario actualizado con éxito' });
});

// **Eliminar usuario**
app.delete('/api/delete/:email', (req, res) => {
    const { email } = req.params;

    const users = getUsers();
    const filteredUsers = users.filter(u => u.email !== email);

    if (users.length === filteredUsers.length) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    writeUsers(filteredUsers);
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
});

// **Guardar solicitudes**
app.post('/api/guardar-solicitud', (req, res) => {
    const { nombre, email, telefono, asunto, mensaje, tipoConsulta, sugerenciaLibro } = req.body;
    const solicitud = `
--------------------------
Fecha: ${new Date().toLocaleString()}
Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}
Asunto: ${asunto}
Mensaje: ${mensaje}
Tipo de Consulta: ${tipoConsulta}
Sugerencia de Libro: ${sugerenciaLibro}
--------------------------

`;
    const filePath = path.join(__dirname, '../public/solicitudes.txt');
    fs.appendFile(filePath, solicitud, (err) => {
        if (err) {
            console.error('Error al guardar la solicitud:', err);
            return res.status(500).json({ message: 'Error al guardar la solicitud' });
        }
        res.status(200).json({ message: 'Solicitud guardada con éxito' });
    });
});

// **Iniciar el servidor**
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
