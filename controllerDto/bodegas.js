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
export class bodegas {
    constructor(ID, nom_user, responsableID, estado_user, createdBy, updateBy, createdAt, updatedAt, deletedAt) {
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
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro Id es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro Id no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bodegas.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro nombre del usuario es obligatorio' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! El parametro nombre del usuario no cumple con el tipo de dato establecido' }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: '¡ERROR! El parametro nombre del usuario superó el limite de carácteres' }; } }),
    Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, { message: () => { throw { status: 401, message: '¡ERROR! El parámetro nombre del usuario contiene caracteres no válidos' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], bodegas.prototype, "nom_user", void 0);
__decorate([
    Expose({ name: 'id_responsable' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro id_responsable es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro id_responsable no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bodegas.prototype, "responsableID", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro estado es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro estado no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bodegas.prototype, "estado_user", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bodegas.prototype, "createdBy", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], bodegas.prototype, "updateBy", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    IsOptional(),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], bodegas.prototype, "createdAt", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], bodegas.prototype, "updatedAt", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], bodegas.prototype, "deletedAt", void 0);
