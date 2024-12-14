import {fromMorseToEnglish} from "../Maths/fromMorseToEnglish.js";


describe("Test cases for fromMorseToEnglish function", () => {
    test("returns correct string", () => {
        expect(fromMorseToEnglish("... --- ...")).toBe("SOS");
    });
    test("return correct string", () => {
        expect(fromMorseToEnglish(".- .. .-. ....... - . -- .--. . .-. .- - ..- .-. .")).toBe("AIR TEMPERATURE");
    });
    test("It should return an empty string if no parameters", () => {
        expect(fromMorseToEnglish("")).toBe("");
    });
});