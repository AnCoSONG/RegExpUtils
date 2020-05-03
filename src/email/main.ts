//* 主包 包含绝大部分的正则实现

/** 匹配邮箱 */
export function commonEmailTest(str: string) {
    return /^\w+@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
}