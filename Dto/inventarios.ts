import { Expose, Type, Transform } from 'class-transformer';

export class inventarios {

    @Expose({ name: 'id' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID: number;

    @Expose({ name: 'cantidad' })
    @Type(() => String)
    cantidad : number;

    @Expose({ name: 'bodega' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    id_bodega: number;

    @Expose({ name: 'producto' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    id_producto: number;

    @Expose({ name: 'created_by' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    createdBy: number;

    @Expose({ name: 'update_by' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    updateBy: number;

    @Expose({ name: 'created_at' })
    createdAt: Date;

    @Expose({ name: 'updated_at' })
    updatedAt: Date;

    @Expose({ name: 'deleted_at' })
    deletedAt: Date;

    constructor(
        ID: number,
        cantidad: number,
        bodega: number,
        producto: number,
        createdBy: number,
        updateBy: number,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    ) {
        this.ID = ID;
        this.cantidad = cantidad;
        this.id_bodega = bodega;
        this.id_producto = producto;
        this.createdBy = createdBy;
        this.updateBy = updateBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

}