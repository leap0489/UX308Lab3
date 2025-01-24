import { lengthToVolume } from "../lengthToVolume.js";

describe("test lengthToVolume", function() {
    it("tests 3 cm", function() {
      let length = 3;
      let volume = lengthToVolume(length)
      expect(volume.toFixed(2)).toBe("27.00");
    });
  });

