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