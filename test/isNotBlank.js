var Util = require('../lib/utils-string')

describe('Utils-String isBlank test', function () {
    it('null check', function () {
        expect(Util.isNotBlank(null)).toBe(false);
    });
    it('undefined check', function () {
        expect(Util.isNotBlank(undefined)).toBe(false);
    });
    it('empty string check', function () {
        expect(Util.isNotBlank("")).toBe(false);
    });
    it('string with space check', function () {
        expect(Util.isNotBlank(" ")).toBe(false);
    });
    it('string check', function () {
        expect(Util.isNotBlank("bob")).toBe(true);
    });
    it('string with leading and trailing spaces check', function () {
        expect(Util.isNotBlank("   bob   ")).toBe(true);
    });
});