const testinput =
`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const testOutput = 18;

const searchDirection = (grid, word, startRow, startCol, direction) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const wordLength = word.length;

    const positions = Array.from({ length: wordLength }, (_, i) => [
        startRow + i * direction[0],
        startCol + i * direction[1],
    ]);

    if (positions.some(([r, c]) => r < 0 || c < 0 || r >= rows || c >= cols)) {
        return false;
    }
    //positions.map(([r, c]) => console.log(grid[r][c]))
    return positions.every(([r, c], i) => grid[r][c] === word[i]);
};

const getNumWordsAtPos = (grid, word, startRow, startCol) => {
    return directions.reduce(((accumulator,direction) => accumulator += 1*searchDirection(grid,word,startRow,startCol,direction)),0);
}

const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
    [0, -1],
    [-1, 0],
    [-1, -1],
    [-1, 1],
];

export function solveDay4(input) {
    const lines = input.split('\n');
    const grid = lines.map(line => line.split(''));
    return grid.reduce(((accumulator,current,row) => {
        return accumulator += current.reduce(((innerAccumulator,current,col)=> innerAccumulator+=getNumWordsAtPos(grid,'XMAS', row, col)),0)
    }),0);
} 

const diagonalDirections = [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
];
const diagonalDirections2 = [
    [-1, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
];

const searchXDirection = (grid, word, startRow, startCol) => {
   const rows = grid.length;
    const cols = grid[0].length;

    const positions2 =diagonalDirections.map(([rowOffset, colOffset]) => [
        startRow + rowOffset,
        startCol + colOffset,
    ]);

    if (positions2.some(([r, c]) => r < 0 || c < 0 || r >= rows || c >= cols)) {
        return false;
    }
    const diagonal = 2 === positions2.reduce(((accumulator,[r, c],index) => accumulator += 1*searchDirection(grid,word,r,c,diagonalDirections2[index])),0);
    //adds up to 2
    return (1*diagonal);
};

export function solveDay4Part2(input) {
    const lines = input.split('\n');
    const grid = lines.map(line => line.split(''));
    return grid.reduce(((accumulator,current,row) => {
        //console.log(current.reduce(((innerAccumulator,current,col)=> innerAccumulator+=searchXDirection(grid,'MAS', row, col)),0));
        return accumulator += current.reduce(((innerAccumulator,current,col)=> innerAccumulator+=searchXDirection(grid,'MAS', row, col)),0)
    }),0);;
} 
//console.log("final:",solveDay4Part2(testinput));