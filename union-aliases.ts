type Combinable = number | string;
type ConversionDescriptor = 'as number' | 'as text' // literal type
function combine(
    num1: Combinable,
    num2: Combinable, 
    resultConversion: ConversionDescriptor 
    ) {
    let result;
    if (typeof(num1) === 'number' && typeof(num2) === 'number') {
        result = num1 + num2
    } else {
        result = num1.toString() + ' ' + num2.toString()
    }
    if (resultConversion === 'as number') {
        return +result.replace(/\s/g, '');
    } else {
        return result.toString();
    }

}
const combinenedAges = combine(31, 24, 'as text');
console.log(combinenedAges);

const combinenedStringAges = combine('31', '24', 'as number');
console.log(combinenedStringAges);

const combinenedNames = combine('Yevhen', 'Iryna', 'as text');
console.log(combinenedNames);
