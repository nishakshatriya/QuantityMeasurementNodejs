const assert = require("chai").assert;
const converting = require("../Measurement/quantitymeasurement");

// ------------ CONVERSION ------------------
describe("converting units", function() {
  //inches
    it("0 inch should return 0 inch", () => {
     assert.equal(0, converting.lengthConversion("inch", "length", 0));
  }),
    //feet
    it("0 feet should return 0 feet", () => {
      assert.equal(0, converting.lengthConversion("feet", "length", 0));
    }),
    // null check
    it("when given null should through exception", () => {
      assert.isNotNull(0, converting.lengthConversion("inch", "length", 0));
    }),
    //reference check
    it("checking reference", () => {
      assert.isDefined(1,converting.lengthConversion("inch", "length", 1),"Its defined!");
    }),
    //typeOf
    it("checking type", () => {
      assert.typeOf(converting.lengthConversion("inch", "length", 1), "Number");
    }),
    // null check for feet
    it("when given null should through exception", () => {
      assert.isNotNull(0, converting.lengthConversion("feet", "length", 0));
    }),
    //reference check for feet
    it("checking reference", () => { 
      assert.isDefined( 1, converting.lengthConversion("feet", "length", 1),"Its defined!" );
    }),
    //typeOf check for feet
    it("checking type", () => {
      assert.typeOf(converting.lengthConversion("feet", "length", 1), "Number");
    }),
    //check feet to inch conversion
    it(" 1 feet equals 12 inch", () => {
      assert.equal(12, converting.lengthConversion("feet", "length", 1));
    })
    //check inch to feet conversion
    it(" 12 inch equals 1 feet", () => {
      assert.equal(12, converting.lengthConversion("inch", "length", 12));
    })
    //check feet not equal to inch
    it(" 1 feet not equal to 1 inch", () => {
      assert.notEqual(1, converting.lengthConversion("feet", "length", 1));
    }),
    //check inch not equal to feet
    it(" 1 inch not equals to 1 feet", () => {
      assert.notEqual(converting.lengthConversion("inch", "length", 1));
    }),
    //check 1 yard equals 36 inches
    it(" 1 yard equals 36 inches", () => {
      assert.equal(36,converting.lengthConversion("yard","length",1));
    }),
    //check 1 inch not equals 1 yard
    it("1 yd not equal 1 inch", () => {
      assert.notEqual(1,converting.lengthConversion("yard","length",1));
    }),
    //check 1 yard not equals 1 feet
    it("1 yd not equals to 1 feet",() => {
      assert.notEqual(1,converting.lengthConversion("yard","length",1));
    }),
    //check 1 feet not equals 1 yard
    it("1 ft not equals 1 yd",() => {
      assert.notEqual(1,converting.lengthConversion("feet","length",1));
    })
});
//--------------- ADDITION ----------------------
describe("unit additions",function(){
  //adding 2inch + 2inch equals 4 
  it("addition is 4",() => {
    assert.equal(4,converting.getAddition("inch",2,"inch",2,"length"));
  }),
  //addition of 1feet and 2inch equals 14inch
  it("addition is 14",() => {
    assert.equal(14,converting.getAddition("inch",2,"feet",1,"length"));
  }),
  //addition of 1ft + 1ft equals 24 inch
  it("addition is 24inch",() => {
    assert.equal(24,converting.getAddition("feet",1,"feet",1,"length"));
  })
});
