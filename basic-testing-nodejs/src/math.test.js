
// Units are part of the your code that stands alone ( they are mainly functions )
import { add } from './math.js';

import { expect, test } from 'vitest';

// without AAA pattern
test('Should summarize all number values in an array', () => {
    const result = add([1,2,3]);

    expect(result).toBe(6);
    expect(result)
})


/**
 * The AAA Pattern (Arrange, Act, Assert)
 * 
 *  Arrange -> Define the testing enviroment & values
 *  Act -> Run the actual code / Function that should be tested
 *  Assert -> Evaluate the produced value / result and comparte it to the expected value / result
 */ 
test('Should summarize all number values in an array (AAA pattern)', () => {
    
    // Arrange
    const numbers = [1,2,3];
        // try to automate the expected result, this could be done by using a helper function that mimics the
        // functionality of the unit that is being tested
    const expectedResult = numbers.reduce((prev, current) => prev + current, 0);

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
})

/**
 * A complete test suit must teste every use case ( not only the happy path ),a complete test suit 
 * must contain expected results, errors, unexpected results and expection handling
 */

test('Should yield NaN if at least one invalid number is provided', () => {
    const numbers = [1, 'd', 2];

    const result = add(numbers);

    expect(result).toBeNaN();
})

test('should yield a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2'];
    const expectedResult = numbers.reduce((prev, current) => +prev + +current, 0);
    
    const result = add(numbers);

    expect(result).toBe(expectedResult)
})

test('it should yield 0 if an empty array of numbers is provided', () => {
    const numbers = [];
    
    const result = add(numbers);

    expect(result).toBe(0);
})

test('should throw and error if no value is passed into the function', () => {
    const result = () => {
        add();
    };

    expect(result).toThrow();
})

test('should throw and error if 2 or more parameter are passed into the function', () => {
    const num1 = 1;
    const num2 = 2;

    const result = () => {
        add(num1, num2);
    };

    expect(result).toThrow(/is not iterable/);
})