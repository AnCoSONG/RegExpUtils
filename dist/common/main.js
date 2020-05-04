"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 匹配手机号 */
function phoneNumberTest(str) {
    return /\d{11}/.test(str); //* 11位数字
}
exports.phoneNumberTest = phoneNumberTest;
