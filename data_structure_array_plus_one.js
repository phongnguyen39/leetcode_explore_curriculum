// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1148/

let plusOne=(digit)=> {

    // convert the array to integer, +1, then output must be an array

    if(digit.length == 0) {
        return -1;
    }

    let str = ''
    let str2 = ''
    let output = []


    for(let i = 0; i < digit.length;i++) {
        str = str + digit[i]
        // console.log(str)
        if(i == digit.length -1) {
            
            
            str2 = parseInt(str,36)+1;
            console.log('str2',str2 *1)
        
            
            let str3 = str2.toString()

            for(let j = 0; j < str3.length; j++) {
                output.push(str3[j])
                
            }
            console.log(output)
            return output

        }
    }

}

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])

// plusOne([1,2,3]) // Array represents 123 + 1 = 124
// plusOne([4,3,2,1])  // Array represents 4321 + 1 = 4322
// plusOne([1,9])