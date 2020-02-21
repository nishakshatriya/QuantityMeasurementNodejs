const assert = require("chai").assert;
const converting = require("../Measurement/quantitymeasurement");

// ------------ CONVERSION ------------------
describe("converting units", function () {
  //inches
  it("0 inch should return 0 inch", () => {
      var inch = converting.unitConversion("inch", "length", 0);
      var inch1 = converting.unitConversion("inch", "length", 0);
      assert.equal(inch, inch1);
    }),
    //feet
    it("0 feet should return 0 feet", () => {
      var feet = converting.unitConversion("feet", "length", 0);
      var feet1 = converting.unitConversion("feet", "length", 0);
      assert.equal(feet, feet1);
    }),
    // null check
    it("when given null should through exception", () => {
      var inch = converting.unitConversion("inch", "length", 0);
      var inch1 = converting.unitConversion("inch", "length", 0);
      assert.isNotNull(inch1, inch);
    }),
    //reference check
    it("checking reference", () => {
      var inch = converting.unitConversion("inch", "length", 0);
      var inch1 = converting.unitConversion("inch", "length", 0);
      assert.isDefined(inch, inch1);
    }),
    // null check for feet
    it("when given null should through exception", () => {
      var feet = converting.unitConversion("feet", "length", 0);
      var feet1 = converting.unitConversion("feet", "length", 0);
      assert.isNotNull(feet, feet1);
    }),
    //reference check for feet
    it("checking reference", () => {
      var feet = converting.unitConversion("feet", "length", 1);
      var feet1 = converting.unitConversion("feet", "length", 1);
      assert.isDefined(feet, feet1);
    }),

    //check feet to inch conversion
    it(" 1 feet equals 12 inch", () => {
      var feet = converting.unitConversion("feet", "length", 1);
      var inch = converting.unitConversion("inch", "length", 12);
      assert.equal(feet, inch);
    }),
    //check feet not equal to inch
    it(" 1 feet not equal to 1 inch", () => {
      var feet = converting.unitConversion("feet", "length", 1);
      var inch = converting.unitConversion("inch", "length", 1);
      assert.notEqual(feet, inch);
    }),
    //check 1 yard equals 36 inches
    it(" 1 yard equals 36 inches", () => {
      var yard = converting.unitConversion("yard", "length", 1);
      var inch = converting.unitConversion("inch", "length", 36);
      assert.equal(yard, inch);
    }),
    //check 1 inch not equals 1 yard
    it("1 yd not equal 1 inch", () => {
      var yard = converting.unitConversion("yard", "length", 1);
      var inch = converting.unitConversion("inch", "length", 1);
      assert.notEqual(yard, inch);
    }),
    //check 1 yard not equals 1 feet
    it("1 yd not equals to 1 feet", () => {
      var yard = converting.unitConversion("yard", "length", 1);
      var feet = converting.unitConversion("feet", "length", 1)
      assert.notEqual(yard, feet);
    }),
    //check 1 gallon equals 3.78 lt
    it("1 gl equals 3.78lt", () => {
      var gallon = converting.unitConversion("gallon", "volumn", 1);
      var litre = converting.unitConversion("litre", "volumn", 3.78);
      assert.equal(gallon, litre);
    }),
    //addition of 1ltr and 1000ml equals 2ltr
    it("addition is 2ltr", () => {
      var litre = converting.unitConversion("litre", "volumn", 1);
      var ml = converting.unitConversion("ml", "volumn", 1000);
      assert.equal(litre, ml);
    }),
    //check 1kg equals 1000gms
    it("1 kg equals 1000gm", () => {
      var kg = converting.unitConversion("kilograms", "mass", 1);
      var grams = converting.unitConversion("grams", "mass", 1000);
      assert.equal(kg, grams);
    }),
    it("1 tonne equals 1000kgs", () => {
      var tonne = converting.unitConversion("tonne", "mass", 1);
      var kgs = converting.unitConversion("kilograms", "mass", 1000);
      assert.equal(tonne, kgs);
    }),
    it("Converting fahrenheit to celcius", () => {
      var result1 = Math.ceil(converting.unitConversion("fahrenheit", "temperature", 212));
      assert.equal(100, result1);
    });
});


//--------------- ADDITION ----------------------
describe("unit additions", function () {
  //adding 2inch + 2inch equals 4
  it("addition is 4", () => {
      assert.equal(4, converting.getAddition("inch", 2, "inch", 2, "length"));
    }),
    //addition of 1feet and 2inch equals 14inch
    it("addition is 14", () => {
      assert.equal(14, converting.getAddition("inch", 2, "feet", 1, "length"));
    }),
    //addition of 1ft + 1ft equals 24 inch
    it("addition is 24inch", () => {
      assert.equal(24, converting.getAddition("feet", 1, "feet", 1, "length"));
    }),
    //addition of 2 inch and 2.5cm = 3inch
    it("addition is 3inch", () => {
      assert.equal(2.98425, converting.getAddition("inch", 2, "cm", 2.5, "length"));
    }),
    //addition of 1gl and 3.78lt equals 7.57ltr
    it("addition is 7.57 ltr", () => {
      assert.equal(7.56, converting.getAddition("gallon", 1, "litre", 3.78, "volumn"));
    }),
    //addition of 1tonne and 1000gm equals 1001kg
    it("addition is 1001kg ", () => {
      assert.equal(1001, converting.getAddition("tonne", 1, "grams", 1000, "mass"));
    });
});