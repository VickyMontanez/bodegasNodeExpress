var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
export class inventarios {
    constructor(ID, cantidad, bodega, producto, createdBy, updateBy, createdAt, updatedAt, deletedAt) {
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
__decorate([
    Expose({ name: 'id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del Id no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'cantidad' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos de la cantidad no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'bodega' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos de la bodega no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: 'producto' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del producto no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del Creador no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "createdBy", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del Actualizador no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "updateBy", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    __metadata("design:type", Date)
], inventarios.prototype, "createdAt", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    __metadata("design:type", Date)
], inventarios.prototype, "updatedAt", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], inventarios.prototype, "deletedAt", void 0);
