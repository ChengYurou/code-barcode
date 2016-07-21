'use strict';

function convertCodeToBarcode(code, digits) {
  const formatCode = validateCode(code);
  
  if (formatCode === 'illegalCode') {
    cosole.log('输入不合法！');
  } else {
    const correctCode = addCheckBit(formatCode);
    console.log(covertBarcodes(correctCode, digits));
  }
}

function validateCode(code) {
  let result = 'illegalCode';
  let formatCode = code.replace(/-/g, '');
  const checkedCode = parseInt(formatCode).toString();

  if (formatCode === checkedCode && (checkedCode.length === 5 || checkedCode.length === 9)) {
    result = formatCode;
  }

  return result;
}

function addCheckBit(formatCode) {
  let codeItems = formatCode.split('');
  let numbers = codeItems.map(codeItem => parseInt(codeItem));
  let sum = numbers.reduce((a, b) => a + b);

  return formatCode + (10 - sum % 10);
}

function covertBarcodes(correctCode, digits) {
  let barcodeArray = [];

  for (const codeItem of correctCode.split('')) {
    if (digits.hasOwnProperty(codeItem)) {
      barcodeArray.push(digits[codeItem]);
    }
  }

  return '|' + barcodeArray.join('') + '|';
}

module.exports = {
  validateCode: validateCode,
  addCheckBit: addCheckBit,
  covertBarcodes: covertBarcodes,
  convertCodeToBarcode: convertCodeToBarcode
}


