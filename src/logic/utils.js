/**
 * Returns the greatest common divisor of two numbers. 
 * The greatest common divisor is the largest number that divides both 
 * x and y without a remainder.
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number}
 */
export const greatestCommonDivisor = (x, y) => {
    while(y) {
        let tmp = x
        x = y
        y = tmp % y
    }

    return x
}

/**
 * In arithmetic and number theory, the least common multiple, 
 * lowest common multiple, or smallest common multiple of two numbers x and y, 
 * usually denoted by lcm(x, y), 
 * is the smallest positive number that is divisible by both x and y.
 * 
 * @param {number} x 
 * @param {number} y
 * @returns {number}
 */
export const leastCommonMultiple = (x, y) => (x * y) / greatestCommonDivisor(x, y)

/**
 * Checks, wether given Variable is an Integer and not an Float or other DataType
 * @param {any} variable 
 * @returns {boolean}
 */
export const isInt = (variable) => (typeof variable === 'number') && (variable % 1 === 0)

/**
 * Returns a supplied numeric expression rounded to the nearest integer 
 * @param {number} decimal 
 * @param {number} places
 * @returns {number}
 */
export const round = (decimal, places) => {
    places = (typeof places === 'undefined' ? 2 : places)
    const x = Math.pow(10, places)
    return Math.round(parseFloat(decimal) * x) / x
}

/**
 * Checks if given input is an digit
 * @param {char} current 
 * @returns {boolean}
 */
export const isDigit = current => current >= '0' && current <= '9'

/**
 * Checks if given input is a letter
 * @param {char} current 
 * @returns {boolean}
 */
export const isAlpha = current => (current >= 'a' && current <= 'z') || (current >= 'A' && current <= 'Z')

/**
 * Checks if given input is alphanumeric
 * @param {char} current 
 * @returns {boolean}
 */
export const isAlphaNum = current => isAlpha(current) || isDigit(current)

/**
 * For Latex
 */
export const GREEK_LETTERS = [
    'alpha',
    'beta',
    'gamma',
    'Gamma',
    'delta',
    'Delta',
    'epsilon',
    'varepsilon',
    'zeta',
    'eta',
    'theta',
    'vartheta',
    'Theta',
    'iota',
    'kappa',
    'lambda',
    'Lambda',
    'mu',
    'nu',
    'xi',
    'Xi',
    'pi',
    'Pi',
    'rho',
    'varrho',
    'sigma',
    'Sigma',
    'tau',
    'upsilon',
    'Upsilon',
    'phi',
    'varphi',
    'Phi',
    'chi',
    'psi',
    'Psi',
    'omega',
    'Omega'
]