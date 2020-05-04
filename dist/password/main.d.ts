/** 匹配纯数字8位及以上密码 */
export declare function pureNumberPasswordTest(str: string): boolean;
/** 大小写字符+数字密码, 8-16位及以上 */
export declare function strongPasswordTest(str: string): boolean;
/** 匹配复杂密码即数字+大小写字符+符号 支持+-*\/符号  8位-16位 */
export declare function complexPasswordTest(str: string): boolean;
/** 匹配复杂密码即数字+大小写字符+符号 支持+-*\/?\@\!\#\$\%\^\&\*\(\)\_\'\"\'等, 8-16位 */
export declare function mostComplexPasswordTest(str: string): boolean;
