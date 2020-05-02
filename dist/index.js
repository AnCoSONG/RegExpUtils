"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegExpUtils = /** @class */ (function () {
    function RegExpUtils() {
    }
    /** 匹配手机号 */
    RegExpUtils.phoneNumberTest = function (str) {
        return /\d{11}/.test(str); //* 11位数字
    };
    /** 匹配邮箱 */
    RegExpUtils.emailTest = function (str) {
        return /^\w+@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
    };
    /** 匹配纯数字8位及以上密码 */
    RegExpUtils.pureNumberPassword = function (str) {
        return /\d{8,}/.test(str);
    };
    /** 大小写字符+数字密码, 8位及以上 */
    RegExpUtils.strongerPassword = function (str) {
        return /[a-zA-Z0-9]{8,}/.test(str);
    };
    return RegExpUtils;
}());
exports.default = RegExpUtils;
