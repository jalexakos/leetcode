// Calculate Amount Paid in Taxes
// from https://leetcode.com/problems/calculate-amount-paid-in-taxes/description/

function calculateTax(brackets: number[][], income: number): number {
    let lastBracket = 0;
    let total = 0;

    for (let i = 0; i < brackets.length; i++) {
        if (brackets[i][0] > income) {
            let amtTaxed = income - lastBracket;
            total += (amtTaxed * (brackets[i][1] / 100));
            break;
        }

        let amtTaxed = brackets[i][0] - lastBracket;
        total += (amtTaxed * (brackets[i][1] / 100));

        lastBracket = brackets[i][0];
    }

    return total;
};

// runtime 100th percentile
// memory 67th percentile