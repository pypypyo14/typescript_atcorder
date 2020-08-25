const input = require('fs').readFileSync('/dev/stdin', 'utf8');

function Main(input: string): string{
    const inputArray: string[] = input.split("\n");
    const num1: number = +inputArray[0]
    const num2: number = +inputArray[1].split(' ')[0];
    const num3: number = +inputArray[1].split(' ')[1];
    const str: string  = inputArray[2]; 
    const result:string = (num1 + num2 + num3).toString() + ' ' + str; 
    return result;
}

console.log(Main(input));
