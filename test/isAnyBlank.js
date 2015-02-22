var Util = require('../lib/utils-string')

describe('Utils-String isAnyEmpty test', function () {
    it('null check', function () {
        expect(Util.isAnyBlank(null)).toBe(true);
    });
    it('undefined check', function () {
        expect(Util.isAnyBlank(undefined)).toBe(true);
    });
    it('null check', function () {
        expect(Util.isAnyBlank(null, "foo")).toBe(true);
    });
    it('undefined check', function () {
        expect(Util.isAnyBlank(undefined, "foo")).toBe(true);
    });
    it('empty string check', function () {
        expect(Util.isAnyBlank("", "foo")).toBe(true);
    });
    it('string with space check', function () {
        expect(Util.isAnyBlank(" ", "foo")).toBe(true);
    });
    it('string check', function () {
        expect(Util.isAnyBlank("bob", "foo")).toBe(false);
    });
    it('string with leading and trailing spaces check', function () {
        expect(Util.isAnyBlank("   bob   ", "foo")).toBe(false);
    });
});