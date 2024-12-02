const testinput =
`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

const testOutput = 2;

function solveDay2(input) {
    const reports = input.split('\n')
        .map((report) => report.split(" ")
            .map(Number)
        );
        
    return reports.filter(isSafe).length;
}   

function isSafe(report){
    return hasNoRepetitions(report) && isIncreasingOrDecreasing(report) && isWithinTolerance
}

    //Any two adjacent levels differ by at least one and at most three.

function isWithinTolerance(report){
    report.reduce((previous,current)=>current)//TODO
    return true
}

function hasNoRepetitions(report){
    //console.log("report : ",report.length ,report," set : ", new Set(report).size,new Set(report));
    return new Set(report).size === report.length;
}

//The levels are either all increasing or all decreasing.
function isIncreasingOrDecreasing(report){
    let sorted = report.toSorted();
    //console.log("report : ", report," sorted : ", sorted, "result : ",sorted.join() === report.join() , sorted.reverse().join() === report.join());
    return sorted.join() === report.join() || sorted.reverse().join() === report.join()
}



function solveDay2Part2(input) {

    return 0;
} 

console.log(solveDay2(testinput));