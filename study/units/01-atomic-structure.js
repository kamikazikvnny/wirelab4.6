/* =====================================================
   WIRELAB — UNIT 01
   ATOMIC STRUCTURE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const STORAGE_KEY = "wirelabCompletedUnits";
    const CURRENT_UNIT = "01";

    const completeButton =
        document.getElementById("completeUnit");


    /* -------------------------------------------------
       LOAD COMPLETED UNITS
    ------------------------------------------------- */

    let completedUnits = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );


    /* -------------------------------------------------
       UPDATE BUTTON
    ------------------------------------------------- */

    function updateButton() {

        if (!completeButton) return;


        if (completedUnits.includes(CURRENT_UNIT)) {

            completeButton.classList.add("completed");

            completeButton.textContent =
                "UNIT COMPLETED";

        } else {

            completeButton.classList.remove("completed");

            completeButton.textContent =
                "COMPLETE UNIT";
        }
    }


    /* -------------------------------------------------
       INITIAL BUTTON STATE
    ------------------------------------------------- */

    updateButton();


    /* -------------------------------------------------
       TOGGLE UNIT COMPLETION
    ------------------------------------------------- */

    if (completeButton) {

        completeButton.addEventListener("click", () => {

            const completed =
                completedUnits.includes(CURRENT_UNIT);


            if (completed) {

                /* UNSELECT UNIT */

                completedUnits =
                    completedUnits.filter(
                        unit => unit !== CURRENT_UNIT
                    );

            } else {

                /* SELECT UNIT */

                completedUnits.push(CURRENT_UNIT);
            }


            /* SAVE */

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(completedUnits)
            );


            /* UPDATE BUTTON */

            updateButton();
        });
    }

});