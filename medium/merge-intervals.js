
var merge = function(intervals) {
    if (!intervals || intervals.length === 0) {
        return [];
    }

    let merged = [];
    intervals.sort((a, b) => a[0] - b[0]);

    let mergedInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];

        if (interval[0] <= mergedInterval[1]) {
            mergedInterval[1] = Math.max(mergedInterval[1], interval[1]);
        } else {
            merged.push(mergedInterval);
            mergedInterval = interval;
        }
    }

    merged.push(mergedInterval);

    return merged;    
};