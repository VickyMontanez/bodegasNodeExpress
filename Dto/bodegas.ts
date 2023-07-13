import { Expose, Type, Transform } from 'class-transformer';

export class bodegas {

    @Expose({ name: 'id' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del Id no cumple con los párametros establecidos"}}, { toClassOnly: true })
    ID: number;

    @Expose({ name: 'nombre' })
    @Transform(({value})=>{ if(/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]\w+[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/.test(value)) return value ; else throw {status:400, message: "Los datos del nombre no cumplen con los párametros establecidos"}})
    nom_user: string;

    @Expose({ name: 'id_responsable' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del Responsable no cumple con los párametros establecidos"}}, { toClassOnly: true })
    responsableID: number;

    @Expose({ name: 'estado' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del estado no cumple con los párametros establecidos"}}, { toClassOnly: true })
    estado_user: number;

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
        nom_user: string,
        responsableID: number,
        estado_user: number,
        createdBy: number,
        updateBy: number,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    ) {
        this.ID = ID;
        this.nom_user = nom_user;
        this.responsableID = responsableID;
        this.estado_user = estado_user;
        this.createdBy = createdBy;
        this.updateBy = updateBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

}