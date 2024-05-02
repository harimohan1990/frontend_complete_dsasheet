
var sortColors = function(nums) {
    var temp=0
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                temp=nums[i]
                nums[i]=nums[j]
                nums[j]=temp
            }
        }
    }
    return nums
};