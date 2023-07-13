import { Expose, Type, Transform } from 'class-transformer';

export class users {

    @Expose({ name: 'id' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del Id no cumple con los párametros establecidos"}}, { toClassOnly: true })
    ID: number;

    @Expose({ name: 'nombre' })
    @Transform(({value})=>{ if(/^[a-z A-z]*$/.test(value)) return value ; else throw {status:400, message: "Los datos del nombre no cumplen con los párametros establecidos"}})
    nom_com : string;

    @Expose({ name: 'email' })
    @Transform(({value})=>{ if(/\$+@\$+\.\$+/.test(value)) return value ; else throw {status:400, message: "Los datos del email no cumplen con los párametros establecidos"}})
    ema: string;

    @Expose({ name: 'verify_email' })
    @Transform(({value})=>{ if(/\$+@\$+\.\$+/.test(value)) return value ; else throw {status:400, message: "Los datos del email no cumplen con los párametros establecidos"}})
    ema_vrf: string;

    @Expose({ name: 'estado' })
    @Transform(({ value }) => {
        if(Math.floor(value) && typeof value == "number")
        return Math.floor(value);
        else throw {status: 400, message: "Los datos del estado no cumple con los párametros establecidos"}}, { toClassOnly: true })
    estado: number;

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

    @Expose({ name: 'foto' })
    @Type(() => String)
    photo: string;

    @Expose({ name: 'contraseña' })
    @Type(() => String)
    pswd: string;

    @Expose({ name: 'created_at' })
    createdAt: Date;

    @Expose({ name: 'updated_at' })
    updatedAt: Date;

    @Expose({ name: 'deleted_at' })
    deletedAt: Date;

    constructor(
        ID: number,
        nom_com: string,
        ema: string,
        ema_vrf: string,
        estado: number,
        createdBy: number,
        updateBy: number,
        photo:string,
        pswd: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    ) {
        this.ID = ID;
        this.nom_com = nom_com;
        this.ema = ema;
        this.ema_vrf = ema_vrf;
        this.estado = estado;
        this.createdBy = createdBy;
        this.updateBy = updateBy;
        this.photo = photo;
        this.pswd = pswd;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

}