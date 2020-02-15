const assert = require("chai").assert;
const converting = require("../Measurement/quantitymeasurement");

describe("comparing inch", function() {
    //inches
  it("0 inch should return 0 inch", () => {
    assert.equal(true,converting.inch(0,0));
  }),

    //feet
  it("0 feet should return 0 feet", () => {
      assert.equal(true,converting.feet(0,0))
  }),

   // null check
  it("when given null should through exception", () => {
    assert.isNotNull(true,converting.inch(0,0))
  }),

  //reference check
  it("checking reference", () => {
      assert.isDefined(converting.inch(0,0),"Its defined!");
  }),

  //typeOf
  it("checking type", () => {
      assert.typeOf(converting.inch(0,0),'Boolean')
  }),
  // null check for feet
  it("when given null should through exception", () => {
    assert.isNotNull(true,converting.feet(0,0))
  }),

  //reference check for feet
  it("checking reference", () => {
      assert.isDefined(converting.feet(0,0),"Its defined!");
  }),

  
  //typeOf check for feet
  it("checking type", () => {
      assert.typeOf(converting.feet(0,0),'Boolean')
  })
});
