"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RegUtils = __importStar(require("../index"));
test("PhoneNumber Test", function () {
    expect(RegUtils.phoneNumberTest('17717727372')).toBe(true);
});
test("Email Test", function () {
    expect(RegUtils.commonEmailTest("119@qq.com")).toBe(true);
    expect(RegUtils.commonEmailTest("119@163.com")).toBe(true);
    expect(RegUtils.commonEmailTest("119@qq.top")).toBe(true);
    expect(RegUtils.commonEmailTest("119@7-a.cn")).toBe(true);
    expect(RegUtils.commonEmailTest("119www@qq.com.cn")).toBe(true);
});
test("Pure Number Password Test", function () {
    expect(RegUtils.pureNumberPasswordTest('12345678')).toBe(true);
    expect(RegUtils.pureNumberPasswordTest('78888888')).toBe(true);
    expect(RegUtils.pureNumberPasswordTest('15678')).toBe(false);
    expect(RegUtils.pureNumberPasswordTest('12ww5678')).toBe(false);
    expect(RegUtils.pureNumberPasswordTest('123s78')).toBe(false);
});
test("Strong Password Test", function () {
    expect(RegUtils.strongPasswordTest('sjy12345')).toBe(false);
    expect(RegUtils.strongPasswordTest('sjy12222233344')).toBe(false);
    expect(RegUtils.strongPasswordTest('a23k4a')).toBe(false);
    expect(RegUtils.strongPasswordTest('Sjy12345')).toBe(true);
    expect(RegUtils.strongPasswordTest('12345678')).toBe(false);
});
test("Hell Password Test", function () {
    expect(RegUtils.hellPasswordTest("sjy123456")).toBe(false);
    expect(RegUtils.hellPasswordTest("Sjy123456")).toBe(false);
    expect(RegUtils.hellPasswordTest("Sjy123456+")).toBe(true);
    expect(RegUtils.hellPasswordTest("Sjy123456-")).toBe(true);
    expect(RegUtils.hellPasswordTest("Sjy123456*")).toBe(true);
    expect(RegUtils.hellPasswordTest("Sjy123456/")).toBe(true);
    expect(RegUtils.hellPasswordTest("Sjy123456+-*/")).toBe(true);
});
test("GMail Test", function () {
    expect(RegUtils.gmailTest('sjy@qq.com')).toBe(false);
    expect(RegUtils.gmailTest('sjy@gmail.com')).toBe(true);
    expect(RegUtils.gmailTest('sjy@gmail.com.cn')).toBe(false);
    expect(RegUtils.gmailTest('sjy@123gmail.com')).toBe(false);
});
