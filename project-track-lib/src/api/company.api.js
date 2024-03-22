"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyApi = void 0;
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const MockData = tslib_1.__importStar(require("./dtos/mock.data"));
class CompanyApi {
    constructor(api) {
        this.api = api;
    }
    add(company) {
        return this.api.post('/Company/Add', company).pipe((0, operators_1.first)());
    }
    find(id) {
        // return this.api.post<IIdDto<number>, ICompanyDto>('/Company/Find', id).pipe(first());
        const company = MockData.companies.companies.find((p) => p.id == id.id);
        if (!company)
            throw 'no company';
        return (0, rxjs_1.of)(company);
    }
    list() {
        //return this.api.post<IDateRangeDto, ICompanyListDto>('/Company/List', dateRange).pipe(first());
        return (0, rxjs_1.of)(MockData.companies);
    }
    update(company) {
        return this.api.post('/Company/Update', company).pipe((0, operators_1.first)());
    }
    delete(id) {
        return this.api.post('/Company/Delete', id).pipe((0, operators_1.first)());
    }
}
exports.CompanyApi = CompanyApi;
//# sourceMappingURL=company.api.js.map