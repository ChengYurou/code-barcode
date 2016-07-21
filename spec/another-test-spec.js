'use strict';
const main = require("../main/barcode-code.js");

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
    // const digits = fix.loadDigits();
    const legalBarcode = '|:::||::|:|::||::|::|:|:|::|:|:|';
    const barcodeArray = main.covertBarcodeArray(legalBarcode);
    const expectArray = [':::||','::|:|','::||:',':|::|',':|:|:',':|:|:'];

    expect(barcodeArray).toEqual(expectArray);
  });
  
  //
  // it('return correct barcodes', ()=>{
  //   const digits = {
  //     '0':'||:::',
  //     '1':':::||',
  //     '2':'::|:|',
  //     '3':'::||:',
  //     '4':':|::|',
  //     '5':':|:|:',
  //     '6':':||::',
  //     '7':'|:::|',
  //     '8':'|::|:',
  //     '9':'|:|::'
  //   }
  //   const barcode = main.covertBarcodes('34',digits);
  //
  //   expect(barcode).toBe('|::||::|::||')
  // });
  //
  // it('should print correct text', () => {
  //   const digits = {
  //     '0':'||:::',
  //     '1':':::||',
  //     '2':'::|:|',
  //     '3':'::||:',
  //     '4':':|::|',
  //     '5':':|:|:',
  //     '6':':||::',
  //     '7':'|:::|',
  //     '8':'|::|:',
  //     '9':'|:|::'
  //   }
  //   spyOn(console, 'log');
  //
  //   main.convertCodeToBarcode('12345',digits);
  //
  //   expect(console.log).toHaveBeenCalledWith('|:::||::|:|::||::|::|:|:|::|:|:|');
  // });
});