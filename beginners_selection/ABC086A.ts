const input = require('fs').readFileSync('/dev/stdin', 'utf8');

function Main(input: string): string{
    const num1: number = +input.split(' ')[0];
    const num2: number = +input.split(' ')[1];
    if ((num1 * num2) % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
}

console.log(Main(input));
