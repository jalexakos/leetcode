// Reformat Date
// from https://leetcode.com/problems/reformat-date/description/

const months: Record<string, string> = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
};

function reformatDay(day: string): string {
    if (day.length === 3) return "0" + day[0];
    if (day.length === 4) return day.slice(0,2);

    throw new Error('Day is not properly formatted.');
}

function reformatDate(date: string): string {
    let splitDate = date.split(' ');
    let day = reformatDay(splitDate[0]);
    let month = months[splitDate[1]];
    let year = splitDate[2];

    return year + "-" + month + "-" + day;
};

// runtime 45th percentile
// memory 94th percentile