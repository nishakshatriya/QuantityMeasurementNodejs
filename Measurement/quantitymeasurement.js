// "use strict";

var jsonFile = require("../Measurement/unitTypes.json");
module.exports = {
  lengthConversion(unitType1, unitType2, unitValue) {
    var result,
      input = unitValue;

    var keys = Object.keys(jsonFile);

    for (var i = 0; i < keys.length; i++) {
      console.log("unit------------>", keys[i]);

      if (keys[i] == unitType2) {
        var something = Object.keys(jsonFile[keys[i]]);
        console.log("something value --->", something);
        for (var j = 0; j < something.length; j++) {
          console.log(something[j] + "ajsdhgajhsdgasjhdas" + unitType1);

          if (something[j] == unitType1) {
            result = jsonFile[keys[i]][something[j]] * input;
            console.log("result value --------------->", result);

            var result1 = Math.round(result);
          }
        }
        return result1;
      }
    }
  }
};
