// https://leetcode.com/explore/learn/card/num-and-string/

// https://leetcode.com/explore/learn/card/num-and-string/201/introduction-to-num/1144/

// pivot index = sum(left of index) = sum(right of index)
// this method works by splicing the initial array into two parts, reducing the left and right arrays into a single value that are then finally compared to each other

let findPivot=(num)=>{
    
    for(let i = 0; i < num.length; i++) {
        
        // let rightIndexStart = i+1;    
        let leftSlice = num.slice(0, i)
        let rightSlice = num.slice(0,num.length)
        
        if(leftSlice.length == 0 || rightSlice.length ==0) {
            continue;
        }
        console.log(leftSlice, rightSlice)
        
        let sumLeft = leftSlice.reduce((a,b)=> a+b);
        let sumRight = rightSlice.reduce((a,b)=> a+b);
        console.log(sumLeft, sumRight)
        
        if(sumLeft == sumRight) {
            console.log(i);
            return i;
        }

    }

    console.log(-1)
    return -1;

}
findPivot([1,7,3,6,5,6])  // 3
// findPivot([1,2,3])
// findPivot([-1000,1,1000,-2000])
// findPivot([-1,-1,-1,-1,-1,-1])
findPivot([-1,-1,-1,0,-1,-1])