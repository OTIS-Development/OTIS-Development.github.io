"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = exports.toFrequencyString = exports.toDateString = exports.randomColor = exports.toInputDateString = exports.groupBy = void 0;
const tslib_1 = require("tslib");
const dtos_1 = require("./api/dtos");
const constants_1 = require("./constants");
const MockData = tslib_1.__importStar(require("./api/dtos/mock.data"));
function groupBy(list, toKey) {
    const map = new Map();
    list.forEach((item) => {
        const key = toKey(item);
        const collection = map.get(key) ?? [];
        collection.push(item);
        map.set(key, collection);
    });
    return map;
}
exports.groupBy = groupBy;
function toInputDateString(text) {
    const month = Number.parseInt(text.split('/')[1], 10);
    const monthStr = month < 10 ? '0' + month : month;
    const day = Number.parseInt(text.split('/')[0], 10);
    const dayStr = day < 10 ? '0' + day : day;
    return text.split('/')[2] + '-' + monthStr + '-' + dayStr;
}
exports.toInputDateString = toInputDateString;
function randomColor() {
    return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}
exports.randomColor = randomColor;
function toDateString(date) {
    return date.toISOString().split('T')[0];
}
exports.toDateString = toDateString;
function toFrequencyString(frequency) {
    switch (frequency) {
        case dtos_1.Frequency.day:
            return 'Daily';
        case dtos_1.Frequency.week:
            return 'Weekly';
        case dtos_1.Frequency.fortnight:
            return 'Fortnightly';
        case dtos_1.Frequency.fourWeek:
            return 'Four weekly';
        case dtos_1.Frequency.month:
            return 'Monthly';
        case dtos_1.Frequency.year:
            return 'Annually';
        default:
            return 'Daily';
    }
}
exports.toFrequencyString = toFrequencyString;
function getCurrentUser() {
    const sessionData = localStorage.getItem(constants_1.SESSION_LOCAL_STORAGE_KEY);
    if (sessionData !== null) {
        const browserSession = JSON.parse(sessionData);
        return MockData.users.users.find((u) => u.id === browserSession.userId);
    }
    return undefined;
}
exports.getCurrentUser = getCurrentUser;
//# sourceMappingURL=functions.js.map