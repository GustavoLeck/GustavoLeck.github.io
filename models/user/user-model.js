"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var UserModel = /** @class */ (function () {
    function UserModel(usuario) {
        this.Nome = usuario === null || usuario === void 0 ? void 0 : usuario.Nome;
        this.Sobrenome = usuario.Sobrenome;
        this.Usuario = usuario.Usuario;
        this.Senha = usuario.Senha;
    }
    return UserModel;
}());
exports.UserModel = UserModel;
