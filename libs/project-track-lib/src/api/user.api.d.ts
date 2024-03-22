import { Observable } from 'rxjs';
import { IBasicResultDto, IDeleteResultDto, IIdDto, IPasswordDto, IUpdateResultDto, IUserDto, IUserListDto } from './dtos/dtos.interface';
import { HttpHelper } from './http-helper.class';
export declare class UserApi {
    private readonly api;
    constructor(api: HttpHelper);
    currentUserDetails(): Observable<IUserDto>;
    updateCurrentUserDetails(user: IUserDto): Observable<IBasicResultDto>;
    changePassword(password: IPasswordDto): Observable<IBasicResultDto>;
    add(user: IUserDto): Observable<IUserDto>;
    find(id: IIdDto<string>): Observable<IUserDto>;
    list(): Observable<IUserListDto>;
    update(user: IUserDto): Observable<IUpdateResultDto>;
    delete(id: IIdDto<string>): Observable<IDeleteResultDto>;
}
