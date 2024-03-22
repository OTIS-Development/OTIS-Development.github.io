"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApi = void 0;
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const MockData = tslib_1.__importStar(require("./dtos/mock.data"));
const functions_1 = require("@project-track-lib/functions");
class UserApi {
    constructor(api) {
        this.api = api;
    }
    currentUserDetails() {
        // return this.api.post<undefined, IUserDto>('/User/SignedInUser', undefined).pipe(first());
        const user = (0, functions_1.getCurrentUser)();
        if (user)
            return (0, rxjs_1.of)(user);
        const err = new Error('no user logged in');
        return (0, rxjs_1.throwError)(() => err);
    }
    updateCurrentUserDetails(user) {
        return this.api.post('/User/UpdateSignedInUser', user).pipe((0, operators_1.first)());
    }
    changePassword(password) {
        return this.api.post('/User/ChangePassword', password).pipe((0, operators_1.first)());
    }
    add(user) {
        return this.api.post('/User/Add', user).pipe((0, operators_1.first)());
    }
    find(id) {
        // return this.api.post<IIdDto<string>, IUserDto>('/User/Find', id).pipe(first());
        const user = MockData.users.users.find((p) => p.id == id.id);
        if (!user)
            throw 'no user';
        return (0, rxjs_1.of)(user);
    }
    list() {
        //return this.api.post<IDateRangeDto, IUserListDto>('/User/List', dateRange).pipe(first());
        const currentUser = (0, functions_1.getCurrentUser)();
        if (!currentUser)
            return (0, rxjs_1.of)({ users: [] });
        if (currentUser.permissions.includes("ViewOtherCompanies" /* Permissions.ViewOtherCompanies */))
            return (0, rxjs_1.of)(MockData.users);
        const companyUsers = MockData.users.users.filter((u) => u.companyId === currentUser.companyId);
        return (0, rxjs_1.of)({ users: companyUsers });
    }
    update(user) {
        return this.api.post('/User/Update', user).pipe((0, operators_1.first)());
    }
    delete(id) {
        return this.api.post('/User/Delete', id).pipe((0, operators_1.first)());
    }
}
exports.UserApi = UserApi;
//# sourceMappingURL=user.api.js.map