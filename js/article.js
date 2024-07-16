document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-category button");
    const mobileNavContent = document.querySelector(".articles-categories-mobile");

    function closeMobileNav() {
        mobileNavContent.style.display = "none";
    }

    function toggleMobileNav() {
        if (mobileNavContent.style.display === "flex") {
            closeMobileNav();
        } else {
            mobileNavContent.style.display = "flex";
        }
    }

    mobileMenuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); 
        toggleMobileNav();
    });

    document.addEventListener("click", function (event) {
        if (!mobileNavContent.contains(event.target) && !mobileMenuIcon.contains(event.target)) {
            closeMobileNav();
        }
    });

    const mobileNavLinks = document.querySelectorAll(".articles-categories-mobile a");
    mobileNavLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            closeMobileNav();
        });
    });
});