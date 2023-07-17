import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, IsString, IsInt, Matches, IsOptional} from "class-validator";

export class bodegas {

    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro Id es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro Id no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    ID: number;

    @Expose({ name: 'nombre' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! El parametro nombre del usuario es obligatorio'}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! El parametro nombre del usuario no cumple con el tipo de dato establecido'}}})
    @MaxLength(50,{message: ()=>{throw {status:401, message:'¡ERROR! El parametro nombre del usuario superó el limite de carácteres'}}})
    @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! El parámetro nombre del usuario contiene caracteres no válidos'}}})
    @Type(()=>String)
    nom_user: string;

    @Expose({ name: 'id_responsable' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro id_responsable es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro id_responsable no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    responsableID: number;

    @Expose({ name: 'estado' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro estado es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro estado no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    estado_user: number;

    @Expose({ name: 'created_by' })
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    createdBy: number;

    @Expose({ name: 'update_by' })
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    updateBy: number;

    @Expose({ name: 'created_at' })
    @IsOptional()
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    createdAt: Date;

    @Expose({ name: 'updated_at' })
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    updatedAt: Date;

    @Expose({ name: 'deleted_at' })
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
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
