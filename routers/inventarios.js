import mysql from 'mysql2';
import { Router } from 'express';
import proxyInventarios from '../middleware/proxyInventarios.js';

const inventariosStorage = Router();
let connection;

/* Hacer conexión con la base de datos */
inventariosStorage.use((req, res, next) => {
    const config = JSON.parse(process.env.MY_CONNECT)
    connection = mysql.createPool(config);
    next();
});

/* Obtener todos los inventarios */
inventariosStorage.get("/", (req, res) => {
    connection.query('SELECT * FROM `inventarios`', (err, result, fil) => {
        res.end(JSON.stringify(result));
    })
});

/* Obtener un inventario utilizando el id */
inventariosStorage.get("/:id", (req, res) => {
    const invId = req.params.id;

    connection.query(
        "SELECT * FROM inventarios WHERE id = ?",
        [invId],
        (err, result) => {
            if (err) {
                console.error("Error al obtener el inventario: ", err);
                return res.status(500).json({ mensaje: "Error al obtener el inventario" });
            }

            /* Verifica si se encontró el inventario con el ID proporcionado */
            if (result.length === 0) {
                return res.status(404).json({ mensaje: "No se encontró el inventario" });
            }

            const inventario = result[0];
            return res.json(inventario);
        }
    );
});

/* Añadir un Inventario */
inventariosStorage.post("/", proxyInventarios, (req, res) => {
    const { id, cantidad, deleted_at, id_bodega, id_producto, created_by, update_by } = req.body;

    connection.query(
        'INSERT INTO `inventarios`(id, cantidad, created_at, updated_at, deleted_at, id_bodega, id_producto, created_by, update_by) VALUES (?, ?, NOW(), NOW(), ?, ?, ?, ?, ?)',
        [id, cantidad, deleted_at, id_bodega, id_producto, created_by, update_by],
        (err, result, fields) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al insertar en la base de datos");
            } else {
                res.end("Los datos fueron insertados con exito en la base de datos");
            }
        });
});

/* Actualizar un inventario por el ID */
inventariosStorage.put("/:id", proxyInventarios, (req, res) => {
    const invId = req.params.id;
    const { id, cantidad, deleted_at, id_bodega, id_producto, created_by, update_by } = req.body;

    connection.query(
        "UPDATE inventarios SET id = ?, cantidad = ?, created_at = NOW(), updated_at = NOW(), deleted_at = ?, id_bodega = ?, id_producto = ?, created_by = ?, update_by = ? WHERE id = ?",
        [id, cantidad, deleted_at, id_bodega, id_producto, created_by, update_by, invId],
        (err, result) => {
            if (err) {
                console.error("Error al actualizar el inventario: ", err);
                return res.status(500).json({ mensaje: "Error al actualizar el inventario" });
            }

            return res.json({ mensaje: "Inventario actualizada exitosamente" });
        }
    );
});

/* Emilinar Inventario por Id */
inventariosStorage.delete("/:id", (req, res) => {
    const invId = req.params.id;

    connection.query(
        "DELETE FROM inventarios WHERE id = ?",
        [invId],
        (err, result) => {
            if (err) {
                console.error("Error al eliminar el Inventario: ", err);
                return res.status(500).json({ mensaje: "Error al eliminar el Inventario" });
            }

            return res.json({ mensaje: "Inventario eliminado exitosamente" });
        }
    );
});

export default inventariosStorage;
