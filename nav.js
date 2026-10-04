
/* =========================================================
   LOAD SAVED THEME
========================================================= */

const savedTheme = localStorage.getItem("wirelabTheme");

if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
}




/* =========================================================
   WIRELAB NAVBAR
   LOAD SAVED PROFILE ICON
   HANDLE NAVIGATION PATHS
========================================================= */





document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       DETERMINE PAGE DEPTH
    ===================================================== */

    const path = window.location.pathname;

    let prefix = "";

    /*
       ROOT
       /wire-lab/index.html
    */
    if (
        path.endsWith("/") ||
        path.endsWith("/index.html")
    ) {
        prefix = "";
    }

    /*
       TWO LEVELS DEEP
       /wire-lab/study/units/
       /wire-lab/tools/color-wheel/
       /wire-lab/labs/gfci-test-lab/
    */
    else if (
        path.includes("/study/units/") ||
        path.includes("/tools/color-wheel/") ||
        path.includes("/labs/gfci-test-lab/")
    ) {
        prefix = "../../";
    }

    /*
       ONE LEVEL DEEP
       /wire-lab/account/
       /wire-lab/labs/
       /wire-lab/solar/
       /wire-lab/study/
       /wire-lab/testing/
       /wire-lab/tools/
    */
    else {
        prefix = "../";
    }


    /* =====================================================
       NAVIGATION LINKS
    ===================================================== */
    const navPages = {
        home: "index.html",
        study: "study/study.html",
        labs: "labs/labs.html",
        test: "test/test.html",
        debug: "debug/debug.html",
        tools: "tools/tools.html"
    };

    document.querySelectorAll(".nav-button[data-page]").forEach(function (link) {
        const page = link.dataset.page;
        if (navPages[page]) {
            link.href = prefix + navPages[page];
        }
    });


    /* =====================================================
    ACTIVE NAVIGATION
    ===================================================== */

    const currentPage = window.location.pathname;

    document.querySelectorAll(".nav-button[data-page]").forEach(function (link) {

    const page = link.dataset.page;

    if (!navPages[page]) return;

    if (
        (page === "home" && (
            currentPage.endsWith("/") ||
            currentPage.endsWith("/index.html")
        )) ||
        currentPage.endsWith(navPages[page])
    ) {
        link.classList.add("active");
    }
    });


    /* =====================================================
       PROFILE LINK
    ===================================================== */

    const navbarProfile = document.getElementById("navbar-profile");

    if (navbarProfile) {

        navbarProfile.href = prefix + "account/account.html";

        if (currentPage.endsWith("/account/account.html")) {
    navbarProfile.classList.add("active");
}

        const savedIcon = localStorage.getItem("wirelabProfileIcon");

        if (savedIcon) {

            let iconPath;

            if (prefix === "") {
                iconPath = "z-images/profile-icons/" + savedIcon;
            }
            else if (prefix === "../") {
                iconPath = "../z-images/profile-icons/" + savedIcon;
            }
            else {
                iconPath = "../../z-images/profile-icons/" + savedIcon;
            }

            navbarProfile.innerHTML = "";

            const profileImage = document.createElement("img");

            profileImage.src = iconPath;
            profileImage.alt = "Profile";

            navbarProfile.appendChild(profileImage);
        }
    }





    const menuButton =
    document.getElementById("menu-button");

const menuPanel =
    document.getElementById("menu-panel");

if (menuButton && menuPanel) {

    menuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        menuPanel.classList.toggle("open");

    });

    document.addEventListener("click", function () {

        menuPanel.classList.remove("open");

    });

    menuPanel.addEventListener("click", function (event) {

        event.stopPropagation();

    });
}













        /* =====================================================
       THEME TOGGLE
    ===================================================== */

    const themeToggle =
        document.getElementById("theme-toggle");

    if (themeToggle) {

        function updateThemeButton() {

            const isLight =
                document.documentElement.getAttribute("data-theme")
                === "light";

            if (isLight) {

                themeToggle.textContent = "☾";

                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to dark theme"
                );

                themeToggle.title =
                    "Switch to dark theme";

            } else {

                themeToggle.textContent = "💡";

                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to light theme"
                );

                themeToggle.title =
                    "Switch to light theme";
            }
        }


        updateThemeButton();


        themeToggle.addEventListener("click", function () {

            const isLight =
                document.documentElement.getAttribute("data-theme")
                === "light";


            if (isLight) {

                document.documentElement.removeAttribute(
                    "data-theme"
                );

                localStorage.setItem(
                    "wirelabTheme",
                    "dark"
                );

            } else {

                document.documentElement.setAttribute(
                    "data-theme",
                    "light"
                );

                localStorage.setItem(
                    "wirelabTheme",
                    "light"
                );
            }


            updateThemeButton();
        });
    }

});