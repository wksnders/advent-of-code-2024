const testinput =
`47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

const testOutput = 0;


export function solvePart1(input) {
    
    const [rulesInput, pagesInput] = input.split('\n\n');
    const rules = rulesInput.split('\n');
    console.log(rules);
    return 0
} 

export function solvePart2(input) {
    return 0;
} 
//console.log(solveDay5(testinput));