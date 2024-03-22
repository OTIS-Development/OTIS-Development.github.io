"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateApi = void 0;
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const MockData = tslib_1.__importStar(require("./dtos/mock.data"));
class TemplateApi {
    constructor(api) {
        this.api = api;
    }
    add(template) {
        return this.api.post('/Template/Add', template).pipe((0, operators_1.first)());
    }
    find(id) {
        // return this.api.post<IIdDto<number>, ITemplateDto>('/Template/Find', id).pipe(first());
        const template = MockData.templates.templates.find((p) => p.id == id.id);
        if (!template)
            throw 'no template';
        return (0, rxjs_1.of)(template);
    }
    list() {
        //return this.api.post<IDateRangeDto, ITemplateListDto>('/Template/List', dateRange).pipe(first());
        return (0, rxjs_1.of)(MockData.templates);
    }
    update(template) {
        return this.api.post('/Template/Update', template).pipe((0, operators_1.first)());
    }
    delete(id) {
        return this.api.post('/Template/Delete', id).pipe((0, operators_1.first)());
    }
}
exports.TemplateApi = TemplateApi;
//# sourceMappingURL=template.api.js.map