import { solveDay1,solveDay1Part2 } from './solutions/day01.js';

document.getElementById('day01-1btn').addEventListener('click', () => {
    const input = document.getElementById('input-area').value;
    const result = solveDay1(input);
    document.getElementById('output').textContent = `Result: ${result}`;
});

document.getElementById('day01-2btn').addEventListener('click', () => {
    const input = document.getElementById('input-area').value;
    const result = solveDay1Part2(input);
    document.getElementById('output').textContent = `Result: ${result}`;
});
