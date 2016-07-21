'use strict';

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

module.exports = {
  validateBarcode:validateBarcode,
  covertBarcodeArray:covertBarcodeArray,
}