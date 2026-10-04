/* =====================================================
   WIRELAB — ACCOUNT PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PROFILE ELEMENTS
    ===================================================== */

    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    const profileEmail = document.getElementById("profile-email");

    const editProfileButton = document.getElementById("edit-profile");
    const profileModal = document.getElementById("profile-modal");
    const closeProfileModal = document.getElementById("close-profile-modal");

    const profileNameInput = document.getElementById("profile-name-input");
    const profileEmailInput = document.getElementById("profile-email-input");

    const saveProfileButton = document.getElementById("save-profile");

    const modalProfileImage = document.getElementById("modal-profile-image");
    const profileOptions = document.querySelectorAll(".modal-profile-option");


    /* =====================================================
       LOCAL STORAGE KEYS
    ===================================================== */

    const PROFILE_NAME_KEY = "wirelabProfileName";
    const PROFILE_ROLE_KEY = "wirelabProfileRole";
    const PROFILE_ICON_KEY = "wirelabProfileIcon";


    /* =====================================================
       AVATAR PATH
    ===================================================== */

    function getAvatarPath(iconName) {

        return "../z-images/profile-icons/" + iconName;

    }


    /* =====================================================
       UPDATE ACCOUNT AVATAR
    ===================================================== */

    function updateAccountAvatar(iconName) {

        if (!profileImage || !iconName) return;

        profileImage.src = getAvatarPath(iconName);

    }


    /* =====================================================
       UPDATE NAVBAR AVATAR
    ===================================================== */

    function updateNavbarAvatar(iconName) {

        const navbarProfile =
            document.getElementById("navbar-profile");

        if (!navbarProfile || !iconName) return;

        const navbarImage =
            navbarProfile.querySelector("img");

        if (!navbarImage) return;

        navbarImage.src =
            getAvatarPath(iconName);

    }


    /* =====================================================
       UPDATE ALL AVATARS
    ===================================================== */

    function updateAvatar(iconName) {

        if (!iconName) return;

        localStorage.setItem(
            PROFILE_ICON_KEY,
            iconName
        );

        updateAccountAvatar(iconName);

        updateNavbarAvatar(iconName);

        if (modalProfileImage) {

            modalProfileImage.src =
                getAvatarPath(iconName);

        }

    }


    /* =====================================================
       LOAD SAVED AVATAR
    ===================================================== */

    function loadAvatar() {

        const savedAvatar =
            localStorage.getItem(PROFILE_ICON_KEY);

        if (!savedAvatar) return;

        updateAccountAvatar(savedAvatar);

        updateNavbarAvatar(savedAvatar);

        if (modalProfileImage) {

            modalProfileImage.src =
                getAvatarPath(savedAvatar);

        }

        profileOptions.forEach((option) => {

            const icon =
                option.getAttribute("data-icon");

            if (icon === savedAvatar) {

                option.classList.add("selected");

            } else {

                option.classList.remove("selected");

            }

        });

    }


    /* =====================================================
       AVATAR SELECTION
    ===================================================== */

    profileOptions.forEach((option) => {

        option.addEventListener("click", () => {

            const selectedAvatar =
                option.getAttribute("data-icon");

            if (!selectedAvatar) return;


            profileOptions.forEach((item) => {

                item.classList.remove("selected");

            });


            option.classList.add("selected");


            updateAvatar(selectedAvatar);

        });

    });


    /* =====================================================
       OPEN EDIT PROFILE
    ===================================================== */

    if (editProfileButton && profileModal) {

        editProfileButton.addEventListener("click", () => {

            if (profileNameInput && profileName) {

                profileNameInput.value =
                    profileName.textContent.trim();

            }


            if (profileEmailInput && profileEmail) {

                profileEmailInput.value =
                    profileEmail.textContent.trim();

            }


            profileModal.classList.add("open");

        });

    }


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeModal() {

        if (!profileModal) return;

        profileModal.classList.remove("open");

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closeProfileModal) {

        closeProfileModal.addEventListener(
            "click",
            closeModal
        );

    }


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE MODAL
    ===================================================== */

    if (profileModal) {

        profileModal.addEventListener("click", (event) => {

            if (event.target === profileModal) {

                closeModal();

            }

        });

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            profileModal &&
            profileModal.classList.contains("open")
        ) {

            closeModal();

        }

    });


    /* =====================================================
       SAVE PROFILE
    ===================================================== */

    if (saveProfileButton) {

        saveProfileButton.addEventListener("click", () => {


            /* -------------------------------------------------
               SAVE NAME
            ------------------------------------------------- */

            if (
                profileNameInput &&
                profileNameInput.value.trim()
            ) {

                const name =
                    profileNameInput.value.trim();


                if (profileName) {

                    profileName.textContent =
                        name;

                }


                localStorage.setItem(
                    PROFILE_NAME_KEY,
                    name
                );

            }


            /* -------------------------------------------------
               SAVE ROLE
            ------------------------------------------------- */

            if (
                profileEmailInput &&
                profileEmailInput.value.trim()
            ) {

                const role =
                    profileEmailInput.value.trim();


                if (profileEmail) {

                    profileEmail.textContent =
                        role;

                }


                localStorage.setItem(
                    PROFILE_ROLE_KEY,
                    role
                );

            }


            closeModal();

        });

    }


    /* =====================================================
       LOAD SAVED PROFILE
    ===================================================== */

    function loadProfile() {

        const savedName =
            localStorage.getItem(PROFILE_NAME_KEY);


        if (savedName && profileName) {

            profileName.textContent =
                savedName;

        }


        if (savedName && profileNameInput) {

            profileNameInput.value =
                savedName;

        }


        const savedRole =
            localStorage.getItem(PROFILE_ROLE_KEY);


        if (savedRole && profileEmail) {

            profileEmail.textContent =
                savedRole;

        }


        if (savedRole && profileEmailInput) {

            profileEmailInput.value =
                savedRole;

        }

    }


    /* =====================================================
       INITIALIZE ACCOUNT PAGE
    ===================================================== */

    loadProfile();

    loadAvatar();

});