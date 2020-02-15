const assert = require("chai").assert;
const converting = require("../Measurement/quantitymeasurement");

describe("comparing inch", function() {
  //inches
    it("0 inch should return 0 inch", () => {
     assert.equal(0, converting.inchTofeet("inch", "inch", 0));
  }),
    //feet
    it("0 feet should return 0 feet", () => {
      assert.equal(0, converting.inchTofeet("feet", "feet", 0));
    }),
    // null check
    it("when given null should through exception", () => {
      assert.isNotNull(0, converting.inchTofeet("inch", "inch", 0));
    }),
    //reference check
    it("checking reference", () => {
      assert.isDefined(1,converting.inchTofeet("inch", "inch", 1),"Its defined!");
    }),
    //typeOf
    it("checking type", () => {
      assert.typeOf(converting.inchTofeet("inch", "inch", 1), "Number");
    }),
    // null check for feet
    it("when given null should through exception", () => {
      assert.isNotNull(0, converting.inchTofeet("feet", "feet", 0));
    }),
    //reference check for feet
    it("checking reference", () => { 
      assert.isDefined( 1, converting.inchTofeet("feet", "feet", 1),"Its defined!" );
    }),
    //typeOf check for feet
    it("checking type", () => {
      assert.typeOf(converting.inchTofeet("feet", "feet", 1), "Number");
    }),
    //check feet to inch conversion
    it(" 1 feet equals 12 inch", () => {
      assert.equal(12, converting.inchTofeet("feet", "inch", 1));
    }),
    //check inch to feet conversion
    it(" 12 inch equals 1 feet", () => {
      assert.equal(1, converting.inchTofeet("inch", "feet", 12));
    }),
    //check feet not equal to inch
    it(" 1 feet not equal to 1 inch", () => {
      assert.notEqual(1, converting.inchTofeet("feet", "inch", 1));
    }),
    //check inch not equal to feet
    it(" 1 inch not equals to 1 feet", () => {
      assert.notEqual(converting.inchTofeet("inch", "feet", 1));
    });
});
