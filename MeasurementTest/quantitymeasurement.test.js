const assert = require("chai").assert;
const app = require("../Measurement/quantitymeasurement");

describe("comparing inch", function() {
  it("0 inch should return 0 inch", () => {
    assert.equal(true,app.inch(0,0));
  }),

  it("0 feet should return 0 feet", () => {
      assert.equal(true,app.feet(0,0))
  })
});
