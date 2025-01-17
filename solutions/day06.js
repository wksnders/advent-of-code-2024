const testinput =
`....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

const testOutput = 41;


const orthagonalDirections = [
    [-1,0],
    [0,1],
    [1,0],
    [0,-1],
];

const searchDirectionUntilHash = (grid,{hitHash, direction, visitedPositions,explorationScore} ) => {
    const [startRow, startCol] = hitHash;
    const rows = grid.length;
    const cols = grid[0].length;
    //console.log("startRow",startRow,"startCol",startCol)

    const getVisitedKey = (row, col) => `${row},${col}`;
    //console.log("direction",orthagonalDirections[direction]);
    //console.log("direction",orthagonalDirections[direction][0]);
    const positions = Array.from({ length: Math.max(rows, cols) }, (_, i) => {
        const row = startRow + (i * orthagonalDirections[direction][0]);
        const col = startCol + (i * orthagonalDirections[direction][1]);
        //console.log("pos",row,",",col);
        return row >= 0 && col >= 0 && row < rows && col < cols ? [row, col] : null;
    }).filter(position => position !== null);
    console.log("positions",positions);
    let hitHash2 = null;

    const result = positions.reduce((acc, [row, col], i) => {
        if(acc.foundHash){
            return acc;
        }
        if (grid[row][col] === '#') {
            console.log("end pos =",row,col,grid[row][col]);
            hitHash2 = positions[i - 1] || null; // Get the previous position
            return { ...acc, foundHash: true };
        }

        const visitedKey = getVisitedKey(row, col);
        const isNewPosition = !visitedPositions.has(visitedKey);
        if (isNewPosition) {
            explorationScore += 1;
            visitedPositions.add(visitedKey);
        }
        return acc;
    }, {
        foundHash: false
    });

    const noHashes = !result.foundHash;

    return {
        hitHash : hitHash2,
        noHashes,
        visitedPositions,
        direction: ((direction + 1)%4),
        explorationScore
    };
};


const findCharacterInGrid = (grid, targetChar) => {
    const positions = grid.flatMap((row, rowIndex) =>
        row.map((cell, colIndex) => ({ rowIndex, colIndex, cell }))
    );

    const found = positions.find(({ cell }) => cell === targetChar);

    return found ? { row: found.rowIndex, col: found.colIndex } : null;
};

export function solvePart1(input) {
    
    const lines = input.split('\n');
    const grid = lines.map(line => line.split(''));
    const start = findCharacterInGrid(grid,'^');
    console.log(start);
    const visitedPositions = new Set();
    let store = searchDirectionUntilHash(grid, 
        {
            hitHash:[start.row, start.col], 
            direction:0, 
            visitedPositions,
            explorationScore:0
        });
        console.log("result",store);
    while(!store.noHashes && store.hitHash){
        store = searchDirectionUntilHash(
            grid,
            store
        );
        console.log("result",store);
    }
    
    return store.explorationScore;
} 

export function solvePart2(input) {
    return 0;
} 
//console.log(solveDay6(testinput));