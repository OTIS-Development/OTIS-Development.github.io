"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frequencyOptions = exports.SESSION_LOCAL_STORAGE_KEY = void 0;
const dtos_1 = require("./api/dtos");
const functions_1 = require("./functions");
exports.SESSION_LOCAL_STORAGE_KEY = 'my-money:session';
exports.frequencyOptions = [
    { key: dtos_1.Frequency.day, value: (0, functions_1.toFrequencyString)(dtos_1.Frequency.day) },
    { key: dtos_1.Frequency.week, value: (0, functions_1.toFrequencyString)(dtos_1.Frequency.week) },
    { key: dtos_1.Frequency.fortnight, value: (0, functions_1.toFrequencyString)(dtos_1.Frequency.fortnight) },
    { key: dtos_1.Frequency.fourWeek, value: (0, functions_1.toFrequencyString)(dtos_1.Frequency.fourWeek) },
    { key: dtos_1.Frequency.month, value: (0, functions_1.toFrequencyString)(dtos_1.Frequency.month) },
    { key: dtos_1.Frequency.year, value: (0, functions_1.toFrequencyString)(dtos_1.Frequency.year) },
];
//# sourceMappingURL=constants.js.map