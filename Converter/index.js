const inputData = require('./inputData');
const unitData = require('./unitData');
const unitData2 = require('./unitData2');

//First variant 

const convertValue = ({ convert_to, distance:{value,unit} }, coefficient) => {
  if (unit === "m") {
    return value * coefficient.m[convert_to]
  }
  return value*coefficient[unit]
}

const resultObj = {
  "unit": inputData.convert_to,
  "value": Number(convertValue(inputData,unitData).toFixed(2))
}

const output = JSON.stringify(resultObj)

console.log(output)

//Second variant


const convertation = (item, coefficient) => {
  const { convert_to, distance:{unit,value}} = item;
  return {
    "unit": convert_to,
    "value": Number((value * coefficient[unit][convert_to]).toFixed(2))
  }
};

const output2 = JSON.stringify(convertation(inputData, unitData2));

console.log(output2)






