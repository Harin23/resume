console.log("js file loaded")
function search_skill(){
var user_i, user_if;
user_i = document.getElementById("skillInput").value;
user_if = detect_and_uppercase_fl(user_i);
//user_i = detect_space_and_uppercase_fl(user_i);
console.log(user_if);

}

function detect_and_uppercase_fl(a){
   var user_i, ucl, user_in;
   user_i=a; 
   if ( (user_i[0]) !== (user_i[0].toUpperCase()) ){
      ucl=user_i[0].toUpperCase()
      console.log(ucl);
      user_in = reconstruct_string(user_i, ucl)
   }
   return user_in;
}

function reconstruct_string(str, letter){
   var user_input, l, capital_l, new_string;
   user_input = str; capital_l = letter;
   l=user_input.length;
   
   if (l >1){
      new_string = capital_l + user_input.substr(1,l-1);
   }

   return new_string;
}


