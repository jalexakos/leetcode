/**
 * Generate a file name based on the title of the LeetCode problem.
 * 
 * @param title @type string The title of the LeetCode problem.
 * @returns @type string The file name.
 * 
 * @example
 * npx ts-node generate-file-name.ts 1422. Maximum Score After Splitting a String
 * returns 1422-maximum-score-after-splitting-a-string.ts
 */

function generateFileName(title: string): string {
    return title.toLowerCase().split(' ').join('-').replaceAll('.','') + '.ts';
}

// Check if the script is being executed directly from the command line
if (require.main === module) {
    // Retrieve the title from command-line arguments
    const args = process.argv.slice(2); // Skip the first two default arguments

    if (args.length === 0) {
        console.error('Please provide a title as an argument.');
        process.exit(1);
    }

    const title = args.join(' ');
    const fileName = generateFileName(title);
    console.log(fileName);
}