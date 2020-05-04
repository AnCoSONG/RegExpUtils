import * as RegUtils from '../src/index'
test("PhoneNumber Test", ()=>{
    expect(RegUtils.phoneNumberTest('17717727372')).toBe(true);
    expect(RegUtils.phoneNumberTest('kwqe123123sad')).toBe(false);
    expect(RegUtils.phoneNumberTest('KKKdqweqe')).toBe(false);
    expect(RegUtils.phoneNumberTest('jjjuuuyyy')).toBe(false);
})

test("Email Test",()=>{
    expect(RegUtils.commonEmailTest("119@qq.com")).toBe(true);
    expect(RegUtils.commonEmailTest("119@163.com")).toBe(true);
    expect(RegUtils.commonEmailTest("119@qq.top")).toBe(true);
    expect(RegUtils.commonEmailTest("119@7-a.cn")).toBe(true);
    expect(RegUtils.commonEmailTest("119www@qq.com.cn")).toBe(true);
})

test("QQ EMail Test", ()=>{
    expect(RegUtils.qqEmailTest('@qq.com')).toBe(false);
    expect(RegUtils.qqEmailTest("_@qq.com")).toBe(true);
    expect(RegUtils.qqEmailTest("*@qq.com")).toBe(false);
    expect(RegUtils.qqEmailTest("12345@qq.com")).toBe(true);
})

test("Pure Number Password Test",()=>{
    expect(RegUtils.pureNumberPasswordTest('12345678')).toBe(true);
    expect(RegUtils.pureNumberPasswordTest('78888888')).toBe(true);
    expect(RegUtils.pureNumberPasswordTest('15678')).toBe(false);
    expect(RegUtils.pureNumberPasswordTest('12ww5678')).toBe(false);
    expect(RegUtils.pureNumberPasswordTest('123s78')).toBe(false);
})

test("Strong Password Test", ()=>{
    expect(RegUtils.strongPasswordTest('sjy12345')).toBe(false);
    expect(RegUtils.strongPasswordTest('sjy12222233344')).toBe(false);
    expect(RegUtils.strongPasswordTest('a23k4a')).toBe(false);
    expect(RegUtils.strongPasswordTest('Sjy12345')).toBe(true);
    expect(RegUtils.strongPasswordTest('12345678')).toBe(false);
})

test("Hell Password Test", ()=>{
    expect(RegUtils.complexPasswordTest("sjy123456")).toBe(false)
    expect(RegUtils.complexPasswordTest("Sjy123456")).toBe(false)
    expect(RegUtils.complexPasswordTest("Sjy123456+")).toBe(true)
    expect(RegUtils.complexPasswordTest("Sjy123456-")).toBe(true)
    expect(RegUtils.complexPasswordTest("Sjy123456*")).toBe(true)
    expect(RegUtils.complexPasswordTest("Sjy123456/")).toBe(true)
    expect(RegUtils.complexPasswordTest("Sjy123456+-*/")).toBe(true)
})

test("GMail Test", ()=>{
    expect(RegUtils.gmailTest('sjy@qq.com')).toBe(false)
    expect(RegUtils.gmailTest('sjy@gmail.com')).toBe(true)
    expect(RegUtils.gmailTest('sjy@gmail.com.cn')).toBe(false)
    expect(RegUtils.gmailTest('sjy@123gmail.com')).toBe(false)
})

test("Most Complex Password", ()=>{
    expect(RegUtils.mostComplexPasswordTest('Sjy^%21')).toBe(false)
    expect(RegUtils.mostComplexPasswordTest('JNNy^%21321')).toBe(true)
    expect(RegUtils.mostComplexPasswordTest('justin123')).toBe(false)
    expect(RegUtils.mostComplexPasswordTest('justiN123')).toBe(false)
    expect(RegUtils.mostComplexPasswordTest('KKkk7788')).toBe(false)
    expect(RegUtils.mostComplexPasswordTest('ABCDEFC88&')).toBe(false)
})