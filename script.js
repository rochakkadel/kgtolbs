

let kgtolbs ,lbstokg, outputkgtolbs, outputlbstokg;


document.getElementById("buttonkgtolbs").onclick = function(){
 kgtolbs = document.getElementById("inputkgtolbs").value; //variable assigned from input


 outputkgtolbs = kgtolbs*2.2;
 outputkgtolbs = outputkgtolbs.toFixed(2); //only 2 digit after decimal


 document.getElementById("kgtolbsoutput").textContent =  +kgtolbs+ " KG equals " +outputkgtolbs+ " LBS";
}


 document.getElementById("buttonlbstokg").onclick = function(){
   lbstokg = document.getElementById("inputlbstokg").value; //variable assigned from input
    outputlbstokg = lbstokg/2.2;
   outputlbstokg = outputlbstokg.toFixed(2); //only 2 digit after decimal
    document.getElementById("lbstokgoutput").textContent =  +lbstokg+ " LBS equals " +outputlbstokg+ " KG.";
 }


