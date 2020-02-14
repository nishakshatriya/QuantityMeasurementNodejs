const assert = require("chai").assert;
const app = require("../Measurement/quantitymeasurement");

describe("comparing inch", function() {
  it("0 inch should return 0 inch", () => {
    assert.equal(app.inch(0,0), true);
  });
});
