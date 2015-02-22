var Util = require('../lib/utils-string')

describe('Utils-String trim test', function () {
    it('null check', function () {
        expect(Util.trim(null)).toBe(null);
    });
    it('undefined check', function () {
        expect(Util.trim(undefined)).toBe(undefined);
    });
    it('empty string check', function () {
        expect(Util.trim("")).toBe("");
    });
    it('string with space check', function () {
        expect(Util.trim(" ")).toBe("");
    });
    it('string with test check', function () {
        expect(Util.trim("abc")).toBe("abc");
    });
    it('string with test and leading and trailing space check', function () {
        expect(Util.trim("   abc   ")).toBe("abc");
    });
});