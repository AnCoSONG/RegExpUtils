import RegExpUtils from '../index'
test("PhoneNumber Test", ()=>{
    expect(RegExpUtils.phoneNumberTest('13935143009')).toBe(true);
})

test("Email Test",()=>{
    expect(RegExpUtils.emailTest("119@qq.com")).toBe(true);
    expect(RegExpUtils.emailTest("119@163.com")).toBe(true);
    expect(RegExpUtils.emailTest("119@qq.top")).toBe(true);
    expect(RegExpUtils.emailTest("119@7-a.cn")).toBe(true);
    expect(RegExpUtils.emailTest("119www@qq.com.cn")).toBe(true);
})

test("Pure Number Password Test",()=>{
    expect(RegExpUtils.pureNumberPassword('12345678')).toBe(true);
    expect(RegExpUtils.pureNumberPassword('78888888')).toBe(true);
    expect(RegExpUtils.pureNumberPassword('15678')).toBe(false);
    expect(RegExpUtils.pureNumberPassword('12ww5678')).toBe(false);
    expect(RegExpUtils.pureNumberPassword('123s78')).toBe(false);
})

test("Strong Password Test", ()=>{
    expect(RegExpUtils.strongerPassword('sjy12345')).toBe(true);
    expect(RegExpUtils.strongerPassword('sjy12222233344')).toBe(true);
    expect(RegExpUtils.strongerPassword('a23k4a')).toBe(false);
    expect(RegExpUtils.strongerPassword('Sjy12345')).toBe(true);
})
