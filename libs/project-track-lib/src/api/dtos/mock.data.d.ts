import { ICompanyDto, ICompanyListDto, ILoginResultDto, IProjectDocument, IProjectDto, IProjectListDto, ITemplateDto, ITemplateListDto, IUserDto, IUserListDto, IUserProjectDocument } from './dtos.interface';
export declare const company1: ICompanyDto;
export declare const company2: ICompanyDto;
export declare const company3: ICompanyDto;
export declare const companies: ICompanyListDto;
export declare const adminUser: IUserDto;
export declare const contarctorUser1: IUserDto;
export declare const contarctorUser2: IUserDto;
export declare const user1: IUserDto;
export declare const user2: IUserDto;
export declare const user3: IUserDto;
export declare const user4: IUserDto;
export declare const user5: IUserDto;
export declare const user6: IUserDto;
export declare const user7: IUserDto;
export declare const user8: IUserDto;
export declare const user9: IUserDto;
export declare const user10: IUserDto;
export declare const user11: IUserDto;
export declare const user12: IUserDto;
export declare const user13: IUserDto;
export declare const users: IUserListDto;
export declare const template1: ITemplateDto;
export declare const template2: ITemplateDto;
export declare const templates: ITemplateListDto;
export declare const loginSuccess: (userId: string) => ILoginResultDto;
export declare const loginFailed: {
    success: boolean;
    error: string;
    token: string;
    validTo: string;
    userId: string;
};
export declare const document1: IProjectDocument;
export declare const document2: IProjectDocument;
export declare const document3: IProjectDocument;
export declare const document4: IProjectDocument;
export declare const project1: IProjectDto;
export declare const project2: IProjectDto;
export declare const projects: IProjectListDto;
export declare const userDocument: (userId: string, project: IProjectDto, document: IProjectDocument) => IUserProjectDocument;
