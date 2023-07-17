import mysql from 'mysql2';
import { Router } from 'express';
import proxyUser from '../middleware/proxyUser.js';

const usersStorage = Router();
let connection;

/* Hacer conexión con la base de datos */
usersStorage.use((req, res, next) => {
    const config = JSON.parse(process.env.MY_CONNECT)
    connection = mysql.createPool(config);
    next();
});

/* Endpoint para obtener todos los usuarios */
usersStorage.get("/", (req, res) => {
    connection.query('SELECT * FROM `users`', (err, result, fil) => {
        res.end(JSON.stringify(result));
    })
});

/* Endpoint para obtener un usuario */
usersStorage.get("/:id", (req, res) => {
    const userId = req.params.id;

    connection.query(
        "SELECT * FROM users WHERE id = ?",
        [userId],
        (err, result) => {
            if (err) {
                console.error("Error al obtener el User: ", err);
                return res.status(500).json({ mensaje: "Error al obtener el User" });
            }

        
            if (result.length === 0) {
                return res.status(404).json({ mensaje: "No se encontró el User" });
            }

            const User = result[0];
            return res.json(User);
        }
    );
});

/* Añadir un User */
usersStorage.post("/", proxyUser, (req, res) => {
    const { id, nombre, email, email_verified_at, estado, created_by, update_by, foto, password, deleted_at} = req.body;

    connection.query(
        'INSERT INTO `users`(id, nombre, email, email_verified_at, estado, created_by, update_by, foto, password, created_at, updated_at, deleted_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)',
        [id, nombre, email, email_verified_at, estado, created_by, update_by, foto, password, deleted_at],
        (err, result, fields) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al insertar en la base de datos");
            } else {
                res.end("Los datos fueron insertados con exito en la base de datos");
            }
        });
});

/* Actualizar un User por el ID */
usersStorage.put("/:id", proxyUser, (req, res) => {
    const userId = req.params.id;
    const {id, nombre, email, email_verified_at, estado, created_by, update_by, foto, password, deleted_at} = req.body;

    connection.query(
        "UPDATE users SET id = ?, nombre = ?, email = ?, email_verified_at = ?, estado = ?, created_by = ?, update_by = ?, foto = ?, password = ?, created_at = NOW(), updated_at = NOW(), deleted_at = ? WHERE id = ?",
        [id, nombre, email, email_verified_at, estado, created_by, update_by, foto, password, deleted_at, userId],
        (err, result) => {
            if (err) {
                console.error("Error al actualizar el User: ", err);
                return res.status(500).json({ mensaje: "Error al actualizar el User" });
            }

            return res.json({ mensaje: "User actualizado exitosamente" });
        }
    );
});

/* Emilinar User por Id */
usersStorage.delete("/:id", (req, res) => {
    const userId = req.params.id;

    connection.query(
        "DELETE FROM users WHERE id = ?",
        [userId],
        (err, result) => {
            if (err) {
                console.error("Error al eliminar el User: ", err);
                return res.status(500).json({ mensaje: "Error al eliminar el User" });
            }

            return res.json({ mensaje: "User eliminado exitosamente" });
        }
    );
});

export default usersStorage;
