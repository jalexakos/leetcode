// from https://leetcode.com/problems/capitalize-the-title/description/

function capitalizeTitle(title: string): string {
    let titleArr = title.split(' ');
    for (let i in titleArr) {
        if (titleArr[i].length > 2) {
            titleArr[i] = titleArr[i][0].toUpperCase() + titleArr[i].slice(1).toLowerCase();
        } else {
            titleArr[i] = titleArr[i].toLowerCase();
        }
    }

    return titleArr.join(' ');
};

// runtime 36th percentile
// memory 6th percentile