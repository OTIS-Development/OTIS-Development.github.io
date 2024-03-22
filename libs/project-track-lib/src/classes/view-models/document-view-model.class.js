"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentViewModel = void 0;
class DocumentViewModel {
    constructor(model) {
        this.projectId = model.projectId;
        this.documentId = model.documentId;
        this.name = model.name;
        this.lastUpdated = model.lastUpdated;
        this.url = model.url;
        this.userId = model.userId;
        this.signed = model.signed;
    }
}
exports.DocumentViewModel = DocumentViewModel;
//# sourceMappingURL=document-view-model.class.js.map