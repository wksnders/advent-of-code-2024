const testinput =
`3   4
4   3
2   5
1   3
3   9
3   3`;

const testOutput = 11;
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const trace = msg => x => {
    console.log(msg, x);
    return x;
  }

export function solveDay1(input) {
    const lists = input.split('\n')
        .map((l) => l.split("   ")
            .map((num) => 
            pipe(
                /*trace('num'),*/
                x => +x,
            )(num))
        );
    //TODO how can I make this work for arbitrary num lists?
    let a = lists.map((line)=>line[0]).sort();
    let b = lists.map((line)=>line[1]).sort();

    return a.reduce((total,numA,index) => total + distance(numA,b[index]),0);
}   


function distance(a, b) {
    return Math.abs(a - b);
}

export function solveDay1Part2(input) {
    const lists = input.split('\n')
        .map((l) => l.split("   ")
            .map((num) => 
            pipe(
                x => +x,
            )(num))
        );
    let a = lists.map((line)=>line[0]).sort();
    let b = lists.map((line)=>line[1]);

    return a.reduce((total,numA) => total + similarity(numA,b),0);
} 

function similarity(a, b) {
    return a * b.filter((num) => num === a).length;
}
//console.log(solveDay1(testinput));