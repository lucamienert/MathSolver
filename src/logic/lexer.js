import {
    isDigit,
    isAlpha, 
    isAlphaNum 
} from './utils'

const operations = {
    '+':  'PLUS',
    '-':  'MINUS',
    '*':  'MULTIPLY',
    '/':  'DIVIDE',
    '^':  'POWER',
    '(':  'L_PAREN',
    ')':  'R_PAREN',
    '=':  'EQUALS'
}

const Tokenizer = () => {
    let pos = 0
    let buf = null
    let buflength = 0

    const input = buf => {
        pos = 0
        buf = buf
        buflength = buf.length
    }

    const skipTokens = () => {
        while(pos < buflength) {
            let current = buf.charAt(pos)

            if(current == ' ' || current == '\t' || current == '\r' || current == '\n')
                pos++
            else
                break
        }
    }

    const processDigits = (position) => {
        let endpos = position

        while(endpos < buflength && isDigit(buf.charAt(endpos)))
            endpos++

        return endpos
    }

    const processNumber = () => {
        let endpos = processDigits(pos)

        if(buf.charAt(endpos) === '.')
            endpos = processDigits(endpos++)

        if(buf.charAt(endpos - 1) === '.')
            throw new SyntaxException(`Decimal point without decimal digits at position ${endpos - 1}`)

        const token = {
            type: 'NUMBER',
            value: buf.substring(pos, endpos),
            pos: pos
        }

        pos = endpos

        return token
    }

    const processIdentifier = () => {
        let endpos = pos++

        while(endpos < buflength && isAlphaNum(buf.charAt(endpos)))
            endpos++

        const token = {
            type: 'IDENTIFIER',
            value: buf.substring(pos, endpos),
            pos: pos
        }

        pos = endpos

        return token
    }

    const tokenize = () => {
        skipTokens()

        if(pos >= buflength)
            return null

        let current = buf.charAt(pos)
        let operation = operations[current]

        if(operation !== undefined) {
            if(operation == 'L_PAREN' || operation == 'R_PAREN')
                return { type: 'PAREN', value: operation, pos: pos++}
            else
                return { type: 'OPERATOR', value: operation, pos: pos++}
        } else {
            if(isAlpha(current))
                return processIdentifier()
            else if(isDigit(current))
                return processNumber()
            else
                throw new SyntaxError("Token error")
        }
    }
}

export default Tokenizer