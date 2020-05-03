"use strict";
//* 主包 包含绝大部分的正则实现
Object.defineProperty(exports, "__esModule", { value: true });
/** 匹配邮箱 */
function commonEmailTest(str) {
    return /^\w+@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
}
exports.commonEmailTest = commonEmailTest;
