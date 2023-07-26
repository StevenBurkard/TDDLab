import { capitalizeString, concatenateString, getSecondWord } from "./stringFunctions";

describe('Capitalize first letter test:', () => {
    it('should check if first letter is capital', () => {
       expect(capitalizeString('friday')).toBe('Friday') 
    });

    it('should NOT be capital', () => {
        expect(capitalizeString('friday')).not.toBe('thursday')
    })
});

describe('Concatenate string test', () => {
    it('should concatenate two strings', () => {
       expect(concatenateString('happy','friday')).toBe('happy friday') 
    });

    it('should NOT be happy friday', () => {
        expect(concatenateString('happy','friday')).not.toBe('sad monday')
    })
});

describe('Get second word in string test:', () => {
    it('should get the second word in string', () => {
       expect(getSecondWord('happy friday')).toBe('friday') 
    });

    it('should NOT be friday', () => {
        expect(getSecondWord('happy friday')).not.toBe('happy thursday')
    })
});