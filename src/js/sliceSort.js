function solution(A) {
    let sorted = false;
    let numSlices = 1;
    let lastSort = A;
    
    function sliceArray(arr) {
        let sliced = [];
        // temp stores nums already in ASC order
        let temp = [];
        
        arr.forEach((num, i) => {
            const last = temp[temp.length - 1];
            
            if (last === undefined) {
                temp.push(num);
            } 
            // check if last num added is less than current num
            // if the last added num is less than current we make a new ASC temp store
            else if (last > num && num < arr[i + 1]) {
                temp.push(num)
                sliced.push(temp);
                temp = [];
            }
            // if no conditions truthy - add to temp
            else {
                temp.push(num);
            }
        });
        
        if (temp.length) {
            sliced.push(temp);
        }
        
        return sliced.map(arr => sort(arr));
    }
    
    // TODO: Optimize
    function sort(arr) {
        return arr.sort((a, b) => { 
            return a - b
        });
    }
    
    while (!sorted) {
        // slice the array;
        // sort each slice;
        // join the array;
        // check if it's entirely sorted;
        
        // if not sorted repeat the process with this newley joined array;
        // if sorted return number of slices it took
        
        const slicedArrays = sliceArray(lastSort);
        const joinSliced = slicedArrays.reduce((a, b) => {
            return a.concat(b);
        }, [])
        
        // FIXME: Bruteforce - use isAscending
        if (JSON.stringify(joinSliced) === JSON.stringify(sort(joinSliced))) {
            sorted = true;
            numSlices = slicedArrays.length;
        } else {
            lastSort = joinSliced;
        }
    }
    
    return numSlices;
}

function isAscending(arr) {
    
}
