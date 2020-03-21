// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1147/
// data_structure_array_at_least_twice

let twiceLg =(nums)=> {
    
    let dict = {}
    

    for(let i = 0; i < nums.length; i++) {
        dict[nums[i]] = i;
    }

    nums.sort()

    // console.log(dict)
    // console.log(nums[nums.length-1])
    // console.log(nums[nums.length-2]*2)
 
    if(nums[nums.length -1] >= nums[nums.length-2]*2) {
        // console.log(dict[nums[nums.length - 1]])
        return dict[nums[nums.length - 1]];
    }

    return -1;
}
twiceLg([1])
twiceLg([3,6,1,0])
twiceLg([1,2,3,4])