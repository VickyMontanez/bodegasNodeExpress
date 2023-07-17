var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, IsString, IsInt, Matches, IsOptional } from "class-validator";
export class productos {
    constructor(ID, nom_prd, desp, estado, createdBy, updateBy, createdAt, updatedAt, deletedAt) {
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
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro Id es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro Id no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], productos.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro nombre del producto es obligatorio' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! El parametro nombre del producto no cumple con el tipo de dato establecido' }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: '¡ERROR! El parametro nombre del producto superó el limite de carácteres' }; } }),
    Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, { message: () => { throw { status: 401, message: '¡ERROR! El parámetro nombre del producto contiene caracteres no válidos' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], productos.prototype, "nom_prd", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro descripción del producto es obligatorio' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! El parametro descripción del producto no cumple con el tipo de dato establecido' }; } }),
    Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, { message: () => { throw { status: 401, message: '¡ERROR! El parámetro descripción del producto contiene caracteres no válidos' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], productos.prototype, "desp", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro estado es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro estado no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], productos.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], productos.prototype, "createdBy", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], productos.prototype, "updateBy", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    IsOptional(),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], productos.prototype, "createdAt", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], productos.prototype, "updatedAt", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], productos.prototype, "deletedAt", void 0);
