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
export class users {
    constructor(ID, nom_com, ema, ema_vrf, estado, createdBy, updateBy, photo, pswd, createdAt, updatedAt, deletedAt) {
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
__decorate([
    Expose({ name: 'id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del Id no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], users.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => { if (/^[a-z A-z]*$/.test(value))
        return value;
    else
        throw { status: 400, message: "Los datos del nombre no cumplen con los párametros establecidos" }; }),
    __metadata("design:type", String)
], users.prototype, "nom_com", void 0);
__decorate([
    Expose({ name: 'email' }),
    Transform(({ value }) => { if (/\$+@\$+\.\$+/.test(value))
        return value;
    else
        throw { status: 400, message: "Los datos del email no cumplen con los párametros establecidos" }; }),
    __metadata("design:type", String)
], users.prototype, "ema", void 0);
__decorate([
    Expose({ name: 'verify_email' }),
    Transform(({ value }) => { if (/\$+@\$+\.\$+/.test(value))
        return value;
    else
        throw { status: 400, message: "Los datos del email no cumplen con los párametros establecidos" }; }),
    __metadata("design:type", String)
], users.prototype, "ema_vrf", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del estado no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], users.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del created_by no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], users.prototype, "createdBy", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: "Los datos del update_by no cumple con los párametros establecidos" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], users.prototype, "updateBy", void 0);
__decorate([
    Expose({ name: 'foto' }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "photo", void 0);
__decorate([
    Expose({ name: 'contraseña' }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "pswd", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    __metadata("design:type", Date)
], users.prototype, "createdAt", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    __metadata("design:type", Date)
], users.prototype, "updatedAt", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], users.prototype, "deletedAt", void 0);
