import mysql from "mysql2";
import { Router } from "express";

const bodegasStorage = Router();
let connection;

/* Hacer conexión con la base de datos */
bodegasStorage.use((req, res, next) => {
  const config = JSON.parse(process.env.MY_CONNECT)
  connection = mysql.createPool(config);
  next();
})

/* Obtener todas las bodegas por orden alfabético */
bodegasStorage.get("/", (req, res) => {
  connection.query('SELECT * FROM `bodegas` ORDER BY nombre ASC', (err, result, fil) => {
    res.end(JSON.stringify(result));
  })
})

/* Obtener una bodega utilizando el id */
bodegasStorage.get("/:id", (req, res) => {
  const bodegaId = req.params.id;

  connection.query(
    "SELECT * FROM bodegas WHERE id = ?",
    [bodegaId],
    (err, result) => {
      if (err) {
        console.error("Error al obtener la bodega: ", err);
        return res.status(500).json({ mensaje: "Error al obtener la bodega" });
      }

      /* Verifica si se encontró la bodega con el ID proporcionado */
      if (result.length === 0) {
        return res.status(404).json({ mensaje: "No se encontró la Bodega" });
      }

      const bodega = result[0];
      return res.json(bodega);
    }
  );
});

/* Añadir una Bodega */
bodegasStorage.post("/", (req, res) => {
  const { id, nombre, estado, deleted_at, created_by, update_by, id_responsable } = req.body;

  connection.query(
    'INSERT INTO `bodegas`(`id`, `nombre`, `estado`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `update_by`, `id_responsable`) VALUES (?, ?, ?,NOW(), NOW(), ?, ?, ?, ?)',
    [id, nombre, estado, deleted_at, created_by, update_by, id_responsable],
    (err, result, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error al insertar en la base de datos");
      } else {
        res.end("Los datos fueron insertados con exito en la base de datos");
      }
    });
});

/* Actualizar un producto por el ID */
bodegasStorage.put("/:id", (req, res) => {
  const bodegaId = req.params.id;
  const { nombre, estado, deleted_at, created_by, update_by, id_responsable } = req.body;

  connection.query(
    "UPDATE bodegas SET nombre = ?, estado = ?, created_at = NOW(), updated_at = NOW(), deleted_at = ?, created_by = ?, update_by = ?, id_responsable = ? WHERE id = ?",
    [nombre, estado, deleted_at, created_by, update_by, id_responsable, bodegaId],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar la bodega: ", err);
        return res.status(500).json({ mensaje: "Error al actualizar la bodega" });
      }

      return res.json({ mensaje: "Bodega actualizada exitosamente" });
    }
  );
});

/* Emilinar Bodega por Id */
bodegasStorage.delete("/:id", (req, res) => {
  const bodegaId = req.params.id;

  connection.query(
    "DELETE FROM bodegas WHERE id = ?",
    [bodegaId],
    (err, result) => {
      if (err) {
        console.error("Error al eliminar la Bodega: ", err);
        return res.status(500).json({ mensaje: "Error al eliminar la Bodega" });
      }

      return res.json({ mensaje: "Bodega eliminada exitosamente" });
    }
  );
});

export default bodegasStorage;
