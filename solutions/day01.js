const testinput =
`3   4
4   3
2   5
1   3
3   9
3   3`;

const testOutput = 11;


export function solveDay1(input) {
    let a = [];
    let b = [];
    input.split('\n')
    .map((l) => l.split("   ").map(toNumber));//[num][num]

    return 0; 
}

function distance(a, b) {
    return Math.abs(a - b);
}

function buildList(a){
    return function(b){
        return [...b,a]
    }

}

function toNumber(x){
    return +x;
}