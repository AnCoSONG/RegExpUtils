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
/** 匹配复杂密码即数字+大小写字符+符号 支持+-*\/符号  8位-16位 */
function complexPasswordTest(str) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\+\-\*\/]).{8,16}$/.test(str);
}
exports.complexPasswordTest = complexPasswordTest;
/** 匹配复杂密码即数字+大小写字符+符号 支持+-*\/?\@\!\#\$\%\^\&\*\(\)\_\'\"\'等, 8-16位 */
function mostComplexPasswordTest(str) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\+\-\*\/\!\@\#\$\%\^\&\*\.\(\)\?\>\<\:\;\"\'\_]).{8,16}$/.test(str);
}
exports.mostComplexPasswordTest = mostComplexPasswordTest;
