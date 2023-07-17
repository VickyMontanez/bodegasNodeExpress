import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsEmail, IsString, IsInt, Matches, IsOptional} from "class-validator";

export class users {

    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro Id es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro Id no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    ID: number;

    @Expose({ name: 'nombre' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! El parametro nombre es obligatorio'}}})
    @IsString({message: ()=>{throw {status:401, message: '¡ERROR! El parametro nombre no cumple con el tipo de dato establecido'}}})
    @MaxLength(50,{message: ()=>{throw {status:401, message:'¡ERROR! El parametro nombre superó el limite de carácteres'}}})
    @Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, {message: ()=>{throw{status:401, message:'¡ERROR! El parámetro nombre contiene caracteres no válidos'}}})
    @Type(()=>String)
    nom_com : string;

    @Expose({ name: 'email' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro email es obligatorio'}}})
    @IsEmail({}, { message: ()=>{throw {status:401, message:'¡ERROR! El parametro email no cumple con el formato establecido'}}})
    @Type(()=>String)
    ema: string;

    @Expose({ name: 'verify_email' })
    @IsEmail({}, { message: ()=>{throw {status:401, message:'¡ERROR! El parametro email no cumple con el formato establecido'}}})
    @Type(()=>String)
    ema_vrf: string;

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

    @Expose({ name: 'foto' })
    @Matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/, {message: ()=>{throw{status:401, message:'¡ERROR! Los datos de la foto no cumplen con los párametros establecidos'}}})
    @Type(()=>String)
    photo: string;

    @Expose({ name: 'password' })
    @IsDefined({message: ()=>{throw {status:401, message:'¡ERROR! El parametro password es obligatoria'}}})
    @MinLength(8,{message: ()=>{throw {status:401, message:'¡ERROR! El parametro password debe tener más de 8 carácteres'}}})
    @MaxLength(12, {message: ()=>{throw {status:401, message:'¡ERROR! El parametro password superó el limite de carácteres'}}})
    @Type(()=>String)
    pswd: String;

    @Expose({ name: 'created_at' })
    @IsOptional()
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    createdAt: Date;

    @Expose({ name: 'updated_at' })
    @IsOptional()
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
    updatedAt: Date;

    @Expose({ name: 'deleted_at' })
    @Transform(({ value }) => new Date(value))
    @Type(() => Date)
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
