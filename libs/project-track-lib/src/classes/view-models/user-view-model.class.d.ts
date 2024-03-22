import { IUserDto } from '../../api/dtos';
export declare class UserViewModel {
    name: string;
    company: string;
    email: string;
    isRegistered: boolean;
    id: string;
    constructor(model: IUserDto);
}
