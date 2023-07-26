import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from "./mathFunctions";

describe('addNumbers test:', () => {

    it('should equal 10', () => {
        expect(addNumbers(5,5)).toBe(10)
    });

    it('should NOT equal 10', () => {
        expect(addNumbers(5,5)).not.toBe(11)
    })
});

describe('subtractNumbers test:', () => {

    it('should equal 4', () => {
        expect(subtractNumbers(5,1)).toBe(4)
    });

    it('should NOT equal 4', () => {
        expect(subtractNumbers(5,1)).not.toBe(11)
    })
});

describe('multiplyNumbers test:', () => {

    it('should equal 25', () => {
        expect(multiplyNumbers(5,5)).toBe(25)
    });

    it('should NOT equal 25', () => {
        expect(multiplyNumbers(5,5)).not.toBe(26)
    })
});

describe('divideNumbers test:', () => {

    it('should equal 2', () => {
        expect(divideNumbers(10,5)).toBe(2)
    });

    it('should NOT equal 2', () => {
        expect(divideNumbers(10,5)).not.toBe(4)
    })
});

