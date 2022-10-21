function prefixi() {
  strs = ["flower", "flow", "flight"];
  strs_array = [];
  value_array = [];

  for (let v = 0; v < strs.length; v++) {
    strs_strings = strs[v];
    strs_array = strs_strings.split(""); //temp sub arrays
    value_array.push(strs_array);
  }

  min_length = [];
  for (let s = 0; s < value_array.length; s++) {
    min_length.push(value_array[s].length);
  }
  mini_len = Math.min(...min_length);
for(let a=0;a<value_array.length;a++){

    // console.log(strs_array[a]);
    for (let h = 0; h < value_array[a].length; h++) {
      if(h<mini_len){
         for(let g=0;g<mini_len;g++){
            // if(value_array[a+g][h]==value_array[a+g+1][h]){
              console.log(value_array[a][h]);
            // }
         }
      }
    }

    console.log("-------");
}
  

}

// console.log(strs_array.length);
// console.log(strs_array[v].length);
// for(let i=0;i<strs_array.length;i++){

// console.log(strs_array[i]);
//    temp_array = strs_array[i].split('');
// for(let j=0;j<value_array.length;j++){
//     for(let k=0;k<value_array[i].length;k++){
//         if(value_array[j][k] == value_array[j+1][k+1]){
//             console.log (value_array[i][j],value_array[i+1][j+1]);
//         }
//     }
// }
// }
