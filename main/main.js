'use strict';

function convertCodeToBarcode(code, digits) {
  const formatCode = validateCode(code);

  if (formatCode === 'illegalCode') {
    cosole.log('输入不合法！');
  } else {
    const numbers = addCheckBit(formatCode);
    console.log(covertBarcodes(numbers, digits));
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

  let bit = sum%10!=0 ? (10-sum%10):0;
  numbers.push(bit);

  return numbers;
}

function covertBarcodes(numbers, digits) {
  let barcodeArray = [];

  for (const number of numbers) {
    barcodeArray.push(digits[number.toString()]);
  }

  return '|' + barcodeArray.join('') + '|';
}

module.exports = {
  validateCode: validateCode,
  addCheckBit: addCheckBit,
  covertBarcodes: covertBarcodes,
  convertCodeToBarcode: convertCodeToBarcode
}


