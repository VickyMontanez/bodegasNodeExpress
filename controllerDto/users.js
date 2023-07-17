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
import { IsDefined, MaxLength, MinLength, IsEmail, IsString, IsInt, Matches, IsOptional } from "class-validator";
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
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro Id es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro Id no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], users.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro nombre es obligatorio' }; } }),
    IsString({ message: () => { throw { status: 401, message: '¡ERROR! El parametro nombre no cumple con el tipo de dato establecido' }; } }),
    MaxLength(50, { message: () => { throw { status: 401, message: '¡ERROR! El parametro nombre superó el limite de carácteres' }; } }),
    Matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/, { message: () => { throw { status: 401, message: '¡ERROR! El parámetro nombre contiene caracteres no válidos' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "nom_com", void 0);
__decorate([
    Expose({ name: 'email' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro email es obligatorio' }; } }),
    IsEmail({}, { message: () => { throw { status: 401, message: '¡ERROR! El parametro email no cumple con el formato establecido' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "ema", void 0);
__decorate([
    Expose({ name: 'verify_email' }),
    IsEmail({}, { message: () => { throw { status: 401, message: '¡ERROR! El parametro email no cumple con el formato establecido' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "ema_vrf", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro estado es obligatorio' }; } }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro estado no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], users.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], users.prototype, "createdBy", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    IsInt({ message: () => { throw { status: 401, message: '¡ERROR! El parametro created_by no cumple con el tipo de dato establecido' }; } }),
    Type(() => Number),
    __metadata("design:type", Number)
], users.prototype, "updateBy", void 0);
__decorate([
    Expose({ name: 'foto' }),
    Matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/, { message: () => { throw { status: 401, message: '¡ERROR! Los datos de la foto no cumplen con los párametros establecidos' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "photo", void 0);
__decorate([
    Expose({ name: 'password' }),
    IsDefined({ message: () => { throw { status: 401, message: '¡ERROR! El parametro password es obligatoria' }; } }),
    MinLength(8, { message: () => { throw { status: 401, message: '¡ERROR! El parametro password debe tener más de 8 carácteres' }; } }),
    MaxLength(12, { message: () => { throw { status: 401, message: '¡ERROR! El parametro password superó el limite de carácteres' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], users.prototype, "pswd", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    IsOptional(),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], users.prototype, "createdAt", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    IsOptional(),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], users.prototype, "updatedAt", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => new Date(value)),
    Type(() => Date),
    __metadata("design:type", Date)
], users.prototype, "deletedAt", void 0);
