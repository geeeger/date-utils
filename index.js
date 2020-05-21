"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGMT8LocalDate = void 0;
var TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 1 * 60 * 1000;
var GMT8OFFSET = 8 * 1 * 24 * 60 * 60 * 1000;
function getGMT8LocalDate(unixTimestamp) {
    var t = unixTimestamp * 1000;
    t = t + TIMEZONE_OFFSET;
    t = t + GMT8OFFSET;
    return new Date(t);
}
exports.getGMT8LocalDate = getGMT8LocalDate;
