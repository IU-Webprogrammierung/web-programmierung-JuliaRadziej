document.addEventListener("DOMContentLoaded", function(){
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const cookieOverlay = document.getElementById("cookie-overlay");

    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        cookieBanner.style.display = "block";
        cookieOverlay.style.display = "block";

        acceptButton.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.style.display = "none";
            cookieOverlay.style.display = "none";
        });
    }
});