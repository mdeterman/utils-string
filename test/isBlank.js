var Util = require('../lib/utils-string')

describe('Utils-String isBlank test', function () {
    it('null check', function () {
        expect(Util.isBlank(null)).toBe(true);
    });
    it('undefined check', function () {
        expect(Util.isBlank(undefined)).toBe(true);
    });
    it('empty string check', function () {
        expect(Util.isBlank("")).toBe(true);
    });
    it('string with space check', function () {
        expect(Util.isBlank(" ")).toBe(true);
    });
    it('string check', function () {
        expect(Util.isBlank("bob")).toBe(false);
    });
    it('string with leading and trailing spaces check', function () {
        expect(Util.isBlank("   bob   ")).toBe(false);
    });
});