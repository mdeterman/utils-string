var Util = require('../lib/utils-string')

describe('Utils-String isAnyEmpty test', function () {
    it('null check', function () {
        expect(Util.isAnyEmpty(null)).toBe(true);
    });
    it('undefined check', function () {
        expect(Util.isAnyEmpty(undefined)).toBe(true);
    });
    it('null check', function () {
        expect(Util.isAnyEmpty(null, "foo")).toBe(true);
    });
    it('undefined check', function () {
        expect(Util.isAnyEmpty(undefined, "foo")).toBe(true);
    });
    it('empty string check', function () {
        expect(Util.isAnyEmpty("", "foo")).toBe(true);
    });
    it('string with space check', function () {
        expect(Util.isAnyEmpty(" ", "foo")).toBe(false);
    });
    it('string check', function () {
        expect(Util.isAnyEmpty("bob", "foo")).toBe(false);
    });
    it('string with leading and trailing spaces check', function () {
        expect(Util.isAnyEmpty("   bob   ", "foo")).toBe(false);
    });
});