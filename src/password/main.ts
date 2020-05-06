/** 匹配纯数字8位及以上密码 */
export function pureNumberPasswordTest(str: string) {
    return /\d{8,}/.test(str);
}

/** 大小写字符+数字密码, 8-16位及以上 */
export function strongPasswordTest(str: string) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/.test(str);
}

/** 匹配复杂密码即数字+大小写字符+符号 支持+-*\/符号  8位-16位 */
export function complexPasswordTest(str: string) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\+\-\*\/]).{8,16}$/.test(str);
}

/** 匹配复杂密码即数字+大小写字符+符号 支持+-*\/?\@\!\#\$\%\^\&\*\(\)\_\' \"等, 8-16位 */
export function mostComplexPasswordTest(str:string){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\+\-\*\/\!\@\#\$\%\^\&\*\.\(\)\?\>\<\:\;\"\'\_]).{8,16}$/.test(str);
}

/** 自定义密码检测
 * description {
 *      min: 8,
 *      max: 16,
 *      number: true,
 *      lowerChar: true,
 *      upperChar: true,
 *      symbols:['*','-',...]
 * }
 */
export function customPasswordTest(description:Object, str:string){

}
