/** 匹配纯数字8位及以上密码 */
export function pureNumberPasswordTest(str: string) {
    return /\d{8,}/.test(str);
}

/** 大小写字符+数字密码, 8-16位及以上 */
export function strongPasswordTest(str: string) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/.test(str);
}

/** 匹配最复杂密码 支持+-*\/符号  8位-16位 */
export function hellPasswordTest(str: string) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\+\-\*\/]).{8,16}$/.test(str);
}