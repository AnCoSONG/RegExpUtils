"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** 匹配纯数字8位及以上密码 */
function pureNumberPasswordTest(str) {
    return /\d{8,}/.test(str);
}
exports.pureNumberPasswordTest = pureNumberPasswordTest;
/** 大小写字符+数字密码, 8-16位及以上 */
function strongPasswordTest(str) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/.test(str);
}
exports.strongPasswordTest = strongPasswordTest;
/** 匹配最复杂密码 支持+-*\/符号  8位-16位 */
function hellPasswordTest(str) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\+\-\*\/]).{8,16}$/.test(str);
}
exports.hellPasswordTest = hellPasswordTest;
