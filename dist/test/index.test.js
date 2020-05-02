"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
test("PhoneNumber Test", function () {
    expect(index_1.default.phoneNumberTest('13935143009')).toBe(true);
});
test("Email Test", function () {
    expect(index_1.default.emailTest("119@qq.com")).toBe(true);
    expect(index_1.default.emailTest("119@163.com")).toBe(true);
    expect(index_1.default.emailTest("119@qq.top")).toBe(true);
    expect(index_1.default.emailTest("119@7-a.cn")).toBe(true);
    expect(index_1.default.emailTest("119www@qq.com.cn")).toBe(true);
});
test("Pure Number Password Test", function () {
    expect(index_1.default.pureNumberPassword('12345678')).toBe(true);
    expect(index_1.default.pureNumberPassword('78888888')).toBe(true);
    expect(index_1.default.pureNumberPassword('15678')).toBe(false);
    expect(index_1.default.pureNumberPassword('12ww5678')).toBe(false);
    expect(index_1.default.pureNumberPassword('123s78')).toBe(false);
});
test("Strong Password Test", function () {
    expect(index_1.default.strongerPassword('sjy12345')).toBe(true);
    expect(index_1.default.strongerPassword('sjy12222233344')).toBe(true);
    expect(index_1.default.strongerPassword('a23k4a')).toBe(false);
    expect(index_1.default.strongerPassword('Sjy12345')).toBe(true);
});
