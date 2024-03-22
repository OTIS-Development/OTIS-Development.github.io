import { Observable } from 'rxjs';
import { IDeleteResultDto, IIdDto, IProjectDto, IProjectListDto, IUpdateResultDto, IDateRangeDto, IDocumentListDto, IUserProjectDocument } from './dtos';
import { HttpHelper } from './http-helper.class';
export declare class ProjectApi {
    private readonly api;
    constructor(api: HttpHelper);
    add(project: IProjectDto): Observable<IProjectDto>;
    find(id: IIdDto<number>): Observable<IProjectDto>;
    findDocument(id: IIdDto<number>): Observable<IUserProjectDocument>;
    list(dateRange: IDateRangeDto): Observable<IProjectListDto>;
    listDocuments(dateRange: IDateRangeDto): Observable<IDocumentListDto>;
    update(project: IProjectDto): Observable<IUpdateResultDto>;
    delete(id: IIdDto<number>): Observable<IDeleteResultDto>;
}
