function Main(stdin: string): number{
    const inputArray: string[] = stdin.split('');
    let result: number = 0;
    for (let num of inputArray) {
        if (num === '1'){
            result ++;
        }
    }
    return result;
}

console.log(Main(require('fs').readFileSync('/dev/stdin', 'utf8')));