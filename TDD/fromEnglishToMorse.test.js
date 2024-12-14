import {fromEnglishToMorse} from "../Maths/fromEnglishToMorse.js"

describe("Test cases for fromEnglishToMorse function", () => {
    test("returns the corect string", () => {
        expect(fromEnglishToMorse("sos")).toBe("... --- ...");
    });
    test("returns the correct string", () => {
        expect(fromEnglishToMorse("air temperature")).toBe(".- .. .-. ....... - . -- .--. . .-. .- - ..- .-. .");
    });
    test("It should return empty string if no parameter", () => {
        expect(fromEnglishToMorse("")).toBe("");
    });
});

/**
 describe("Test cases for sum function", () => {
    const wrongDataTypeError = new Error("All arguments must be numbers");
    test("return the correct sum given any number of arguments", () => {
        expect(sum(2, 2, 2)).toBe(6);
        expect(sum(1, 45, 100, 23, 14, 23)).toBe(206);
        expect(sum(1, 1, 1, 1, 1, 1, 1, 1)).toBe(8);
    });

    it("should return the value of the argument for a single argument passed", () => {
        expect(sum(1)).toBe(1);
        expect(sum(568)).toBe(568);
    });

    it("Error will be thrown when arguments are not numbers", () => {
        expect(() => {
            sum("a", 2, 3);
        }).toThrow(wrongDataTypeError);
        expect(() => {
            sum("10", "14");
        }).toThrow(wrongDataTypeError);
        expect(() => {
            sum("12345678");
        }).toThrow(wrongDataTypeError);
        expect(() => {
            sum(2, false);
        }).toThrow(wrongDataTypeError);
    });

    it("should return 0 if no arguments are passed", () => {
        expect(sum()).toBe(0);
    });
});
 */