

/*delay skill appearing on screen */
document.addEventListener('DOMContentLoaded', function() {
    // your code here
    setTimeout(function(){el = document.getElementById("skills");
    el.style.visibility = "visible"; }, 1000);

    setTimeout(function(){ele = document.getElementById("projectResumeContainer");
    ele.style.visibility = "visible"; }, 1300);
    
 }, false);



 