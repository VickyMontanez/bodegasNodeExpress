import { Expose, Type, Transform } from 'class-transformer';

export class inventarios {

    @Expose({ name: 'id' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del Id no cumple con los párametros establecidos"}}, { toClassOnly: true })
    ID: number;

    @Expose({ name: 'cantidad' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos de la cantidad no cumple con los párametros establecidos"}}, { toClassOnly: true })
    cantidad : number;

    @Expose({ name: 'bodega' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos de la bodega no cumple con los párametros establecidos"}}, { toClassOnly: true })
    id_bodega: number;

    @Expose({ name: 'producto' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del producto no cumple con los párametros establecidos"}}, { toClassOnly: true })
    id_producto: number;

    @Expose({ name: 'created_by' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del created_by no cumple con los párametros establecidos"}}, { toClassOnly: true })
    createdBy: number;

    @Expose({ name: 'update_by' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value); 
        else throw {status: 400, message: "Los datos del update_by no cumple con los párametros establecidos"}}, { toClassOnly: true })
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