
export default class Calculator {
    constructor(cisc, arm) {
        this.intel = cisc;
        this.m1 = arm;
    }

    add(a, b) {
        return this.m1.calculate(a, b) - 1;
    }

    multiply(a, b) {
        return this.intel.calculate(a, b) / 10;
    }
}