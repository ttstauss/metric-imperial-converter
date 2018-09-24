/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
    
      var initNum = convertHandler.getNum(input);
      console.log('initNum', initNum)
    
      var initUnit = convertHandler.getUnit(input);
      console.log('initUnit', initUnit)
    
      var returnNum = convertHandler.convert(initNum, initUnit);
      console.log('returnNum', returnNum)
    
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log('returnUnit', returnUnit)
    
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      console.log('toString', toString)
    
      if (!initNum && returnUnit === 'invalid unit') {
        return res.json('invalid number and unit')
      }
      
      if (!initNum) {
        return res.json('invalid number')
      }
    
      if (returnUnit === 'invalid unit') {
        return res.json('invalid unit')
      }
      
      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        toString
      })
    });
    
};
