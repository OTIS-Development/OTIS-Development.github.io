import { Observable } from 'rxjs';
import { IBasicResultDto, IForgotPasswordDto, ILoginDto, ILoginResultDto, IPasswordDto, IRegisterDto } from './dtos';
import { HttpHelper } from './http-helper.class';
export declare class AuthenticationApi {
    private readonly api;
    constructor(api: HttpHelper);
    login(credentials: ILoginDto): Observable<ILoginResultDto>;
    register(newUserData: IRegisterDto): Observable<ILoginResultDto>;
    forgotPassword(email: IForgotPasswordDto): Observable<void>;
    resetPassword(newPassword: IPasswordDto, userToken: string): Observable<IBasicResultDto>;
}
