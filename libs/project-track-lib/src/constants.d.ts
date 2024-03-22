import { Frequency } from './api/dtos';
export declare const SESSION_LOCAL_STORAGE_KEY = "my-money:session";
export declare const frequencyOptions: {
    key: Frequency;
    value: string;
}[];
export declare const enum Permissions {
    ViewUsers = "ViewUsers",
    ViewCompanies = "ViewCompanies",
    ViewOtherCompanies = "ViewOtherCompanies",
    ViewProjects = "ViewProjects",
    ViewTemplates = "ViewTemplates",
    SignDocuments = "SignDocuments"
}
