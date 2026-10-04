/* =====================================================
   WIRELAB — STUDY PROGRESS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const STORAGE_KEY = "wirelabCompletedUnits";

    /* -------------------------------------------------
       LOAD COMPLETED UNITS
    ------------------------------------------------- */

    let completedUnits = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
    );


    /* -------------------------------------------------
       SAVE COMPLETED UNITS
    ------------------------------------------------- */

    function saveCompletedUnits() {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(completedUnits)
        );
    }


    /* -------------------------------------------------
       COMPLETE UNIT BUTTON
    ------------------------------------------------- */

    const completeButton = document.getElementById("completeUnit");

    if (completeButton) {

        const currentUnit =
            document.body.dataset.unit ||
            document.documentElement.dataset.unit;


        /* Keep completed button highlighted */

        if (currentUnit && completedUnits.includes(currentUnit)) {

            completeButton.classList.add("completed");

            completeButton.textContent = "UNIT COMPLETED";
        }


        /* Complete unit */

        completeButton.addEventListener("click", () => {

            if (!currentUnit) return;


            /* Add unit to completed list */

            if (!completedUnits.includes(currentUnit)) {

                completedUnits.push(currentUnit);

                saveCompletedUnits();
            }


            /* Highlight button */

            completeButton.classList.add("completed");

            completeButton.textContent = "UNIT COMPLETED";
        });
    }


    /* -------------------------------------------------
       STUDY PAGE PROGRESS
    ------------------------------------------------- */

    const unitLinks = document.querySelectorAll("[data-unit]");

    const progressFill =
        document.getElementById("progressFill");

    const progressCount =
        document.getElementById("progressCount");

    const progressPercent =
        document.getElementById("progressPercent");


    if (unitLinks.length > 0) {

        let completedCount = 0;


        unitLinks.forEach(unit => {

            const unitNumber = unit.dataset.unit;


            /* Highlight completed unit */

            if (completedUnits.includes(unitNumber)) {

                completedCount++;

                unit.classList.add("completed");

            } else {

                unit.classList.remove("completed");
            }
        });


        /* -------------------------------------------------
           CALCULATE PROGRESS
        ------------------------------------------------- */

        const totalUnits = unitLinks.length;

        const percent =
            totalUnits > 0
                ? Math.round(
                    (completedCount / totalUnits) * 100
                )
                : 0;


        /* Progress bar */

        if (progressFill) {

            progressFill.style.width = `${percent}%`;
        }


        /* Completed count */

        if (progressCount) {

            progressCount.textContent =
                `${completedCount} of ${totalUnits} units completed`;
        }


        /* Percentage */

        if (progressPercent) {

            progressPercent.textContent =
                `${percent}%`;
        }
    }

});