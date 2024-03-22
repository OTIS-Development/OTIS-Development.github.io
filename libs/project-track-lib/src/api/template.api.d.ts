import { Observable } from 'rxjs';
import { IDeleteResultDto, IIdDto, ITemplateDto, ITemplateListDto, IUpdateResultDto } from './dtos';
import { HttpHelper } from './http-helper.class';
export declare class TemplateApi {
    private readonly api;
    constructor(api: HttpHelper);
    add(template: ITemplateDto): Observable<ITemplateDto>;
    find(id: IIdDto<number>): Observable<ITemplateDto>;
    list(): Observable<ITemplateListDto>;
    update(template: ITemplateDto): Observable<IUpdateResultDto>;
    delete(id: IIdDto<number>): Observable<IDeleteResultDto>;
}
