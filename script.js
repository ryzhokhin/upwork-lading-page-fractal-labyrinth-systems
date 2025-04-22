document.addEventListener('DOMContentLoaded', function(){
    const titleButton = document.getElementById('title-button');
    titleButton.addEventListener("click", function () {
        alert("Get Started!");
    });
    const betaButton = document.getElementById('beta-button');
    betaButton.addEventListener('click', function () {
        alert('Apply to Join the Beta Group!');
    });
})

