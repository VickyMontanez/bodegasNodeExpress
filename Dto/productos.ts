import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, IsString, IsInt, Matches, IsOptional} from "class-validator";

export class productos {

    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro Id es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro Id no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    ID: number;

    @Expose({ name: 'nombre' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! El parametro nombre del producto es obligatorio'}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! El parametro nombre del producto no cumple con el tipo de dato establecido'}}})
    @MaxLength(50,{message: ()=>{throw {status:401, message:'¡ERROR! El parametro nombre del producto superó el limite de carácteres'}}})
    @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! El parámetro nombre del producto contiene caracteres no válidos'}}})
    @Type(()=>String)
    nom_prd : string;

    @Expose({ name: 'descripcion' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! El parametro descripción del producto es obligatorio'}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! El parametro descripción del producto no cumple con el tipo de dato establecido'}}})
    @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! El parámetro descripción del producto contiene caracteres no válidos'}}})
    @Type(()=>String)
    desp: string;

    @Expose({ name: 'estado' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro estado es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro estado no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    estado: number;

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
        nom_prd: string,
        desp: string,
        estado: number,
        createdBy: number,
        updateBy: number,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    ) {
        this.ID = ID;
        this.nom_prd = nom_prd;
        this.desp = desp;
        this.estado = estado;
        this.createdBy = createdBy;
        this.updateBy = updateBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

}
