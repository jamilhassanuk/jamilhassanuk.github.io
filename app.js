

/*delay skill appearing on screen */
document.addEventListener('DOMContentLoaded', function() {
    // your code here
    setTimeout(function(){el1 = document.getElementById("header");
    el1.style.visibility = "visible"; }, 1500);

    setTimeout(function(){el2 = document.getElementById("skills");
    el2.style.visibility = "visible"; }, 1800);

    setTimeout(function(){el3 = document.getElementById("projectResumeContainer");
    el3.style.visibility = "visible"; }, 2000);
    
 }, false);



 