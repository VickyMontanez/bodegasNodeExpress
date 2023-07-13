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
export class productos {
    constructor(ID, nom_prd, desp, estado, createdBy, updateBy, photo, pswd, createdAt, updatedAt, deletedAt) {
        this.ID = ID;
        this.nom_prd = nom_prd;
        this.desp = desp;
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
__decorate([
    Expose({ name: 'id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del Id no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => { if (/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]\w+[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/.test(value))
        return value;
    else
        throw { status: 400, message: "Los datos del nombre del producto no cumplen con los párametros establecidos" }; }),
    __metadata("design:type", String)
], productos.prototype, "nom_prd", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return value;
    else
        throw { status: 400, message: "Los datos de la descripción no cumplen con los párametros establecidos" }; }),
    __metadata("design:type", String)
], productos.prototype, "desp", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del estado no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del created_by no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "createdBy", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del update_by no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "updateBy", void 0);
__decorate([
    Expose({ name: 'foto' }),
    Transform(({ value }) => {
        if (/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(value))
            return value;
        else
            throw { status: 400, message: "Los datos de la foto no cumplen con los párametros establecidos" };
    }),
    __metadata("design:type", String)
], productos.prototype, "photo", void 0);
__decorate([
    Expose({ name: 'contraseña' }),
    Transform(({ value }) => {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value))
            return value;
        else
            throw { status: 400, message: "Los datos de la contraseña no cumplen con los párametros establecidos" };
    }),
    __metadata("design:type", String)
], productos.prototype, "pswd", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    __metadata("design:type", Date)
], productos.prototype, "createdAt", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    __metadata("design:type", Date)
], productos.prototype, "updatedAt", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], productos.prototype, "deletedAt", void 0);
