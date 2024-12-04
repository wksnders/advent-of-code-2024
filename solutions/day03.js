const testinput =
`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

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

const mulDoDontRegex = /(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g;


export function solveDay3Part2(input) {
    const mulDoDontList = input.match(mulDoDontRegex);
    const mulListObj = mulDoDontList.reduce((accumulator,current)=>
        {
            if(current.startsWith('do')){
                accumulator.isRecording = current.startsWith('do(')
                return accumulator;
            }
            if(accumulator.isRecording){
                accumulator.mulList.push(current);
            } 
            return accumulator;
        },
        {
            mulList : [],
            isRecording: true
        }
    );
    console.log(mulListObj);
    
    const number = mulListObj.mulList.reduce((accumulator,current)=>
        {
            return accumulator += resolveMul(current);
        },0
    );
    console.log(number);
    return number;
} 


console.log(solveDay3Part2(testinput));