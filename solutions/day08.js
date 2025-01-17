const testinput =
`............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`;

const testOutput = 0;

const tryVisitInDirection = (grid,{startLocation, direction,visitedPositions} ) => {
    const [startRow, startCol] = startLocation;
    const rows = grid.length;
    const cols = grid[0].length;
    //console.log("startRow",startRow,"startCol",startCol)

    const getVisitedKey = (row, col) => `${row},${col}`;
    const row = startRow + (1 * direction[0]);
    const col = startCol + (1 * direction[1]);
    if(!(row >= 0 && col >= 0 && row < rows && col < cols)){
        return {visitedPositions};
    }
    const visitedKey = getVisitedKey(row, col);
    const isNewPosition = !visitedPositions.has(visitedKey);
    if (isNewPosition) {
        visitedPositions.add(visitedKey);
    }

    return {
        visitedPositions
    };
};


export function solvePart1(input) {
    const lines = input.split('\n');
    const grid = lines.map(line => line.split(''));
    const frequencies = new Set();
    grid.flat().map(cell => cell !== '.'? frequencies.add(cell):'');
    //console.log(frequencies);
    const visitedPositions = new Set();
    Array.from(frequencies).map((frequency)=>grid.map(((current,row) => {
        current.map(((char,col)=> {
            if(char === frequency){
                grid.map((current2,row2) => {
                    current.map(((char2,col2)=> {
                        if(char2 === frequency){
                            //visitedPositions
                            const direction = [(row-row2),(col-col2)]
                            console.log(char2,{
                                startLocation:[row,col],
                                direction,
                                visitedPositions
                            });
                            tryVisitInDirection(grid,
                                {
                                    startLocation:[row,col],
                                    direction,
                                    visitedPositions
                                });
                        }
                    }),0)
                })
            }
        }),0)
    }),0));
    return visitedPositions;
} 

export function solvePart2(input) {
    return 0;
} 
console.log(solvePart2(testinput));