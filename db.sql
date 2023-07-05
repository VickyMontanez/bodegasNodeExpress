-- Active: 1688557522293@@localhost@3306@campuslands

CREATE DATABASE db_prueba_backend_sql;

USE db_prueba_backend_sql;

CREATE TABLE
    `historiales`(
        `id` BIGINT(20) UNSIGNED NOT NULL,
        `cantidad` INT(11) NOT NULL,
        `create_at` TIMESTAMP NOT NULL,
        `update_at` TIMESTAMP NOT NULL,
        `delete_at` TIMESTAMP NOT NULL
    );

CREATE TABLE
    `inventarios`(
        `id` BIGINT(20) UNSIGNED NOT NULL,
        `cantidad` INT(11) NOT NULL,
        `create_at` TIMESTAMP NOT NULL,
        `update_at` TIMESTAMP NOT NULL,
        `delete_at` TIMESTAMP NOT NULL
    );

CREATE TABLE
    `bodegas`(
        `id` BIGINT(20) UNSIGNED NOT NULL,
        `nombre` VARCHAR(225) NOT NULL,
        `estado` TINYINT(4) NOT NULL,
        `create_at` TIMESTAMP NOT NULL,
        `update_at` TIMESTAMP NOT NULL,
        `delete_at` TIMESTAMP NOT NULL
    );
CREATE TABLE
    `productos`(
        `id` BIGINT(20) UNSIGNED NOT NULL,
        `nombre` VARCHAR(225) NOT NULL,
        `descripcion` VARCHAR(225) NOT NULL,
        `estado` TINYINT(4) NOT NULL,
        `create_at` TIMESTAMP NOT NULL,
        `update_at` TIMESTAMP NOT NULL,
        `delete_at` TIMESTAMP NOT NULL
    );
CREATE TABLE
    `users`(
        `id` BIGINT(20) UNSIGNED NOT NULL,
        `nombre` VARCHAR(225) NOT NULL,
        `email` VARCHAR(225) NOT NULL,
        `email_verified_at` TIMESTAMP NOT NULL,
        `estado` TINYINT(4) NOT NULL,
        `create_by` BIGINT(20) UNSIGNED NOT NULL,
        `update_by` BIGINT(20) UNSIGNED NOT NULL,
        `foto` VARCHAR(225) NOT NULL,
        `password`VARCHAR(225) NOT NULL,
        `create_at` TIMESTAMP NOT NULL,
        `update_at` TIMESTAMP NOT NULL,
        `delete_at` TIMESTAMP NOT NULL
    );




/* -------- ALTERACIONES TABLA HISTORIALES -------- */
ALTER TABLE `historiales`
    ADD PRIMARY KEY(`id`);

/* AÑADIR FUTURAS FOREIGN KEY*/
ALTER TABLE `historiales` ADD id_inventario BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `historiales` ADD id_bodega_destino BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `historiales` ADD id_bodega_origen BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `historiales` ADD created_by BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `historiales` ADD update_by BIGINT(20) UNSIGNED NOT NULL;


/* RELACIONES CON TABLAS */
ALTER TABLE `historiales` ADD CONSTRAINT historiales_inventarios_fk FOREIGN KEY (id_inventario) REFERENCES inventarios(id);
ALTER TABLE `historiales` ADD CONSTRAINT historiales_bodegas_fk FOREIGN KEY (id_bodega_origen) REFERENCES bodegas(id);
ALTER TABLE `historiales` ADD CONSTRAINT historial_bodegas_fk FOREIGN KEY (id_bodega_destino) REFERENCES bodegas(id);
ALTER TABLE `historiales` ADD CONSTRAINT historiales_users_fk FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE `historiales` ADD CONSTRAINT historial_users_fk FOREIGN KEY (update_by) REFERENCES users(id);





/* -------- ALTERACIONES TABLA INVENTARIOS -------- */
ALTER TABLE `inventarios`
    ADD PRIMARY KEY(`id`);


/* AÑADIR FUTURAS FOREIGN KEY*/
ALTER TABLE `inventarios` ADD id_bodega BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `inventarios` ADD id_producto BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `inventarios` ADD created_by BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `inventarios` ADD update_by BIGINT(20) UNSIGNED NOT NULL;


/* RELACIONES CON TABLAS */
ALTER TABLE `inventarios` ADD CONSTRAINT inventarios_bodega_fk FOREIGN KEY (id_bodega) REFERENCES bodegas(id);
ALTER TABLE `inventarios` ADD CONSTRAINT inventarios_productos_fk FOREIGN KEY (id_producto) REFERENCES productos(id);
ALTER TABLE `inventarios` ADD CONSTRAINT inventarios_users_fk FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE `inventarios` ADD CONSTRAINT inventarios_user_fk FOREIGN KEY (update_by) REFERENCES users(id);





/* -------- ALTERACIONES TABLA BODEGAS -------- */
ALTER TABLE `bodegas`
    ADD PRIMARY KEY(`id`);


/* AÑADIR FUTURAS FOREIGN KEY*/
ALTER TABLE `bodegas` ADD id_responsable BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `bodegas` ADD created_by BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `bodegas` ADD update_by BIGINT(20) UNSIGNED NOT NULL;


/* RELACIONES CON TABLAS */
ALTER TABLE `bodegas` ADD CONSTRAINT bodegas_users_fk FOREIGN KEY (id_responsable) REFERENCES users(id);
ALTER TABLE `bodegas` ADD CONSTRAINT bodega_users_fk FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE `bodegas` ADD CONSTRAINT bodegas_user_fk FOREIGN KEY (update_by) REFERENCES users(id);




/* -------- ALTERACIONES TABLA PRODUCTOS -------- */
ALTER TABLE `productos`
    ADD PRIMARY KEY(`id`);


/* AÑADIR FUTURAS FOREIGN KEY*/
ALTER TABLE `productos` ADD created_by BIGINT(20) UNSIGNED NOT NULL;
ALTER TABLE `productos` ADD update_by BIGINT(20) UNSIGNED NOT NULL;


/* RELACIONES CON TABLAS */
ALTER TABLE `productos` ADD CONSTRAINT productos_users_fk FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE `productos` ADD CONSTRAINT productos_user_fk FOREIGN KEY (update_by) REFERENCES users(id);





/* -------- ALTERACIONES TABLA PRODUCTOS -------- */
ALTER TABLE `users`
    ADD PRIMARY KEY(`id`),
    ADD KEY `email` (`email`);