/** 匹配手机号 */
export function phoneNumberTest(str: string) {
    return /\d{11}/.test(str); //* 11位数字
}