// Goal Parser Interpretation
// https://leetcode.com/problems/goal-parser-interpretation/description/

function interpret(command: string): string {
    return command.replaceAll("(al)", "al").replaceAll("()", "o");
};

// runtime 92nd percentile
// memory 49th percentile