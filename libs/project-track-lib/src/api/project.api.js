"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectApi = void 0;
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const MockData = tslib_1.__importStar(require("./dtos/mock.data"));
const functions_1 = require("@project-track-lib/functions");
class ProjectApi {
    constructor(api) {
        this.api = api;
    }
    add(project) {
        return this.api.post('/Project/Add', project).pipe((0, operators_1.first)());
    }
    find(id) {
        // return this.api.post<IIdDto<number>, IProjectDto>('/Project/Find', id).pipe(first());
        const project = MockData.projects.projects.find((p) => p.id == id.id);
        if (!project)
            throw 'no project';
        return (0, rxjs_1.of)(project);
    }
    findDocument(id) {
        // return this.api.post<IIdDto<number>, IProjectDto>('/Project/Find', id).pipe(first());
        return this.listDocuments({ end: new Date(), start: new Date() }).pipe((0, operators_1.map)((documents) => {
            const document = documents.documents.find((d) => d.documentId == id.id);
            if (!document)
                throw 'no document';
            return document;
        }));
    }
    list(dateRange) {
        //return this.api.post<IDateRangeDto, IProjectListDto>('/Project/List', dateRange).pipe(first());
        return (0, rxjs_1.of)(MockData.projects);
    }
    listDocuments(dateRange) {
        //return this.api.post<IDateRangeDto, IProjectListDto>('/Project/List', dateRange).pipe(first());
        const currentUser = (0, functions_1.getCurrentUser)();
        if (!currentUser)
            return (0, rxjs_1.of)({ documents: [] });
        const documents = [];
        for (const project of MockData.projects.projects) {
            const isUserProject = Boolean(project.users.find((u) => u.userId == currentUser.id));
            if (!isUserProject)
                continue;
            for (const document of project.documents) {
                documents.push(MockData.userDocument(currentUser.id, project, document));
            }
        }
        return (0, rxjs_1.of)({ documents });
    }
    update(project) {
        return this.api.post('/Project/Update', project).pipe((0, operators_1.first)());
    }
    delete(id) {
        return this.api.post('/Project/Delete', id).pipe((0, operators_1.first)());
    }
}
exports.ProjectApi = ProjectApi;
//# sourceMappingURL=project.api.js.map