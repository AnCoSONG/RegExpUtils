//* 补充包 可以作为多人开发时的backup模块
/** 匹配谷歌邮箱 */
export function gmailTest(str: string){
    return /^\w+@gmail.com$/i.test(str);
}

/** 匹配qq邮箱 */
export function qqEmailTest(str:string){
    return /^\w+@qq.com$/i.test(str);
}