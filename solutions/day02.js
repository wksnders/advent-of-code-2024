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
            .map((num) => +num)
        );
        
    return reports.reduce((totalSafe,report) => totalSafe + (1*isSafe(report)),0);
}   

function isSafe(report){

    return true
}

function solveDay2Part2(input) {

    return 0;
} 

console.log(solveDay2(testinput));