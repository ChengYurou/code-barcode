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
  let code = '';
  for(let barcodeItem of barcodeArray) {
    const digit = digits.find(item => item.digit === barcodeItem);
    code += digit.key;
  }

  return code;
}

function checkBit(code) {
  let result = 'wrongCode'
  let nums = code.split('').map(codeItem => parseInt(codeItem));
  let sum = nums.reduce((a,b) => a+b);
  
  if(sum%10 === 0) {
    result = code.substr(0,code.length-1);
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