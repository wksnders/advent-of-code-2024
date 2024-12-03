const testinput =
`7 6 4 2 1 
1 2 7 8 9 
9 7 6 2 1 
1 3 2 4 5 
8 6 4 4 1 
1 3 6 7 9 
1 4 7 8 9 
4 1 
41 39 38 37 
5 1 
1 3 5 5 4 
14 16 18 19 21 24 27 
332 334 337 339 
1 1 1
1 2 3
3 2 1
5 4 1
3 6 9
9 6 3
12 9 6 3 0
0 3 6 9 12 15 18 21 24 27 30 33 36 39 42
2 4 6 8 10 12 14 16 18 20 22 24 26 28 30`

const testOutput = 13;

export function solveDay2(input) {
    const reports = input.trim().split('\n')
        .map((report) => report.trim().split(" ")
            .map(Number)
        );
    return reports.filter(isSafe).length;
}   

function isSafe(report){
    return (hasNoRepetitions(report) && isIncreasingOrDecreasing(report) && isWithinTolerance(report));
}

//Any two adjacent levels differ by at least one and at most three.
function isWithinTolerance(report){
    return report.reduce((accumulator,current)=>
        {
            accumulator.isValid = accumulator.isValid && Math.abs(current-accumulator.previous)<4;
            accumulator.previous = current;
            return accumulator;
        },
        {
            isValid : true,
            previous : report[0],
        }
    ).isValid;
}

function hasNoRepetitions(report){
    //console.log("report : ",report.length ,report," set : ", new Set(report).size,new Set(report));
    return new Set(report).size === report.length;
}

//The levels are either all increasing or all decreasing.
function isIncreasingOrDecreasing(report){
    let sorted = report.toSorted((a, b) => a - b);
    //console.log("report : ", report," sorted : ", sorted, "result : ",sorted.join() === report.join() , sorted.reverse().join() === report.join());
    return sorted.join() === report.join() || sorted.reverse().join() === report.join()
}



export function solveDay2Part2(input) {

    return 0;
} 

//console.log(solveDay2(testinput2));