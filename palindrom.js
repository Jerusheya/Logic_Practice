function palindroms(){
    var user_input = document.getElementById("prompt_input").value;
    var num_array = user_input.split("");
    var reverse_array = num_array.reverse();
    var reverse_input = reverse_array.join("");
    if(user_input==reverse_input){
        console.log("palindrom");
    }
    else{
        console.log("no palindrom");
    }
}