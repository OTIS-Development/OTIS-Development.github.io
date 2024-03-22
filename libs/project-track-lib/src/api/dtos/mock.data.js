"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDocument = exports.projects = exports.project2 = exports.project1 = exports.document4 = exports.document3 = exports.document2 = exports.document1 = exports.loginFailed = exports.loginSuccess = exports.templates = exports.template2 = exports.template1 = exports.users = exports.user13 = exports.user12 = exports.user11 = exports.user10 = exports.user9 = exports.user8 = exports.user7 = exports.user6 = exports.user5 = exports.user4 = exports.user3 = exports.user2 = exports.user1 = exports.contarctorUser2 = exports.contarctorUser1 = exports.adminUser = exports.companies = exports.company3 = exports.company2 = exports.company1 = void 0;
exports.company1 = {
    id: 1,
    name: 'OTIS',
    type: 'Admin',
};
exports.company2 = {
    id: 2,
    name: 'DCD Plastering',
    type: 'Admin',
};
exports.company3 = {
    id: 3,
    name: 'Mike Floors Ltd',
    type: 'Contractor',
};
exports.companies = {
    companies: [exports.company1, exports.company2, exports.company3],
};
exports.adminUser = {
    id: '68d67b06-95e5-4017-bb41-7171d0ab2e4d',
    email: 'joe.bloggs@mail.com',
    dateOfBirth: '12/02/1997',
    fullName: 'Joe Bloggs',
    companyId: exports.company1.id,
    companyName: exports.company1.name,
    isRegistered: true,
    permissions: [
        "ViewCompanies" /* Permissions.ViewCompanies */,
        "ViewOtherCompanies" /* Permissions.ViewOtherCompanies */,
        "ViewProjects" /* Permissions.ViewProjects */,
        "ViewTemplates" /* Permissions.ViewTemplates */,
        "ViewUsers" /* Permissions.ViewUsers */,
    ],
};
exports.contarctorUser1 = {
    id: 'd720d3a7-43c0-4ff5-b373-46fb71fc197d',
    email: 'donald.gaines@mail.com',
    dateOfBirth: '1/23/2000',
    fullName: 'Donald Gaines',
    companyId: exports.company3.id,
    companyName: exports.company3.name,
    isRegistered: true,
    permissions: ["SignDocuments" /* Permissions.SignDocuments */],
};
exports.contarctorUser2 = {
    id: 'b506a4bb-46cd-4ae2-93a9-9650eed6d225',
    email: 'david.case@mail.com',
    dateOfBirth: '09/24/1978',
    fullName: 'David Case',
    companyId: exports.company1.id,
    companyName: exports.company1.name,
    isRegistered: true,
    permissions: ["SignDocuments" /* Permissions.SignDocuments */, "ViewUsers" /* Permissions.ViewUsers */],
};
exports.user1 = {
    id: '77f0926b-67b5-4882-9597-018f6d51cd34',
    email: 'greg.harlow@mail.com',
    dateOfBirth: '12/02/1997',
    fullName: 'Greg Harlow',
    companyId: exports.company2.id,
    companyName: exports.company2.name,
    isRegistered: true,
    permissions: [],
};
exports.user2 = {
    id: '41cbab1e-7999-4463-8f80-1e264494baa8',
    email: 'amanda.pearson@mail.com',
    dateOfBirth: '18/05/1992',
    fullName: 'Amanda Pearson',
    companyId: exports.company2.id,
    companyName: exports.company2.name,
    isRegistered: true,
    permissions: [],
};
exports.user3 = {
    id: '48b4eec7-e09b-418c-ab40-848af430b41e',
    email: 'ronald.rowe@mail.com',
    dateOfBirth: '18/05/1992',
    fullName: 'Ronald Rowe',
    companyId: exports.company2.id,
    companyName: exports.company2.name,
    isRegistered: true,
    permissions: [],
};
exports.user4 = {
    id: '773c7422-e068-4239-be22-00679a1a4aaf',
    email: 'jose.yancey@mail.com',
    dateOfBirth: '18/05/1992',
    fullName: 'Jose Yancey',
    companyId: exports.company2.id,
    companyName: exports.company2.name,
    isRegistered: true,
    permissions: [],
};
exports.user5 = {
    id: 'a34b9823-d831-467b-9fec-45af9a1b472e',
    email: 'maria.smith@mail.com',
    dateOfBirth: '24/07/1989',
    fullName: 'Maria Smith',
    companyId: exports.company1.id,
    companyName: exports.company1.name,
    isRegistered: true,
    permissions: [],
};
exports.user6 = {
    id: 'b45c9934-e532-478b-a1ed-76fa9b2b545f',
    email: 'john.doe@mail.com',
    dateOfBirth: '15/02/1990',
    fullName: 'John Doe',
    companyId: exports.company2.id,
    companyName: exports.company2.name,
    isRegistered: true,
    permissions: [],
};
exports.user7 = {
    id: 'c56da045-f633-489b-b1ee-87fb9c3c6560',
    email: 'lisa.white@mail.com',
    dateOfBirth: '09/11/1988',
    fullName: 'Lisa White',
    companyId: exports.company1.id,
    companyName: exports.company1.name,
    isRegistered: true,
    permissions: [],
};
exports.user8 = {
    id: 'd67eb156-g734-59dc-c2ff-98gc9d4d7671',
    email: 'david.brown@mail.com',
    dateOfBirth: '22/03/1991',
    fullName: 'David Brown',
    companyId: exports.company2.id,
    companyName: exports.company2.name,
    isRegistered: true,
    permissions: [],
};
exports.user9 = {
    id: 'e78fc267-h845-60ed-d3gg-19he9e5e8782',
    email: 'susan.green@mail.com',
    dateOfBirth: '01/08/1987',
    fullName: 'Susan Green',
    companyId: exports.company3.id,
    companyName: exports.company3.name,
    isRegistered: true,
    permissions: [],
};
exports.user10 = {
    id: 'f89gd378-i956-71fe-e4hh-20if0f6f9893',
    email: 'james.oak@mail.com',
    dateOfBirth: '17/04/1992',
    fullName: 'James Oak',
    companyId: exports.company3.id,
    companyName: exports.company3.name,
    isRegistered: true,
    permissions: [],
};
exports.user11 = {
    id: 'g90he489-j067-82gf-f5ii-31jg1g7g0a04',
    email: 'emma.stone@mail.com',
    dateOfBirth: '29/01/1986',
    fullName: 'Emma Stone',
    companyId: exports.company1.id,
    companyName: exports.company1.name,
    isRegistered: true,
    permissions: [],
};
exports.user12 = {
    id: 'h01if590-k178-93hg-g6jj-42kh2h8h1b15',
    email: 'michael.knight@mail.com',
    dateOfBirth: '05/06/1993',
    fullName: 'Michael Knight',
    companyId: exports.company2.id,
    companyName: exports.company2.name,
    isRegistered: true,
    permissions: [],
};
exports.user13 = {
    id: 'i12jg601-l289-04ih-h7kk-53li3i9i2c26',
    email: 'natalie.port@mail.com',
    dateOfBirth: '12/12/1994',
    fullName: 'Natalie Port',
    companyId: exports.company3.id,
    companyName: exports.company3.name,
    isRegistered: true,
    permissions: [],
};
exports.users = {
    users: [
        exports.adminUser,
        exports.contarctorUser1,
        exports.contarctorUser2,
        exports.user1,
        exports.user2,
        exports.user3,
        exports.user4,
        exports.user5,
        exports.user6,
        exports.user7,
        exports.user8,
        exports.user9,
        exports.user10,
        exports.user11,
        exports.user12,
        exports.user13,
    ],
};
exports.template1 = {
    data: {},
    id: 1,
    type: 'RAM',
    name: 'MS-DCD-154-revA.pdf',
    url: '/assets/MS-DCD-154-revA.pdf',
};
exports.template2 = {
    data: {},
    id: 2,
    type: 'RAM',
    name: 'RA-DCD154-RevB.pdf',
    url: '/assets/RA-DCD154-RevB.pdf',
};
exports.templates = {
    templates: [exports.template1, exports.template2],
};
const nowPlus = (hours, days) => {
    const now = new Date();
    now.setHours(now.getHours() + hours);
    now.setDate(now.getDate() + days);
    return now;
};
const loginSuccess = (userId) => {
    return { success: true, error: '', token: 'mock JWT', validTo: nowPlus(2, 0).toISOString(), userId };
};
exports.loginSuccess = loginSuccess;
exports.loginFailed = { success: false, error: 'User does not exist', token: '', validTo: '', userId: '' };
exports.document1 = {
    id: 1,
    lastUpdated: nowPlus(0, -23).toISOString(),
    name: exports.template1.name,
    url: exports.template1.url,
    signatures: [
        { signed: false, userId: exports.user1.id },
        { signed: true, userId: exports.user2.id },
        { signed: true, userId: exports.user3.id },
        { signed: true, userId: exports.user4.id },
        { signed: false, userId: exports.contarctorUser1.id },
    ],
};
exports.document2 = {
    id: 2,
    lastUpdated: nowPlus(0, -56).toISOString(),
    name: exports.template2.name,
    url: exports.template2.url,
    signatures: [
        { signed: true, userId: exports.user1.id },
        { signed: true, userId: exports.user2.id },
        { signed: true, userId: exports.user3.id },
        { signed: true, userId: exports.user4.id },
        { signed: false, userId: exports.contarctorUser1.id },
    ],
};
exports.document3 = {
    id: 3,
    lastUpdated: nowPlus(0, -23).toISOString(),
    name: exports.template1.name,
    url: exports.template1.url,
    signatures: [
        { signed: true, userId: exports.user1.id },
        { signed: true, userId: exports.user2.id },
        { signed: true, userId: exports.user3.id },
        { signed: true, userId: exports.user4.id },
        { signed: true, userId: exports.user6.id },
        { signed: true, userId: exports.user7.id },
        { signed: true, userId: exports.user12.id },
        { signed: true, userId: exports.user10.id },
    ],
};
exports.document4 = {
    id: 4,
    lastUpdated: nowPlus(0, -56).toISOString(),
    name: exports.template2.name,
    url: exports.template2.url,
    signatures: [
        { signed: true, userId: exports.user1.id },
        { signed: true, userId: exports.user2.id },
        { signed: true, userId: exports.user3.id },
        { signed: true, userId: exports.user4.id },
        { signed: true, userId: exports.user6.id },
        { signed: true, userId: exports.user7.id },
        { signed: true, userId: exports.user12.id },
        { signed: true, userId: exports.user10.id },
    ],
};
exports.project1 = {
    address: '34 Agmatige road, Perry Heath, B75 3DY',
    date: nowPlus(0, 0).toLocaleDateString(),
    documents: [exports.document1, exports.document2],
    name: 'Alaster & Makfe',
    id: 1,
    users: [
        {
            companyId: exports.user1.companyId,
            name: exports.user1.fullName,
            userId: exports.user1.id,
            RAMSCompliant: false,
            role: 'Contractor',
        },
        {
            companyId: exports.user2.companyId,
            name: exports.user2.fullName,
            userId: exports.user2.id,
            RAMSCompliant: true,
            role: 'Electrician',
        },
        {
            companyId: exports.user3.companyId,
            name: exports.user3.fullName,
            userId: exports.user3.id,
            RAMSCompliant: true,
            role: 'Plumber',
        },
        {
            companyId: exports.user4.companyId,
            name: exports.user4.fullName,
            userId: exports.user4.id,
            RAMSCompliant: true,
            role: 'Plumber',
        },
        {
            companyId: exports.contarctorUser1.companyId,
            name: exports.contarctorUser1.fullName,
            userId: exports.contarctorUser1.id,
            RAMSCompliant: false,
            role: 'Plumber',
        },
    ],
};
exports.project2 = {
    address: 'Unit 1 Industrial Estate, London, LN3 3DY',
    date: nowPlus(0, 0).toLocaleDateString(),
    documents: [exports.document3, exports.document4],
    name: 'Unit 1 Makeover',
    id: 2,
    users: [
        {
            companyId: exports.user1.companyId,
            name: exports.user1.fullName,
            userId: exports.user1.id,
            RAMSCompliant: true,
            role: 'Contractor',
        },
        {
            companyId: exports.user2.companyId,
            name: exports.user2.fullName,
            userId: exports.user2.id,
            RAMSCompliant: true,
            role: 'Electrician',
        },
        {
            companyId: exports.user3.companyId,
            name: exports.user3.fullName,
            userId: exports.user3.id,
            RAMSCompliant: true,
            role: 'Plumber',
        },
        {
            companyId: exports.user4.companyId,
            name: exports.user4.fullName,
            userId: exports.user4.id,
            RAMSCompliant: true,
            role: 'Plumber',
        },
        {
            companyId: exports.user6.companyId,
            name: exports.user6.fullName,
            userId: exports.user6.id,
            RAMSCompliant: true,
            role: 'Contractor',
        },
        {
            companyId: exports.user7.companyId,
            name: exports.user7.fullName,
            userId: exports.user7.id,
            RAMSCompliant: true,
            role: 'Electrician',
        },
        {
            companyId: exports.user12.companyId,
            name: exports.user12.fullName,
            userId: exports.user12.id,
            RAMSCompliant: true,
            role: 'Plumber',
        },
        {
            companyId: exports.user10.companyId,
            name: exports.user10.fullName,
            userId: exports.user10.id,
            RAMSCompliant: true,
            role: 'Plumber',
        },
    ],
};
exports.projects = {
    projects: [exports.project1, exports.project2],
};
const userDocument = (userId, project, document) => {
    return {
        projectId: project.id,
        documentId: document.id,
        lastUpdated: document.lastUpdated,
        name: document.name,
        signed: document.signatures.find((s) => s.userId == userId)?.signed ?? false,
        url: document.url,
        userId: userId,
    };
};
exports.userDocument = userDocument;
//# sourceMappingURL=mock.data.js.map