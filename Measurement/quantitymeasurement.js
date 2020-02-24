"use strict";

var jsonFile = require("../Measurement/unitTypes.json");
module.exports = {
  unitConversion(fromType, toType, unitValue) {
    var result,
      inputValue = unitValue;

    var keys = Object.keys(jsonFile);

    for (var i = 0; i < keys.length; i++) {
      if (keys[i] == toType) {
        var retrieveKeys = Object.keys(jsonFile[keys[i]]);
        for (var j = 0; j < retrieveKeys.length; j++) {
          if (retrieveKeys[j] == fromType) {
            result = jsonFile[keys[i]][retrieveKeys[j]] * inputValue;
          }
        }
        return result;
      }
    }
  },

  getAddition(value1,value2) {
    var additionResult = value1 + value2;
    return additionResult;
  }
};
