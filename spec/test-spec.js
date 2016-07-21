'use strict';
const main = require("../main/main.js");

describe('code-barcode', () => {
  it('return formatCode',()=>{
    const formatCode = main.validateCode('45056-1234');
    
    expect(formatCode).toBe('450561234');
  });
  
  it('return illegalCode', ()=>{
    const illegalCode = main.validateCode('442a');
    
    expect(illegalCode).toEqual('illegalCode');
  });
  
  it('return correctCode', ()=> {
    const correctCode = main.addCheckBit('12345');
    
    expect(correctCode).toBe('123455');
  });
  
  it('return correct barcodes', ()=>{
    const digits = {
      '0':'||:::',
      '1':':::||',
      '2':'::|:|',
      '3':'::||:',
      '4':':|::|',
      '5':':|:|:',
      '6':':||::',
      '7':'|:::|',
      '8':'|::|:',
      '9':'|:|::'
    }
    const barcode = main.covertBarcodes('34',digits);
    
    expect(barcode).toBe('|::||::|::||')
  });
  
  it('should print correct text', () => {
    const digits = {
      '0':'||:::',
      '1':':::||',
      '2':'::|:|',
      '3':'::||:',
      '4':':|::|',
      '5':':|:|:',
      '6':':||::',
      '7':'|:::|',
      '8':'|::|:',
      '9':'|:|::'
    }
    spyOn(console, 'log');

    main.convertCodeToBarcode('12345',digits);
    
    expect(console.log).toHaveBeenCalledWith('|:::||::|:|::||::|::|:|:|::|:|:|');
  });
});
