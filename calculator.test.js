import { when } from 'jest-when';
import Calculator from './calculator';
// import Intel from './intel';
// import M1 from './m1';

const mockCalculateByM1 = jest.fn();
when(mockCalculateByM1)
    .calledWith(2, 3).mockReturnValue(6)
    .calledWith(7, 9).mockReturnValue(17);
jest.mock('./m1', () => {
    return jest.fn().mockImplementation(() => {
        return {
            calculate: mockCalculateByM1
        }
    });    
});

const mockCalculateByIntel = jest.fn();
when(mockCalculateByIntel)
    .calledWith(1, 2).mockReturnValue(20)
    .calledWith(7, 8).mockReturnValue(560);
jest.mock('./intel', () => {
    return jest.fn().mockImplementation(() => {
        return {
            calculate: mockCalculateByIntel
        }
    });
});

import Intel from './intel';
import M1 from './m1';

describe("calcuator test", () => {

    test("calculor compute(2, 3) equals 5", () => {

        const intel = new Intel();
        const m1 = new M1();
        const cal = new Calculator(intel, m1);

        let result = cal.add(2, 3);
        expect(result).toBe(5);
    });

    test("calculator compute(7, 9) equals 16", () => {

        // arrange
        //
        const intel = new Intel();
        const m1 = new M1();
        const cal = new Calculator(intel, m1);

        // act
        let result = cal.add(7, 9);

        // assert
        expect(result).toBe(16);
    });

    test("intel: multiply(1, 2) equals 2", () => {
        const intel = new Intel();
        const m1 = new M1();
        const cal = new Calculator(intel, m1);

        expect(cal.multiply(1, 2)).toBe(2);
    });

    test("intel: multiply(7, 8) equals 56", () => {
        const intel = new Intel();
        const m1 = new M1();
        const cal = new Calculator(intel, m1);

        expect(cal.multiply(7, 8)).toBe(56);    
    });

});