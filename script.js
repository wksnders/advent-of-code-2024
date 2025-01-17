"use strict";

import * as day1 from './solutions/day01.js';
import * as day2 from './solutions/day02.js';
import * as day3 from './solutions/day03.js';
import * as day4 from './solutions/day04.js';
import * as day5 from './solutions/day05.js';
import * as day6 from './solutions/day06.js';
import * as day7 from './solutions/day07.js';
import * as day8 from './solutions/day08.js';
import * as day9 from './solutions/day09.js';
import * as day10 from './solutions/day10.js';

const solutions = [
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    day7,
    day8,
    day9,
    day10,
];

for (let day = 0; day < 10; day++) {
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
