import { solveDay1 } from './solutions/day1.js';

document.getElementById('day01-1btn').addEventListener('click', () => {
    const input = document.getElementById('input-area').value;
    const result = solveDay1(input);
    document.getElementById('output').textContent = `Result: ${result}`;
});
