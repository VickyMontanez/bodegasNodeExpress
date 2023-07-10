import mysql from "mysql2";
import {Router} from "express";

const productosStorage = Router();
let connection;

productosStorage.use((req, res, next)=>{
    const config = JSON.parse(process.env.MY_CONNECT)
    connection = mysql.createPool(config);
    next();
})

productosStorage.get("/",(req, res)=>{
    connection.query('SELECT p.id, p.nombre, SUM(i.cantidad) AS Total FROM productos p JOIN inventarios i ON p.id = i.id GROUP BY p.id, p.nombre ORDER BY Total DESC',(err, result,fil)=>{
        res.end(JSON.stringify(result));
    })
})

productosStorage.post('/', (req, res) => {
    let myData = req.body;
    let data = Object.values(myData);

    connection.query('INSERT INTO productos (id, nombre, descripcion, estado, created_at, updated_at, deleted_at, created_by, update_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        data,
        (err, productResult) => {
            if (err) {
                console.error("Error al insertar producto: ", err);
                return res.status(500).json({ mensaje: "Error al insertar producto" });
            }

            const id_producto = req.body.id;
            const initial_amount = 10;
            const created_by = null;
            const update_by = null;
            let newId;

            connection.query('SELECT MAX(id) AS lastId FROM bodegas', (err, result) => {
                if (err) {
                    console.error('Error al obtener el último ID:', err);
                    return;
                }
                const lastId = result[0].lastId
                newId = lastId;

                connection.query(`INSERT INTO inventarios (id_bodega, id_producto, id, cantidad, created_by, update_by, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`,
                    [newId, id_producto, newId, initial_amount, created_by, update_by],
                    (err, inventoryResult) => {
                        if (err) {
                            console.error("Error al insertar inventario: ", err);
                            return res.status(500).json({ mensaje: "Error al insertar inventario" });
                        } else {
                            return res.json({ mensaje: "Producto insertado exitosamente" });
                        }
                    }
                );
            });

        }
    );
});

export default productosStorage;
