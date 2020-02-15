'use strict'
module.exports = {
  inch(inch1, inch2) {
    if (inch1 === inch2) {
      return true;
    } else {
      return false;
    }
  },

  feet(feet1, feet2) {
    if (feet1 === feet2) {
      return true;
    } else {
      return false;
    }
  },

  inchTofeet(toType,fromType, result) {
    var unitsList = ["inch","feet"]
    if (unitsList[0] == fromType && unitsList[1] == toType) {
        if(fromType == unitsList[0]){
            result = result * 12;
      console.log('result is -->',result);  
            
        }
        return result;
     }  
     
    
     if(unitsList[1] == fromType && unitsList[0] == toType){
         if(fromType == unitsList[1]) {
             result = result / 12;
                console.log('result is -->',result);
         }
         return result;
     }
     
}
}
