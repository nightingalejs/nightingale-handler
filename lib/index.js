'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _nightingaleDebug = require('nightingale-debug');

var _nightingaleDebug2 = _interopRequireDefault(_nightingaleDebug);

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {int} minLevel
 * @param {Function} formatter
 * @param {Function} output
 */
let Handler = class Handler {
    /**
     * @param minLevel
     * @param formatter
     * @param output
    */
    constructor(minLevel, formatter, output) {
        this.minLevel = (0, _nightingaleDebug2.default)(minLevel);
        this.format = formatter;
        this.write = output;
    }

    /**
     * @param {Object} record
    */
    handle(record) {
        const formatted = this.format(record);
        this.write(formatted, record);
    }

    /**
     * @param level
    */isHandling(level) {
        return level >= this.minLevel;
    }
};
exports.default = Handler;
//# sourceMappingURL=index.js.map