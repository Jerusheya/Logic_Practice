array=[3,5,-4,8,11,1,-1,6]

//1st  method: nested loop:
// targetSum = 0;
// result_arr = [];
// for(var i=0;i<array.length;i++){
//     for(var j=i+1;j<array.length;j++){
//          targetSum = array[i]+array[j];
//          if(targetSum==10){
//              result_arr.push(array[i],array[j]);
//              console.log(result_arr);
//          }
//     }
    
// }


//2nd method: single loop:
// targetSum  =10;
// substitute = 0;
// result_arr = [];
// for(var i=0;i<array.length;i++){
//     substitute=targetSum-array[i];
//     if(array.includes(substitute)===true && substitute!=array[i]){
//         result_arr.push(array[i],substitute);
//         console.log(result_arr);
//         break;
//     }
// }

//3rd method: storing as an object
targetSum=10;
substitue = 0;
ob={};
arr=[];
for(var i=0;i<array.length;i++){
    substitue=targetSum-array[i];
    if(ob[substitue]==array[i]){
        arr.push(substitue,array[i]);
       console.log(arr);
    }
    ob[array[i]]=substitue;
}

