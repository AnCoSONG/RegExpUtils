"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* 补充包 可以作为多人开发时的backup模块
/** 匹配谷歌邮箱 */
function gmailTest(str) {
    return /^\w+@gmail.com$/i.test(str);
}
exports.gmailTest = gmailTest;
