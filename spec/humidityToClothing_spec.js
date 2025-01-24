import { suggestClothing } from "../humidityToClothing.js";

describe("test suggestClothing", function() {
    it("tests humidity >60 and temperature >4", function() {
      let humidity = 100;
      let temperature = 20;
      let clothing = suggestClothing(humidity, temperature)
      expect(clothing).toBe("rain jacket");
    });
  });