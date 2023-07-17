import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, IsInt, IsOptional} from "class-validator";

export class historiales {

    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro Id es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro Id no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    ID: number;

    @Expose({ name: 'cantidad' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro cantidad es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro cantidad no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    cantidad : number;

    @Expose({ name: 'inventario' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro bodega es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro bodega no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    id_inventario: number;

    @Expose({ name: 'bodega_origen' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro producto es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro producto no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    id_bodega_origen: number;

    @Expose({ name: 'bodega_destino' })
    @IsDefined({message: ()=>{throw {status: 401, message: '¡ERROR! El parametro producto es obligatorio'}}})
    @IsInt({message: ()=>{throw {status:401, message: '¡ERROR! El parametro producto no cumple con el tipo de dato establecido'}}})
    @Type(()=>Number)
    id_bodega_destino: number;

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
        cantidad: number,
        inventario:number,
        bodega_destino: number,
        bodega_origen: number,
        createdBy: number,
        updateBy: number,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date
    ) {
        this.ID = ID;
        this.cantidad = cantidad;
        this.id_inventario = inventario,
        this.id_bodega_origen = bodega_origen;
        this.id_bodega_destino = bodega_destino;
        this.createdBy = createdBy;
        this.updateBy = updateBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

}
