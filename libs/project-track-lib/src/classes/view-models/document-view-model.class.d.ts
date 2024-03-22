import { IUserProjectDocument } from '../../api/dtos';
export declare class DocumentViewModel {
    projectId: number;
    documentId: number;
    name: string;
    lastUpdated: string;
    url: string;
    userId: string;
    signed: boolean;
    constructor(model: IUserProjectDocument);
}
