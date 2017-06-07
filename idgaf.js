var bannedTerms = ["marriage", "wedding", "hitched", "pelli", "shaadi"];
function cleanup(){
  console.log("Running Cleanup")
  var posts = document.getElementsByClassName("_5jmm");
  for(i=0; i < posts.length ; i++){
   var paragh =  posts[i].getElementsByTagName("p");
   for (j=0; j < paragh.length; j++) {
     txt = paragh[j].textContent.toLowerCase()
     for (y=0; y< bannedTerms.length; y++) {
       if (txt.indexOf(bannedTerms[y]) !== -1){
         posts[i].remove();
       }
     }
   }
  }
}
document.addEventListener("scroll", cleanup);
