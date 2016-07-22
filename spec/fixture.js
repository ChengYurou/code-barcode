function loadDigits() {
  return {
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
  };
}

function loadDigits1() {
  return [
    {key:'0', digit:'||:::'},
    {key:'1', digit:':::||'},
    {key:'2', digit:'::|:|'},
    {key:'3', digit:'::||:'},
    {key:'4', digit:':|::|'},
    {key:'5', digit:':|:|:'},
    {key:'6', digit:':||::'},
    {key:'7', digit:'|:::|'},
    {key:'8', digit:'|::|:'},
    {key:'9', digit:'|:|::'}
  ]
}

module.exports = {
  loadDigits:loadDigits,
  loadDigits1:loadDigits1
};