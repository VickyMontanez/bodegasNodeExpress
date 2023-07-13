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
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del Id no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => { if (/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]\w+[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/.test(value))
        return value;
    else
        throw { status: 400, message: "Los datos del nombre no cumplen con los párametros establecidos" }; }),
    __metadata("design:type", String)
], bodegas.prototype, "nom_user", void 0);
__decorate([
    Expose({ name: 'id_responsable' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del Responsable no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "responsableID", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del estado no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "estado_user", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del created_by no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "createdBy", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del update_by no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "updateBy", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    __metadata("design:type", Date)
], bodegas.prototype, "createdAt", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    __metadata("design:type", Date)
], bodegas.prototype, "updatedAt", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], bodegas.prototype, "deletedAt", void 0);
