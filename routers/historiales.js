import mysql from 'mysql2';
import { Router } from 'express';

const historialesStorage = Router();
let connection;

/* Hacer conexión con la base de datos */
historialesStorage.use((req, res, next) => {
    const config = JSON.parse(process.env.MY_CONNECT)
    connection = mysql.createPool(config);
    next();
});

/* Obtener todos los historiales */
historialesStorage.get("/", (req, res) => {
    connection.query('SELECT * FROM `historiales`', (err, result, fil) => {
        res.end(JSON.stringify(result));
    })
});

/* Obtener un historial utilizando el id */
historialesStorage.get("/:id", (req, res) => {
    const hisId = req.params.id;

    connection.query(
        "SELECT * FROM historiales WHERE id = ?",
        [hisId],
        (err, result) => {
            if (err) {
                console.error("Error al obtener el historial: ", err);
                return res.status(500).json({ mensaje: "Error al obtener el historial" });
            }

            /* Verifica si se encontró el historial con el ID proporcionado */
            if (result.length === 0) {
                return res.status(404).json({ mensaje: "No se encontró el historial" });
            }

            const historial = result[0];
            return res.json(historial);
        }
    );
});

/* {id,cantidad,created_at,updated_at,deleted_at,id_inventario,id_bodega_destino,id_bodega_origen,created_by,update_by} */
/* Añadir un historial */
historialesStorage.post("/", (req, res) => {
    const {id, cantidad, deleted_at, id_inventario, id_bodega_destino, id_bodega_origen, created_by, update_by} = req.body;

    connection.query(
        'INSERT INTO `historiales`(id, cantidad, created_at, updated_at, deleted_at, id_inventario, id_bodega_destino, id_bodega_origen, created_by, update_by) VALUES (?, ?, NOW(), NOW(), ?, ?, ?, ?, ?, ?)',
        [id, cantidad, deleted_at, id_inventario, id_bodega_destino, id_bodega_origen, created_by, update_by],
        (err, result, fields) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error al insertar en la base de datos");
            } else {
                res.end("Los datos fueron insertados con exito en la base de datos");
            }
        });
});

/* Actualizar un historial por el ID */
historialesStorage.put("/:id", (req, res) => {
    const hisId = req.params.id;
    const {id, cantidad, deleted_at, id_inventario, id_bodega_destino, id_bodega_origen, created_by, update_by} = req.body;

    connection.query(
        "UPDATE historiales SET id = ?, cantidad = ?, created_at = NOW(), updated_at = NOW(), deleted_at = ?,id_inventario =?, id_bodega_destino = ?, id_bodega_origen = ?, created_by = ?, update_by = ? WHERE id = ?",
        [id, cantidad, deleted_at, id_inventario, id_bodega_destino, id_bodega_origen, created_by, update_by, hisId],
        (err, result) => {
            if (err) {
                console.error("Error al actualizar el historial: ", err);
                return res.status(500).json({ mensaje: "Error al actualizar el historial" });
            }

            return res.json({ mensaje: "Historial actualizado exitosamente" });
        }
    );
});

/* Emilinar historial por Id */
historialesStorage.delete("/:id", (req, res) => {
    const hisId = req.params.id;

    connection.query(
        "DELETE FROM historiales WHERE id = ?",
        [hisId],
        (err, result) => {
            if (err) {
                console.error("Error al eliminar el historial: ", err);
                return res.status(500).json({ mensaje: "Error al eliminar el historial" });
            }

            return res.json({ mensaje: "historial eliminado exitosamente" });
        }
    );
});

export default historialesStorage;