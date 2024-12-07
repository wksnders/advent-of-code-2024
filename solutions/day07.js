const testinput =
`190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

const testOutput = 0;

function parseline(line){
    const parts = line.split(': ');
    return {
        result : Number(parts[0]),
        values : parts[1].split(' ').map(Number)
    }
}

function bruteForceMultipladd(target,current,values){
    if(current > target){
        return current;
    }
    if(values.length === 0){
        return current;
    }
    const added = bruteForceMultipladd(target,current + values[0] ,values.slice(1));
    if(added === target){
        return added;
    }
    const multiplied = bruteForceMultipladd(target,current * values[0],values.slice(1));
    return multiplied;
}

function equationTest({result,values}){
    return bruteForceMultipladd(result,values[0],values.slice(1)) === result? result : 0;
}

export function solveDay7(input) {
    const lines = input.split('\n');
    
    const equasions =lines.map(parseline);
    return equasions.reduce(((accumulator,current) => {
        //console.log("equation",current," result",equationTest(current))
        return accumulator + 1*equationTest(current)
    }),0);
} 

function bruteForceMultiCatAdd(target,current,values){
    if(current > target){
        return current;
    }
    if(values.length === 0){
        return current;
    }
    const added = bruteForceMultiCatAdd(target,current + values[0] ,values.slice(1));
    if(added === target){
        return added;
    }
    const multiplied = bruteForceMultiCatAdd(target,current * values[0],values.slice(1));
    if(target === multiplied){
        return multiplied;
    }
    const concat = bruteForceMultiCatAdd(target,1*("".concat(current,values[0])),values.slice(1));
    return concat;
}

function equationTest2({result,values}){
    return bruteForceMultiCatAdd(result,values[0],values.slice(1)) === result? result : 0;
}

export function solveDay7Part2(input) {
    const lines = input.split('\n');
    
    const equasions =lines.map(parseline);
    return equasions.reduce(((accumulator,current) => {
        //console.log("equation",current," result",equationTest2(current))
        return accumulator + 1*equationTest2(current)
    }),0);
} 
console.log(solveDay7Part2(testinput));