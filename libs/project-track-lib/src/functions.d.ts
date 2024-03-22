import { Frequency, IUserDto } from './api/dtos';
export declare function groupBy<T, K>(list: T[], toKey: (item: T) => K): Map<K, T[]>;
export declare function toInputDateString(text: string): string;
export declare function randomColor(): string;
export declare function toDateString(date: Date): string;
export declare function toFrequencyString(frequency: Frequency | null): string;
export declare function getCurrentUser(): IUserDto | undefined;
