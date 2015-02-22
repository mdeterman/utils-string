var Util = require('../lib/utils-string')

describe('Utils-String trimToEmpyt test', function () {
    it('null check', function () {
        expect(Util.trimToEmpty(null)).toBe("");
    });
    it('undefined check', function () {
        expect(Util.trimToEmpty(undefined)).toBe("");
    });
    it('empty string check', function () {
        expect(Util.trimToEmpty("")).toBe("");
    });
    it('string with space check', function () {
        expect(Util.trimToEmpty(" ")).toBe("");
    });
    it('string with test check', function () {
        expect(Util.trimToEmpty("abc")).toBe("abc");
    });
    it('string with test and leading and trailing space check', function () {
        expect(Util.trimToEmpty("   abc   ")).toBe("abc");
    });
});