function romans(){
    var user_input=document.getElementById("prompt_input").value;
const romans = { 
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let result = 0;

for (i=0; i < user_input.length; i++){
    const cur = romans[user_input[i]];
    const next = romans[user_input[i+1]];

    if (cur < next){
        result += next - cur // IV -> 5 - 1 = 4
        i++
    } else {
        result += cur
    }
}
console.log(result);
return result; 
}  