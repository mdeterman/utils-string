var Util = require('../lib/utils-string')

describe('Utils-String trimToNull test', function () {
    it('null check', function () {
        expect(Util.trimToNull(null)).toBe(null);
    });
    it('undefined check', function () {
        expect(Util.trimToNull(undefined)).toBe(undefined);
    });
    it('empty string check', function () {
        expect(Util.trimToNull("")).toBe(null);
    });
    it('string with space check', function () {
        expect(Util.trimToNull(" ")).toBe(null);
    });
    it('string with test check', function () {
        expect(Util.trimToNull("abc")).toBe("abc");
    });
    it('string with test and leading and trailing space check', function () {
        expect(Util.trimToNull("   abc   ")).toBe("abc");
    });
});