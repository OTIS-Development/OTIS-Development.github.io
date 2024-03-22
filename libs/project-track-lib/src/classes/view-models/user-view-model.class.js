"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserViewModel = void 0;
class UserViewModel {
    constructor(model) {
        this.name = model.fullName;
        this.company = model.companyName;
        this.email = model.email;
        this.isRegistered = model.isRegistered;
        this.id = model.id;
    }
}
exports.UserViewModel = UserViewModel;
//# sourceMappingURL=user-view-model.class.js.map