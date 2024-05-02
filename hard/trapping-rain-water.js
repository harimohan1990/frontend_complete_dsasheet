
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let left_max = height[0];
    let sum = 0;
    let j = height.length - 1;
    let right_max = height[j];
    while (i < j) {
        if (left_max <= right_max) {
            sum += left_max - height[i];
            i++;
            left_max = Math.max(left_max, height[i]);
        } else {
            sum += right_max - height[j];
            j--;
            right_max = Math.max(right_max, height[j]);
        }
    }
    return sum;
}