import { Observable } from 'rxjs';
export declare abstract class HttpHelper {
    protected abstract readonly sessionToken$: Observable<string | null>;
    post<RequestBodyType, ResponseBodyType>(url: string, payload: RequestBodyType, userToken?: string): Observable<ResponseBodyType>;
    private static send;
}
