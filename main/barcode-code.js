'use strict';
function covertBarcodeToCode(barcode,digits) {
  if(validateBarcode(barcode) === 'illegalBarcode'){
    console.log('illegalBarcode');
  }else {
    const barcodeArray = covertBarcodeArray(validateBarcode(barcode));
    const code = covertCode(barcodeArray,digits);

    if(checkBit(code) === 'wrongCode'){
      console.log('wrongCode');
    }else {
      console.log(checkBit(code));
    }
  }
}

function validateBarcode(barcode) {
  let resultCode = 'illegalBarcode';
  if((barcode.length-2)%5 === 0){
    resultCode = barcode;
  }

  return resultCode;
}

function covertBarcodeArray(legalBarcode) {
  let barcodeArray = [];
  for (let index=1; index<legalBarcode.length-1; index+=5){
    barcodeArray.push(legalBarcode.substr(index,5));
  }
   
  return barcodeArray;
}

function covertCode(barcodeArray,digits) {
  
return barcodeArray.map(barcodeItem => digits.find(digit => digit.item===barcodeItem).key).join('');
}

function checkBit(code) {
  let result = 'wrongCode'
  let sum = code.split('').map(codeItem => parseInt(codeItem)).reduce((a,b) => a+b);
  
  if(sum%10 === 0) {
    result = code.substr(0,code.length-1);
    if(result.length != 5) {
      result.substr(0,5)+'-'+result.substr(5);
    }
  }

  return result;
}

module.exports = {
  validateBarcode:validateBarcode,
  covertBarcodeArray:covertBarcodeArray,
  covertCode:covertCode,
  checkBit:checkBit,
  covertBarcodeToCode:covertBarcodeToCode
}