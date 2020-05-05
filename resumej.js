
function search_skill(){
   var user_i, user_if, l, table, tr, td, i, j, total_col, skill;
   user_i = document.getElementById("skillInput").value;
   l=user_i.length;
   table = document.getElementById("skills-table");
   tr = table.getElementsByTagName("tr");
   total_col = document.getElementById("skills-table").rows[0].cells.length;
   
   for (i=0; i < tr.length; i++){
      for (j=0; j < total_col; j++){
         td=tr[i].getElementsByTagName("td")[j];
         skill = td.textContent;
         if(skill.substr(0,l).toLowerCase() != user_i.toLowerCase()){
            td.style.display = "none";
         }else{
            td.style.display = "";
         }
      }
   }
}

