/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var regex = /[a-zA-Z]/
    result = input.substring(0, input.search(regex))
    
    let resultArr =  result.split('/')
    if (resultArr.length === 2) {
      return resultArr[0] / resultArr[1]
    }
    
    if (result === '') {
     return 1 
    }
    
    return +result;
  };
  
  this.getUnit = function(input) {
    var result;
    var regex = /[a-zA-Z]/
    result = input.substring(input.search(regex), input.length)
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    initUnit = initUnit.toLowerCase()
    switch (initUnit) {
      case 'gal':
        result = 'l'
        break
      case 'l':
        result = 'gal'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      case'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
        break
      default:
        result = 'invalid unit'
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result = unit;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    let initNumArr =  initNum.toString().split('/')
    if (initNumArr.length === 2) {
      initNum = initNumArr[0] / initNumArr[1]
    }
    
    initUnit = initUnit.toLowerCase()
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
      default:
        result = 1
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    result = `
      ${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit}
    `
    
    return result;
  };
  
}

module.exports = ConvertHandler;
