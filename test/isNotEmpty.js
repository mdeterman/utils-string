var Util = require('../lib/utils-string')

describe('Utils-String isNotEmpty test', function () {
    it('null check', function () {
        expect(Util.isNotEmpty(null)).toBe(false);
    });
    it('undefined check', function () {
        expect(Util.isNotEmpty(undefined)).toBe(false);
    });
    it('empty string check', function () {
        expect(Util.isNotEmpty("")).toBe(false);
    });
    it('string with space check', function () {
        expect(Util.isNotEmpty(" ")).toBe(true);
    });
    it('string check', function () {
        expect(Util.isNotEmpty("bob")).toBe(true);
    });
    it('string with leading and trailing spaces check', function () {
        expect(Util.isNotEmpty("   bob   ")).toBe(true);
    });
});