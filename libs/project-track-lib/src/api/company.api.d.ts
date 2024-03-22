import { Observable } from 'rxjs';
import { IDeleteResultDto, IIdDto, ICompanyDto, ICompanyListDto, IUpdateResultDto } from './dtos';
import { HttpHelper } from './http-helper.class';
export declare class CompanyApi {
    private readonly api;
    constructor(api: HttpHelper);
    add(company: ICompanyDto): Observable<ICompanyDto>;
    find(id: IIdDto<number>): Observable<ICompanyDto>;
    list(): Observable<ICompanyListDto>;
    update(company: ICompanyDto): Observable<IUpdateResultDto>;
    delete(id: IIdDto<number>): Observable<IDeleteResultDto>;
}
