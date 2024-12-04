const testinput =
`xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

const testOutput = 161;

const mulRegex = /mul\(\d+,\d+\)/g;
const digitRegex = /\d+/g;


export function solveDay3(input) {
    const mulList = input.match(mulRegex);
    const number = mulList.reduce((accumulator,current)=>
        {
            return accumulator += resolveMul(current);
        },0
    );
    console.log(number);
    return number;
} 
function resolveMul(mul){
    const digits = mul.match(digitRegex);
    return digits.reduce((accumulator, currentValue) => accumulator * currentValue,1);
}

export function solveDay3Part2(input) {
    const mulList = input.match(mulRegex);
    const lists = mulList.reduce((accumulator,current)=>
        {
            
            accumulator.total += isRecording ? resolveMul(current) : 0;
            return ;
        },
        {
            total : 0,
            isRecording: true
        }
    );
    console.log(lists);
    return lists;
} 
const mulDoDontRegex = /(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g;


console.log(solveDay3(testinput));