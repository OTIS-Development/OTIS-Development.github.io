export interface IDateRangeDto {
    start: Date;
    end: Date;
}
export interface IDeleteResultDto {
    success: boolean;
}
export interface IIdDto<T> {
    id: T;
}
export interface ILoginDto {
    email: string;
    password: string;
}
export interface ILoginResultDto {
    success: boolean;
    error: string;
    token: string;
    validTo: string;
    userId: string;
}
export interface IRegisterDto {
    email: string;
    password: string;
    dateOfBirth: Date;
    fullName: string;
}
export interface IProjectDto {
    date: string;
    name: string;
    address: string;
    users: IProjectUser[];
    documents: IProjectDocument[];
    id: number;
}
export interface IProjectUser {
    name: string;
    companyId: number;
    userId: string;
    role: string;
    RAMSCompliant: boolean;
}
export interface IProjectDocument {
    id: number;
    name: string;
    lastUpdated: string;
    url: string;
    signatures: IProjectSignature[];
}
export interface IUserProjectDocument {
    projectId: number;
    documentId: number;
    name: string;
    lastUpdated: string;
    url: string;
    userId: string;
    signed: boolean;
}
export interface IProjectSignature {
    userId: string;
    signed: boolean;
}
export interface IDocumentListDto {
    documents: IUserProjectDocument[];
}
export interface IProjectListDto {
    projects: IProjectDto[];
}
export interface IUpdateResultDto {
    success: boolean;
    error: string;
}
export interface IUserDto {
    id: string;
    email: string;
    dateOfBirth: string;
    fullName: string;
    companyId: number;
    isRegistered: boolean;
    permissions: string[];
    companyName: string;
}
export interface IUserListDto {
    users: IUserDto[];
}
export interface ICompanyDto {
    id: number;
    name: string;
    type: string;
}
export interface ICompanyListDto {
    companies: ICompanyDto[];
}
export interface ITemplateDto {
    id: number;
    name: string;
    type: string;
    url: string;
    data: unknown;
}
export interface ITemplateListDto {
    templates: ITemplateDto[];
}
export interface IBasicResultDto {
    success: boolean;
    error: string;
}
export interface IForgotPasswordDto {
    email: string;
}
export interface IPasswordDto {
    password: string;
}
export declare enum Frequency {
    day = 0,
    week = 1,
    month = 2,
    year = 3,
    fortnight = 4,
    fourWeek = 5
}
