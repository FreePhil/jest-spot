import { when } from 'jest-when';
import fib from './fib';

describe("see if fibonacci function works", () => {
   
    // arrange, act, assert
    test("fib(1) equals 1", () => {
        let result = fib(1);
        expect(result).toBe(1);
    });

    test("fib(10) equals 55", () => {
        let result = fib(10);
        expect(result == 55).toBeTruthy();
    });

    test("fib(0) equals 0", () => {
        expect(fib(0)).toBe(0);
    });

    test('fib(2) equals 1', () => {
        let result = fib(2);
        expect(result).toBe(1);
    });
});

