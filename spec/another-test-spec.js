'use strict';
const main = require("../main/barcode-code.js");
const fix = require('../spec/fixture.js');

describe('barcode-code', () => {
  it('return formatCode',()=>{
    const barcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
    const expectBarcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
    const legalBarcode = main.validateBarcode(barcode);

    expect(legalBarcode).toBe(expectBarcode);
  });

  it('return illegalBarcode', ()=>{
    const illegalBarcode = main.validateBarcode('|::|::a|');
  
    expect(illegalBarcode).toEqual('illegalBarcode');
  });

  it('return barcodeArray', ()=> {
    const legalBarcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
    const barcodeArray = main.covertBarcodeArray(legalBarcode);
    const expectArray = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];

    expect(barcodeArray).toEqual(expectArray);
  });
  
  it('return code', ()=> {
    const digits = fix.loadDigits1();
    const barcodeArray = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];
    const code = main.covertCode(barcodeArray,digits);
    
    const expectText = '123455'
    expect(code).toEqual(expectText);
  });
  
  it('return correctcode', ()=> {
    const correctCode = main.checkBit('123455');
    
    expect(correctCode).toBe('12345');
  })
  
  it('return wrongCode', ()=> {
    const wrongCode = main.checkBit('123456');
    
    expect(wrongCode).toBe('wrongCode');
  });

  it('should print correct Text', ()=> {
    const digits = fix.loadDigits1();
    const barcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
    spyOn(console, 'log');
    
    main.covertBarcodeToCode(barcode,digits);
    
    expect(console.log).toHaveBeenCalledWith('12345');
  });
  
});