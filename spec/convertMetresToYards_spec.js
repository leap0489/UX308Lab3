import { convertMetresToYards } from "../convertMetresToYards.js";

describe("test convertMetresToYards", function() {
    it("tests 10 metres", function() {
      let metres = 10;
      let yards = convertMetresToYards(metres)
      expect(yards.toFixed(2)).toBe("10.94");
    });
  });