// Convert the Temperature
// from https://leetcode.com/problems/convert-the-temperature/description/

function convertTemperature(celsius: number): number[] {
    return [celsius + 273.15, (celsius * 1.8) + 32];
};

// runtime 100th percentile
// memory 10th percentile