var Util = require('../lib/utils-string')

describe('Utils-String isNoneEmpty test', function () {
    it('null check', function () {
        expect(Util.isNoneEmpty(null)).toBe(false);
    });
    it('undefined check', function () {
        expect(Util.isNoneEmpty(undefined)).toBe(false);
    });
    it('null check', function () {
        expect(Util.isNoneEmpty(null, "foo")).toBe(false);
    });
    it('undefined check', function () {
        expect(Util.isNoneEmpty(undefined, "foo")).toBe(false);
    });
    it('empty string check', function () {
        expect(Util.isNoneEmpty("", "foo")).toBe(false);
    });
    it('string with space check', function () {
        expect(Util.isNoneEmpty(" ", "foo")).toBe(true);
    });
    it('string check', function () {
        expect(Util.isNoneEmpty("bob", "foo")).toBe(true);
    });
    it('string with leading and trailing spaces check', function () {
        expect(Util.isNoneEmpty("   bob   ", "foo")).toBe(true);
    });
});