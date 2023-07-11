import { Expose, Type, Transform } from 'class-transformer';

export class bodegas {

    @Expose({ name: 'id' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    ID: number;

    @Expose({ name: 'nombre' })
    @Type(() => String)
    nom_user: string;

    @Expose({ name: 'id_responsable' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    responsableID: number;

    @Expose({ name: 'estado' })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    estado_user: number;

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