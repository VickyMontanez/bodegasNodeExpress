import mysql from "mysql2";
import { Router } from "express";
import proxyProducts from '../middleware/proxyProductos.js';

const productosStorage = Router();
let connection;

/* Hacer conexión cn la base de datos */
productosStorage.use((req, res, next) => {
    const config = JSON.parse(process.env.MY_CONNECT)
    connection = mysql.createPool(config);
    next();
});

/* Obtener todos los productos por id, nombre y total */
productosStorage.get("/", (req, res) => {
    connection.query('SELECT p.id, p.nombre, SUM(i.cantidad) AS Total FROM productos p JOIN inventarios i ON p.id = i.id GROUP BY p.id, p.nombre ORDER BY Total DESC', (err, result, fil) => {
        res.end(JSON.stringify(result));
    })
});

/* Obtener un producto por id */
productosStorage.get("/:id", (req, res) => {
    const productId = req.params.id;

    connection.query(
        "SELECT * FROM productos WHERE id = ?",
        [productId],
        (err, result) => {
            if (err) {
                console.error("Error al obtener el producto: ", err);
                return res.status(500).json({ mensaje: "Error al obtener el producto" });
            }

            /* Verifica si se encontró un producto con el ID proporcionado */
            if (result.length === 0) {
                return res.status(404).json({ mensaje: "Producto no encontrado" });
            }

            const producto = result[0];
            return res.json(producto);
        }
    );
});

/* Añadir un producto */
productosStorage.post('/', proxyProducts, (req, res) => {
    let myData = req.body;
    let data = Object.values(myData);

    connection.query(
        'INSERT INTO productos (id, nombre, descripcion, estado, created_at, updated_at, deleted_at, created_by, update_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        data,
        (err, productResult) => {
            if (err) {
                console.error("Error al insertar producto: ", err);
                return res.status(500).json({ mensaje: "Error al insertar producto" });
            }

            /* Configuraciones predeterminadas */
            const id_producto = req.body.id;
            const initial_amount = 100;
            const bog_Id = 50;

            /* Actualizar la cantidad de productos en el inventario */
            connection.query(
                'UPDATE inventarios SET id_bodega = ?, id_producto = ?, cantidad = cantidad + ? WHERE id = 50',
                [bog_Id, id_producto, initial_amount],
                (err, inventoryResult) => {
                    if (err) {
                        console.error("Error al actualizar el inventario: ", err);
                        return res.status(500).json({ mensaje: "Error al actualizar el inventario:" });
                    } else {
                        console.log("Consultas realizadas");
                        return res.json({ mensaje: "Producto insertado exitosamente" });
                    }
                }
            );
        }
    );
});

/* Actualizar un producto por el ID */
productosStorage.put("/:id", proxyProducts, (req, res) => {
    const productId = req.params.id;
    const { nombre, descripcion, estado, created_at, updated_at, deleted_at, created_by, update_by, } = req.body;

    connection.query(
        "UPDATE productos SET nombre = ?, descripcion = ?, estado = ?, created_at = ?, updated_at = ?, deleted_at = ?, created_by = ?, update_by = ? WHERE id = ?",
        [nombre, descripcion, estado, created_at, updated_at, deleted_at, created_by, update_by, productId],
        (err, result) => {
            if (err) {
                console.error("Error al actualizar el producto: ", err);
                return res.status(500).json({ mensaje: "Error al actualizar el producto" });
            }

            return res.json({ mensaje: "Producto actualizado exitosamente" });
        }
    );
});

/* Eliminar un producto por ID */
productosStorage.delete("/:id", (req, res) => {
    const productId = req.params.id;

    /*  Verificar si el producto tiene registros relacionados en la tabla "inventarios" */
    connection.query(
        "SELECT * FROM inventarios WHERE id_producto = ?",
        [productId],
        (err, result) => {
            if (err) {
                console.error("Error al verificar los registros relacionados: ", err);
                return res.status(500).json({ mensaje: "Error al eliminar el producto" });
            }

            if (result.length > 0) {
                /* Si existen registros relacionados en "inventarios", devuelve un mensaje de error */
                return res.status(409).json({ mensaje: "No se puede eliminar el producto porque tiene registros relacionados en inventarios" });
            } else {
                /* Si no hay registros relacionados, procede a eliminar el producto */
                connection.query(
                    "DELETE FROM productos WHERE id = ?",
                    [productId],
                    (err, result) => {
                        if (err) {
                            console.error("Error al eliminar el producto: ", err);
                            return res.status(500).json({ mensaje: "Error al eliminar el producto" });
                        }

                        return res.json({ mensaje: "Producto eliminado exitosamente" });
                    }
                );
            }
        }
    );
});


export default productosStorage;
