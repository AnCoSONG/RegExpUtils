export default class RegExpUtils{
    /** 匹配手机号 */
    public static phoneNumberTest(str:string){
        return /\d{11}/.test(str); //* 11位数字
    }
    /** 匹配邮箱 */
    public static emailTest(str:string){
        return /^\w+@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
    }

    /** 匹配纯数字8位及以上密码 */
    public static pureNumberPassword(str:string){
        return /\d{8,}/.test(str);
    }

    /** 大小写字符+数字密码, 8位及以上 */
    public static strongerPassword(str: string){
        return /[a-zA-Z0-9]{8,}/.test(str);
    }
}