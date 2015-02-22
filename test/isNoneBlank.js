var Util = require('../lib/utils-string')

describe('Utils-String isNoneBlank test', function () {
    it('null check', function () {
        expect(Util.isNoneBlank(null)).toBe(false);
    });
    it('undefined check', function () {
        expect(Util.isNoneBlank(undefined)).toBe(false);
    });
    it('null check', function () {
        expect(Util.isNoneBlank(null, "foo")).toBe(false);
    });
    it('undefined check', function () {
        expect(Util.isNoneBlank(undefined, "foo")).toBe(false);
    });
    it('empty string check', function () {
        expect(Util.isNoneBlank("", "foo")).toBe(false);
    });
    it('string with space check', function () {
        expect(Util.isNoneBlank(" ", "foo")).toBe(false);
    });
    it('string check', function () {
        expect(Util.isNoneBlank("bob", "foo")).toBe(true);
    });
    it('string with leading and trailing spaces check', function () {
        expect(Util.isNoneBlank("   bob   ", "foo")).toBe(true);
    });
});