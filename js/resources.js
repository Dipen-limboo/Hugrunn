function changeLanguage() {
    const select = document.getElementById('language-select');
    const selectedOption = select.options[select.selectedIndex];
    const newFlagSrc = selectedOption.getAttribute('data-img');
    const newLangText = selectedOption.value.toUpperCase();
    const currentFlag = document.getElementById('current-flag');
    const currentLangText = document.getElementById('current-lang-text');
    currentFlag.src = newFlagSrc;
    currentFlag.alt = selectedOption.text;
    currentLangText.textContent = newLangText;
}

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileCloseIcon = document.querySelector(".mobile-close-icon");
    const mobileNavContent = document.querySelector(".mobile-nav-content");
    function closeMobileNav() {
        mobileNavContent.style.display = "none";
    }
    mobileMenuIcon.addEventListener("click", function () {
        mobileNavContent.style.display = "flex";
    });
    mobileCloseIcon.addEventListener("click", function () {
        closeMobileNav();
    });
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-content a");
    mobileNavLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            closeMobileNav();
        });
    });
});

