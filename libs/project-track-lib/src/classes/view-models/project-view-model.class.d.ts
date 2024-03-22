import { IProjectDto } from '../../api/dtos';
export declare class ProjectViewModel {
    date: string;
    description: string;
    address: string;
    id: number;
    constructor(model: IProjectDto);
}
