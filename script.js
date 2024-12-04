"use strict";

import { solveDay1,solveDay1Part2 } from './solutions/day01.js';
import { solveDay2,solveDay2Part2 } from './solutions/day02.js';
import { solveDay3,solveDay3Part2 } from './solutions/day03.js';
import { solveDay4,solveDay4Part2 } from './solutions/day04.js';
import { solveDay5,solveDay5Part2 } from './solutions/day05.js';

const solutions = [
    { solvePart1: solveDay1, solvePart2: solveDay1Part2 },
    { solvePart1: solveDay2, solvePart2: solveDay2Part2 },
    { solvePart1: solveDay3, solvePart2: solveDay3Part2 },
    { solvePart1: solveDay4, solvePart2: solveDay4Part2 },
    { solvePart1: solveDay5, solvePart2: solveDay5Part2 },
];

for (let day = 0; day < 3; day++) {
    const dayString = (day+1).toString().padStart(2, '0');

    document.getElementById(`day${dayString}-1btn`).addEventListener('click', () => {
        const input = document.getElementById('input-area').value;
        const result = solutions[day].solvePart1(input);
        document.getElementById('output').textContent = `Result: ${result}`;
    });

    document.getElementById(`day${dayString}-2btn`).addEventListener('click', () => {
        const input = document.getElementById('input-area').value;
        const result = solutions[day].solvePart2(input);
        document.getElementById('output').textContent = `Result: ${result}`;
    });
}
