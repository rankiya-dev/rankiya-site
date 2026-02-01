// ADMIN CONTROL
let updateAvailable = false; // false कर दो तो update hide

function checkAppInstalled(){
    let isInstalled = false;
    let scheme = "intent://rankiya#Intent;scheme=rankiya;package=com.rankiya.app;end";
    let start = Date.now();

    window.location.href = scheme;

    setTimeout(function(){
        if(Date.now() - start > 1500){
            isInstalled = true;
        }
        if(isInstalled && updateAvailable){
            document.getElementById("updateBar").style.display = "block";
        }
    },1200);
}

window.onload = checkAppInstalled;

