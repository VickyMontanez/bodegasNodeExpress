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
import { IsDefined, IsInt, IsOptional } from "class-validator";
export class historiales {
    constructor(ID, cantidad, inventario, bodega_destino, bodega_origen, createdBy, updateBy, createdAt, updatedAt, deletedAt) {
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
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro Id es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro Id no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], historiales.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'cantidad' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro cantidad es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro cantidad no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], historiales.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'inventario' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro bodega es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro bodega no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], historiales.prototype, "id_inventario", void 0);
__decorate([
    Expose({ name: 'bodega_origen' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro producto es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro producto no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], historiales.prototype, "id_bodega_origen", void 0);
__decorate([
    Expose({ name: 'bodega_destino' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro producto es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro producto no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], historiales.prototype, "id_bodega_destino", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], historiales.prototype, "createdBy", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], historiales.prototype, "updateBy", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    IsOptional(),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], historiales.prototype, "createdAt", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], historiales.prototype, "updatedAt", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], historiales.prototype, "deletedAt", void 0);
