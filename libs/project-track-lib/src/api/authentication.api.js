"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationApi = void 0;
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const MockData = tslib_1.__importStar(require("./dtos/mock.data"));
class AuthenticationApi {
    constructor(api) {
        this.api = api;
    }
    login(credentials) {
        // return this.api.post<ILoginDto, ILoginResultDto>('/Authentication/Login', credentials).pipe(first());
        const user = MockData.users.users.find((u) => u.email === credentials.email.toLocaleLowerCase());
        if (!user) {
            return (0, rxjs_1.of)(MockData.loginFailed);
        }
        return (0, rxjs_1.of)(MockData.loginSuccess(user.id));
    }
    register(newUserData) {
        return this.api.post('/Authentication/Register', newUserData).pipe((0, operators_1.first)());
    }
    forgotPassword(email) {
        return this.api.post('/Authentication/ForgotPassword', email).pipe((0, operators_1.first)());
    }
    resetPassword(newPassword, userToken) {
        return this.api.post('/User/ChangePassword', newPassword, userToken).pipe((0, operators_1.first)());
    }
}
exports.AuthenticationApi = AuthenticationApi;
//# sourceMappingURL=authentication.api.js.map