window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 110;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        // else{
        //     reveals[i].classList.remove('active'); 
        // }
    }
}


var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}