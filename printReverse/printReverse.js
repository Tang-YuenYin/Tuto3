//Q2
printReverse([1,2,3,4]);
printReverse(["a","b"]);

function printReverse(arr){
    for(var i=arr.length-1;i>=0;i--){
        console.log(arr[i]);
    }
}

