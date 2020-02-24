const assert = require("chai").assert;
const converting = require("../Measurement/quantitymeasurement");

// ------------ CONVERSION ------------------
describe("converting units", function () {
  it("When given 0 inch and 0 inch should return equals", () => {
      var inch = converting.unitConversion("inch", "length", 0);
      var inch1 = converting.unitConversion("inch", "length", 0);
      assert.equal(inch, inch1);
    }),
  
    it("When given 0 feet and 0 feet should return equals", () => {
      var feet = converting.unitConversion("feet", "length", 0);
      var feet1 = converting.unitConversion("feet", "length", 0);
      assert.equal(feet, feet1);
    }),
    
    it("when given null should through exception", () => {
      var inch = converting.unitConversion("inch", "length", 0);
      var inch1 = converting.unitConversion("inch", "length", 0);
      assert.isNotNull(inch1, inch);
    }),
   
    it("When given inch and inch should check reference equal", () => {
      var inch = converting.unitConversion("inch", "length", 0);
      var inch1 = converting.unitConversion("inch", "length", 0);
      assert.isDefined(inch, inch1);
    }),
   
    it("When given feet and feet should check if null or not", () => {
      var feet = converting.unitConversion("feet", "length", 0);
      var feet1 = converting.unitConversion("feet", "length", 0);
      assert.isNotNull(feet, feet1);
    }),
    
    it(" When given feet and feet should check reference", () => {
      var feet = converting.unitConversion("feet", "length", 1);
      var feet1 = converting.unitConversion("feet", "length", 1);
      assert.isDefined(feet, feet1);
    }),

    
    it("When given 1 feet and  12 inch should return equal", () => {
      var feet = converting.unitConversion("feet", "length", 1);
      var inch = converting.unitConversion("inch", "length", 12);
      assert.equal(feet, inch);
    }),
    
    it("When given 1 feet and 1 inch should return equal", () => {
      var feet = converting.unitConversion("feet", "length", 1);
      var inch = converting.unitConversion("inch", "length", 1);
      assert.notEqual(feet, inch);
    }),
   
    it("When given 1 yard and 36 inch should return equal", () => {
      var yard = converting.unitConversion("yard", "length", 1);
      var inch = converting.unitConversion("inch", "length", 36);
      assert.equal(yard, inch);
    }),
   
    it("When given 1 yard and 1 inch should return not equal", () => {
      var yard = converting.unitConversion("yard", "length", 1);
      var inch = converting.unitConversion("inch", "length", 1);
      assert.notEqual(yard, inch);
    }),
    
    it("When given 1 yard and 1 feet should return not equals", () => {
      var yard = converting.unitConversion("yard", "length", 1);
      var feet = converting.unitConversion("feet", "length", 1)
      assert.notEqual(yard, feet);
    }),
   
    it("When given 1 gallon and 3.78 litres should return equals", () => {
      var gallon = converting.unitConversion("gallon", "volumn", 1);
      var litre = converting.unitConversion("litre", "volumn", 3.78);
      assert.equal(gallon, litre);
    }),
   
    it("When given 1 litres and 1000 mililitres should return equals", () => {
      var litre = converting.unitConversion("litre", "volumn", 1);
      var ml = converting.unitConversion("ml", "volumn", 1000);
      assert.equal(litre, ml);
    }),
   
    it("When given 1 kiligrams should return 1000 grams", () => {
      var kg = converting.unitConversion("kilograms", "mass", 1);
      var grams = converting.unitConversion("grams", "mass", 1000);
      assert.equal(kg, grams);
    }),

    it("When given 1 tonne should return 1000 kilograms", () => {
      var tonne = converting.unitConversion("tonne", "mass", 1);
      var kgs = converting.unitConversion("kilograms", "mass", 1000);
      assert.equal(tonne, kgs);
    }),

    it("When given 212 farhenhiet should return 100 celcius", () => {
      var result1 = Math.ceil(converting.unitConversion("fahrenheit", "temperature", 212));
      assert.equal(100, result1);
    });
});


//--------------- ADDITION ----------------------
describe("unit additions", function () {
  it("When given 2 inch and 2 inch should return 4 inch", () => {
    var value1 = converting.unitConversion("inch","length",2);
    var value2 = converting.unitConversion("inch","length",2);
    assert.equal(4,converting.getAddition(value1,value2));
    }),
    
    it("When given 2 inch and 1 feet should return 14 inch", () => {
      var value1 = converting.unitConversion("inch","length",2);
      var value2 = converting.unitConversion("feet","length",1);
      assert.equal(14,converting.getAddition(value1,value2));
    }),
    
    it("When given 1 feet and 1 feet should return 24 inch", () => {
      var value1 = converting.unitConversion("feet","length",1);
      var value2 = converting.unitConversion("feet","length",1);
      assert.equal(24,converting.getAddition(value1,value2));
    }),
   
    it("When given 2 inch and 1.5 cm should return 3 inch", () => {
      var value1 = converting.unitConversion("inch","length",2);
      var value2 = converting.unitConversion("cm","length",2.5);
      assert.equal(3,Math.ceil(converting.getAddition(value1,value2)));
    }),
    
    it("When given 1 gallon and 3.78 litres should return 7.56 litres", () => {
      var value1 = converting.unitConversion("gallon","volumn",1);
      var value2 = converting.unitConversion("litre","volumn",3.78);
      assert.equal(7.56,converting.getAddition(value1,value2));
    }),
   
    it("When given 1 tonne and 1000gms should return 1001 kgs", () => {
      var value1 = converting.unitConversion("tonne","mass",1);
      var value2 = converting.unitConversion("grams","mass",1000);
      assert.equal(1001,converting.getAddition(value1,value2));
    });
});