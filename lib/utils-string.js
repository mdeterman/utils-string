/**
 * Utils String module.
 * @description A port of Apache Commons StringUtils
 * @version 1.0.0
 * @author Mark Determan <mdeterman@gmail.com>
 * @module mdeterman/utils-string
 */

/**
 * Checks if a String is empty (""), null or undefined.
 *
 * @since 1.0
 * @param {string} string - The string to validate
 * @returns {boolean} true if the String is empty, null or undefined
 *
 * @example
 * UtilsString.isEmpty(null)      = true
 * UtilsString.isEmpty("")        = true
 * UtilsString.isEmpty(" ")       = false
 * UtilsString.isEmpty("bob")     = false
 * UtilsString.isEmpty("  bob  ") = false
 */
exports.isEmpty = function(string) {
    return string === null || string === undefined || string.length == 0;
};

/**
 * Checks if a String is not empty (""), not null and not undefined.
 *
 * @since 1.0
 * @param {string} string - The string to validate
 * @returns {boolean} true if the String is not empty, not null and not undefined
 *
 * @example
 * UtilsString.isNotEmpty(null)      = false
 * UtilsString.isNotEmpty("")        = false
 * UtilsString.isNotEmpty(" ")       = true
 * UtilsString.isNotEmpty("bob")     = true
 * UtilsString.isNotEmpty("  bob  ") = true
 */
exports.isNotEmpty = function(string) {
    return ! exports.isEmpty(string);
};

/**
 * Checks if any one of the String are empty (""), null or undefined.
 *
 * @since 1.0
 * @param {string} string - The strings to validate UtilsString('string1', "string2", ...)
 * @returns {boolean} true if any of the string are empty, null, or undefined
 *
 * @example
 * UtilsString.isAnyEmpty(null)             = true
 * UtilsString.isAnyEmpty(null, "foo")      = true
 * UtilsString.isAnyEmpty("", "bar")        = true
 * UtilsString.isAnyEmpty("bob", "")        = true
 * UtilsString.isAnyEmpty("  bob  ", null)  = true
 * UtilsString.isAnyEmpty(" ", "bar")       = false
 * UtilsString.isAnyEmpty("foo", "bar")     = false
 */
exports.isAnyEmpty = function(string) {
    for(var i=0;i<arguments.length;i++ ) {
        if (exports.isEmpty(arguments[i])) return true;
    }
    return false;
};

/**
 * Checks if none of the CharSequences are empty (""), null and undefined.
 *
 * @since 1.0
 * @param {string} string - The strings to validate UtilsString('string1', "string2", ...)
 * @returns {boolean} true if none of the CharSequences are empty, null or undefined
 *
 * @example
 * UtilsString.isNoneEmpty(null)             = false
 * UtilsString.isNoneEmpty(null, "foo")      = false
 * UtilsString.isNoneEmpty("", "bar")        = false
 * UtilsString.isNoneEmpty("bob", "")        = false
 * UtilsString.isNoneEmpty("  bob  ", null)  = false
 * UtilsString.isNoneEmpty(" ", "bar")       = true
 * UtilsString.isNoneEmpty("foo", "bar")     = true
 */
exports.isNoneEmpty = function(string) {
    for(var i=0;i<arguments.length;i++ ) {
        if (exports.isEmpty(arguments[i])) return false;
    }
    return true;
};

/**
 * Checks if a String is whitespace, empty (""), null, or undefined.
 *
 * @since 1.0
 * @param {string} string - The string to validate
 * @returns {boolean} rue if the CharSequence is null, empty, undefined or whitespace
 *
 * @example
 * UtilsString.isBlank(null)      = true
 * UtilsString.isBlank("")        = true
 * UtilsString.isBlank(" ")       = true
 * UtilsString.isBlank("bob")     = false
 * UtilsString.isBlank("  bob  ") = false
 */
exports.isBlank = function(string) {
    return exports.isEmpty((string !== null && string !== undefined)? string.trim():string);
};

/**
 * Checks if a String is not empty (""), not null, not undefined, and not whitespace only.
 *
 * @since 1.0
 * @param {string} string The strings to validate UtilsString('string1', "string2", ...)
 * @returns {boolean}  if the CharSequence is not empty and not null and not undefined, and not whitespace
 *
 * @example
 * UtilsString.isNotBlank(null)      = false
 * UtilsString.isNotBlank("")        = false
 * UtilsString.isNotBlank(" ")       = false
 * UtilsString.isNotBlank("bob")     = true
 * UtilsString.isNotBlank("  bob  ") = true
 */
exports.isNotBlank = function(string) {
    return exports.isNotEmpty(exports.trim(string));
};

/**
 * Checks if any one of the String are blank (""), null or undefined.
 *
 * @since 1.0
 * @param {string} string - The strings to validate UtilsString('string1', "string2", ...)
 * @returns {boolean} true if any of the CharSequences are blank or null undefined or or whitespace only
 *
 * @example
 * StringUtils.isAnyBlank(null)             = true
 * StringUtils.isAnyBlank(null, "foo")      = true
 * StringUtils.isAnyBlank(null, null)       = true
 * StringUtils.isAnyBlank("", "bar")        = true
 * StringUtils.isAnyBlank("bob", "")        = true
 * StringUtils.isAnyBlank("  bob  ", null)  = true
 * StringUtils.isAnyBlank(" ", "bar")       = true
 * StringUtils.isAnyBlank("foo", "bar")     = false
 */
exports.isAnyBlank = function(string) {
    for(var i=0;i<arguments.length;i++ ) {
        if (exports.isBlank(arguments[i])) return true;
    }
    return false;
};

/**
 * Checks if none of the String are blank (""), null, undefined and whitespace only..
 *
 * @since 1.0
 * @param  {string} string - The strings to validate UtilsString('string1', "string2", ...)
 * @returns {boolean} true if none of the CharSequences are blank or null or undefined or whitespace only
 *
 * @example
 * StringUtils.isNoneBlank(null)             = false
 * StringUtils.isNoneBlank(null, "foo")      = false
 * StringUtils.isNoneBlank(null, null)       = false
 * StringUtils.isNoneBlank("", "bar")        = false
 * StringUtils.isNoneBlank("bob", "")        = false
 * StringUtils.isNoneBlank("  bob  ", null)  = false
 * StringUtils.isNoneBlank(" ", "bar")       = false
 * StringUtils.isNoneBlank("foo", "bar")     = true
 */
exports.isNoneBlank = function(string) {
    for(var i=0;i<arguments.length;i++ ) {
        if (exports.isBlank(arguments[i])) return false;
    }
    return true;
};

/**
 * The String is trimmed using String.trim().
 *
 * @since 1.0
 * @param {string} string - the String to be trimmed, may be null or undefined
 * @returns {string} the trimmed String, null if only chars <= 32, empty or null or undefined String input
 *
 * @example
 * StringUtils.trim(null)          = null
 * StringUtils.trim("")            = ""
 * StringUtils.trim("     ")       = ""
 * StringUtils.trim("abc")         = "abc"
 * StringUtils.trim("    abc    ") = "abc"
 */
exports.trim = function(string) {
    return (string !== null && string !== undefined)? string.trim():string;
};

/**
 * The String is trimmed using String.trim().
 * @since 1.0
 * @param {string} string - the String to be trimmed, may be null or undefined
 * @returns {string} the trimmed String, null if only chars <= 32, empty or null String input
 *
 * @example
 * StringUtils.trimToNull(null)          = null
 * StringUtils.trimToNull("")            = null
 * StringUtils.trimToNull("     ")       = null
 * StringUtils.trimToNull("abc")         = "abc"
 * StringUtils.trimToNull("    abc    ") = "abc"
 */
exports.trimToNull = function(string) {
    if(string === null || string === undefined) return string;
    var str = exports.trim(string);
    return (str.length > 0)? str:null;
}

/**
 * The String is trimmed using String.trim().
 *
 * @since 1.0
 * @param {string} string - he String to be trimmed, may be null or undefined
 * @returns {string} the trimmed String, or an empty String if null or undefined input
 *
 * @example
 * StringUtils.trimToEmpty(null)          = ""
 * StringUtils.trimToEmpty("")            = ""
 * StringUtils.trimToEmpty("     ")       = ""
 * StringUtils.trimToEmpty("abc")         = "abc"
 * StringUtils.trimToEmpty("    abc    ") = "abc"
 */
exports.trimToEmpty = function(string) {
    return exports.trim(string || '')
}