 "use strict";

var jsonFile = require("../Measurement/unitTypes.json");
module.exports = {
  lengthConversion(fromType, toType, unitValue) {
    var result,
      inputValue = unitValue;

    var keys = Object.keys(jsonFile);

    for (var i = 0; i < keys.length; i++) {
      console.log("unit--->", keys[i]);

      if (keys[i] == toType) {
        var retrieveKeys = Object.keys(jsonFile[keys[i]]);
        console.log("something value --->", retrieveKeys);
        for (var j = 0; j < retrieveKeys.length; j++) {
          console.log(retrieveKeys[j] + "--->" + fromType);

          if (retrieveKeys[j] == fromType) {
            result = (jsonFile[keys[i]][retrieveKeys[j]] * inputValue);
            console.log("result value --->", result);
          }
        }
        return result;
      }
    }
  },

  getAddition(fromType,first,toType,second,unitValue){
    var first = this.lengthConversion(fromType,unitValue,first);
    var second = this.lengthConversion(toType,unitValue,second);
    console.log(first);
    console.log(second);
    
    
    var additionResult = (first + second);
    console.log('addition is -->',additionResult);

    return additionResult;
  }
  
};
