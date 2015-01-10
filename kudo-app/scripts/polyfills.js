/**
 * Array.prototype.find
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
if (!Array.prototype.find) {

    Object.defineProperty(Array.prototype, 'find', {
        enumerable  : false,
        configurable: true,
        writable    : true,
        value       : function(predicate) {

            if (!this) {

                throw new TypeError('Array.prototype.find called on null or undefined');
            }

            if (typeof predicate !== 'function') {

                throw new TypeError('predicate must be a function');
            }

            var self    = this;
            var result  = null;
            var context = arguments[1];

            self.some(function (element, index) {

                if (predicate.call(context, element, index, self)) {

                    result = element;

                    return true;
                }

                return false;
            });

            return result;
        }
    });
}

/**
 * Array.prototype.has
 * Custom
 */
Object.defineProperty(Array.prototype, 'has', {
    enumerable  : false,
    configurable: true,
    writable    : true,
    value       : function(element) {

        if (!this) {

            throw new TypeError('Array.prototype.has called on null or undefined');
        }

        return this.indexOf(element) > -1;
    }
});

/**
 * Array.prototype.remove
 * Custom
 */
Object.defineProperty(Array.prototype, 'remove', {
    enumerable  : false,
    configurable: true,
    writable    : true,
    value       : function(element) {

        if (!this) {

            throw new TypeError('Array.prototype.remove called on null or undefined');
        }

        var index = this.indexOf(element);

        if (index < 0) {

            return false;
        }

        this.splice(index, 1);

        return true;
    }
});

/**
 * Array.prototype.first
 * Custom
 */
Object.defineProperty(Array.prototype, 'first', {
    enumerable  : false,
    configurable: true,
    writable    : true,
    value       : function() {

        if (!this) {

            throw new TypeError('Array.prototype.first called on null or undefined');
        }

        return this[0];
    }
});

/**
 * Array.prototype.last
 * Custom
 */
Object.defineProperty(Array.prototype, 'last', {
    enumerable  : false,
    configurable: true,
    writable    : true,
    value       : function() {

        if (!this) {

            throw new TypeError('Array.prototype.last called on null or undefined');
        }

        return this[this.length - 1];
    }
});

/**
 * String.prototype.titleize
 * Custom
 */
Object.defineProperty(String.prototype, 'titleize', {
    enumerable  : false,
    configurable: true,
    writable    : true,
    value       : function() {

        if (!this) {

            throw new TypeError('String.prototype.titleize called on null or undefined');
        }

        return this
            .toLowerCase()
            .replace(/(?:^|\s|-)\S/g, function(c) {

                return c.toUpperCase();
            });
    }
});

/**
 * String.prototype.classify
 * Custom
 */
Object.defineProperty(String.prototype, 'classify', {
    enumerable  : false,
    configurable: true,
    writable    : true,
    value       : function() {

        if (!this) {

            throw new TypeError('String.prototype.classify called on null or undefined');
        }

        return this
            .replace(/[\W_]/g, ' ')
            .titleize()
            .replace(/\s/g, '');
    }
});

/**
 * String.prototype.startsWith
 * Custom
 */
Object.defineProperty(String.prototype, 'startsWith', {
    enumerable  : false,
    configurable: true,
    writable    : true,
    value       : function(start) {

        if (!this) {

            throw new TypeError('String.prototype.startsWith called on null or undefined');
        }

        return this.slice(0, start.length) === start;
    }
});

/**
 * String.prototype.endsWith
 * Custom
 */
Object.defineProperty(String.prototype, 'endsWith', {
    enumerable  : false,
    configurable: true,
    writable    : true,
    value       : function(end) {

        if (!this) {

            throw new TypeError('String.prototype.endsWith called on null or undefined');
        }

        return this.slice(-end.length) === end;
    }
});