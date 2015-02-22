var Util = require('../lib/utils-string')

describe('Utils-String isEmpty test', function () {
    it('null check', function () {
        expect(Util.isEmpty(null)).toBe(true);
    });
    it('undefined check', function () {
        expect(Util.isEmpty(undefined)).toBe(true);
    });
    it('empty string check', function () {
        expect(Util.isEmpty("")).toBe(true);
    });
    it('string with space check', function () {
        expect(Util.isEmpty(" ")).toBe(false);
    });
    it('string check', function () {
        expect(Util.isEmpty("bob")).toBe(false);
    });
    it('string with leading and trailing spaces check', function () {
        expect(Util.isEmpty("   bob   ")).toBe(false);
    });
});