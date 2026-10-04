/* =========================================================
   OHM'S LAW & POWER COLOR WHEEL
   Interactive Electrical Math Training

   COLOR WHEEL EQUATIONS

   POWER
   E × I
   R × I²
   E² / R

   VOLTAGE
   R × I
   P / I
   √(P × R)

   RESISTANCE
   E / I
   E² / P
   P / I²

   CURRENT
   E / R
   P / E
   √(P / R)

========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Ohm's Law Color Wheel loaded.");


    /* =========================================================
       EQUATION DATA
    ========================================================= */

    const equations = {

        /* =====================================================
           POWER
        ===================================================== */

        "E × I": {

            title: "Power from Voltage and Current",

            description:
                "Calculate electrical power when voltage and current are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([voltage, current]) =>
                voltage * current,

            resultUnit: "W",

            field:
                "An electrician can use this relationship to determine the power used by a load when the circuit voltage and current are known.",

            why:
                "Electrical power is the rate at which electrical energy is being used or transferred.",

            what:
                "For example, a 120 V load drawing 5 A uses 600 W of electrical power."
        },


        "R × I²": {

            title: "Power from Resistance and Current",

            description:
                "Calculate electrical power when resistance and current are known.",

            inputs: [
                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([resistance, current]) =>
                resistance * (current ** 2),

            resultUnit: "W",

            field:
                "An electrician can use this relationship to determine the power associated with a resistive load when current and resistance are known.",

            why:
                "Because current is squared, increasing current can have a significant effect on power.",

            what:
                "For example, 5 A flowing through 20 Ω produces 500 W of power."
        },


        "E² / R": {

            title: "Power from Voltage and Resistance",

            description:
                "Calculate electrical power when voltage and resistance are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: ([voltage, resistance]) =>
                (voltage ** 2) / resistance,

            resultUnit: "W",

            field:
                "An electrician can use this relationship when voltage and the resistance of a load are known.",

            why:
                "Squaring the voltage and dividing by resistance provides another form of the power relationship.",

            what:
                "For example, a 120 V load with 20 Ω of resistance uses 720 W."
        },


        /* =====================================================
           VOLTAGE
        ===================================================== */

        "R × I": {

            title: "Voltage from Resistance and Current",

            description:
                "Calculate voltage when resistance and current are known.",

            inputs: [
                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([resistance, current]) =>
                resistance * current,

            resultUnit: "V",

            field:
                "An electrician can use this form of Ohm's Law to determine the voltage across a load when resistance and current are known.",

            why:
                "Voltage is related to both the resistance of the load and the current flowing through it.",

            what:
                "For example, 20 Ω × 5 A = 100 V."
        },


        "P / I": {

            title: "Voltage from Power and Current",

            description:
                "Calculate voltage when power and current are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 600
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0.1,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([power, current]) =>
                power / current,

            resultUnit: "V",

            field:
                "An electrician can use power and current information to determine the voltage associated with a load.",

            why:
                "This relationship comes from rearranging the power formula P = E × I.",

            what:
                "For example, a 600 W load drawing 5 A operates at 120 V."
        },


        "√(P × R)": {

            title: "Voltage from Power and Resistance",

            description:
                "Calculate voltage when power and resistance are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 720
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: ([power, resistance]) =>
                Math.sqrt(power * resistance),

            resultUnit: "V",

            field:
                "An electrician can determine voltage when the power and resistance of a load are known.",

            why:
                "This is derived by combining Ohm's Law with the power relationship.",

            what:
                "For example, √(720 W × 20 Ω) = 120 V."
        },


        /* =====================================================
           CURRENT
        ===================================================== */

        "E / R": {

            title: "Current from Voltage and Resistance",

            description:
                "Calculate current when voltage and resistance are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: ([voltage, resistance]) =>
                voltage / resistance,

            resultUnit: "A",

            what:
                "This equation calculates current by dividing voltage by resistance.",

            why:
                "It demonstrates the basic relationship between voltage, current, and resistance.",

            field:
                "An electrician can use this relationship to determine current when voltage and resistance are known."
        },


        "P / E": {

            title: "Current from Power and Voltage",

            description:
                "Calculate current when power and voltage are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 600
                },

                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 1,
                    max: 240,
                    step: 1,
                    value: 120
                }
            ],

            calculate: ([power, voltage]) =>
                power / voltage,

            resultUnit: "A",

            field:
                "An electrician can use known power and voltage values to determine the current required by a load.",

            why:
                "This relationship comes from rearranging P = E × I to solve for current.",

            what:
                "For example, a 600 W load operating at 120 V draws 5 A."
        },


        "√(P / R)": {

            title: "Current from Power and Resistance",

            description:
                "Calculate current when power and resistance are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 500
                },

                {
                    name: "Resistance",
                    symbol: "R",
                    unit: "Ω",
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: 20
                }
            ],

            calculate: ([power, resistance]) =>
                Math.sqrt(power / resistance),

            resultUnit: "A",

            field:
                "An electrician can determine current when the power and resistance of a load are known.",

            why:
                "This relationship is derived from the power equation P = I²R.",

            what:
                "For example, √(500 W ÷ 20 Ω) = 5 A."
        },


        /* =====================================================
           RESISTANCE
        ===================================================== */

        "E / I": {

            title: "Resistance from Voltage and Current",

            description:
                "Calculate resistance when voltage and current are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0.1,
                    max: 50,
                    step: 0.1,
                    value: 6
                }
            ],

            calculate: ([voltage, current]) =>
                voltage / current,

            resultUnit: "Ω",

            field:
                "An electrician can use measured voltage and current to determine the effective resistance of a load.",

            why:
                "Ohm's Law can be rearranged to solve for resistance by dividing voltage by current.",

            what:
                "For example, 120 V ÷ 6 A = 20 Ω."
        },


        "E² / P": {

            title: "Resistance from Voltage and Power",

            description:
                "Calculate resistance when voltage and power are known.",

            inputs: [
                {
                    name: "Voltage",
                    symbol: "E",
                    unit: "V",
                    min: 0,
                    max: 240,
                    step: 1,
                    value: 120
                },

                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 1,
                    max: 5000,
                    step: 10,
                    value: 720
                }
            ],

            calculate: ([voltage, power]) =>
                (voltage ** 2) / power,

            resultUnit: "Ω",

            field:
                "An electrician can determine resistance from known voltage and power values.",

            why:
                "This relationship is another form of the electrical power equations.",

            what:
                "For example, 120² ÷ 720 = 20 Ω."
        },


        "P / I²": {

            title: "Resistance from Power and Current",

            description:
                "Calculate resistance when power and current are known.",

            inputs: [
                {
                    name: "Power",
                    symbol: "P",
                    unit: "W",
                    min: 0,
                    max: 5000,
                    step: 10,
                    value: 500
                },

                {
                    name: "Current",
                    symbol: "I",
                    unit: "A",
                    min: 0.1,
                    max: 50,
                    step: 0.1,
                    value: 5
                }
            ],

            calculate: ([power, current]) =>
                power / (current ** 2),

            resultUnit: "Ω",

            field:
                "An electrician can determine the resistance of a load when its power and current are known.",

            why:
                "The formula comes directly from rearranging P = I²R to solve for resistance.",

            what:
                "For example, 500 W ÷ 5² = 20 Ω."
        }

    };


    /* =========================================================
       PRACTICE PROBLEMS
    ========================================================= */

    const practiceProblems = {

        "E × I": [
            {
                values: [120, 8],
                question: "A 120 V load draws 8 A. What is its power?",
                answer: 960
            },
            {
                values: [240, 5],
                question: "A 240 V load draws 5 A. What is its power?",
                answer: 1200
            },
            {
                values: [120, 12],
                question: "A 120 V load draws 12 A. What is its power?",
                answer: 1440
            }
        ],

        "R × I²": [
            {
                values: [20, 5],
                question: "A 20 Ω resistance carries 5 A. How much power is produced?",
                answer: 500
            },
            {
                values: [10, 6],
                question: "A 10 Ω resistance carries 6 A. How much power is produced?",
                answer: 360
            },
            {
                values: [25, 4],
                question: "A 25 Ω resistance carries 4 A. How much power is produced?",
                answer: 400
            }
        ],

        "E² / R": [
            {
                values: [120, 20],
                question: "A 120 V load has 20 Ω of resistance. How much power does it use?",
                answer: 720
            },
            {
                values: [240, 40],
                question: "A 240 V load has 40 Ω of resistance. How much power does it use?",
                answer: 1440
            },
            {
                values: [120, 10],
                question: "A 120 V load has 10 Ω of resistance. How much power does it use?",
                answer: 1440
            }
        ],

        "R × I": [
            {
                values: [20, 5],
                question: "A circuit has 20 Ω of resistance and 5 A of current. What voltage is present?",
                answer: 100
            },
            {
                values: [10, 8],
                question: "A circuit has 10 Ω of resistance and 8 A of current. What voltage is present?",
                answer: 80
            },
            {
                values: [25, 4],
                question: "A circuit has 25 Ω of resistance and 4 A of current. What voltage is present?",
                answer: 100
            }
        ],

        "P / I": [
            {
                values: [600, 5],
                question: "A load uses 600 W and draws 5 A. What voltage is supplying it?",
                answer: 120
            },
            {
                values: [1200, 5],
                question: "A load uses 1200 W and draws 5 A. What voltage is supplying it?",
                answer: 240
            },
            {
                values: [960, 8],
                question: "A load uses 960 W and draws 8 A. What voltage is supplying it?",
                answer: 120
            }
        ],

        "√(P × R)": [
            {
                values: [720, 20],
                question: "A load uses 720 W and has 20 Ω of resistance. What voltage is required?",
                answer: 120
            },
            {
                values: [1440, 40],
                question: "A load uses 1440 W and has 40 Ω of resistance. What voltage is required?",
                answer: 240
            },
            {
                values: [360, 10],
                question: "A load uses 360 W and has 10 Ω of resistance. What voltage is required?",
                answer: 60
            }
        ],

        "E / R": [
            {
                values: [120, 20],
                question: "A 120 V circuit has a 20 Ω load. What current should flow?",
                answer: 6
            },
            {
                values: [240, 40],
                question: "A 240 V circuit has a 40 Ω load. What current should flow?",
                answer: 6
            },
            {
                values: [120, 10],
                question: "A 120 V circuit has a 10 Ω load. What current should flow?",
                answer: 12
            }
        ],

        "P / E": [
            {
                values: [600, 120],
                question: "A 120 V load uses 600 W. Approximately how much current does it draw?",
                answer: 5
            },
            {
                values: [1200, 240],
                question: "A 240 V load uses 1200 W. Approximately how much current does it draw?",
                answer: 5
            },
            {
                values: [1440, 120],
                question: "A 120 V load uses 1440 W. Approximately how much current does it draw?",
                answer: 12
            }
        ],

        "√(P / R)": [
            {
                values: [500, 20],
                question: "A 500 W load has 20 Ω of resistance. What current does it draw?",
                answer: 5
            },
            {
                values: [720, 20],
                question: "A 720 W load has 20 Ω of resistance. What current does it draw?",
                answer: 6
            },
            {
                values: [1440, 40],
                question: "A 1440 W load has 40 Ω of resistance. What current does it draw?",
                answer: 6
            }
        ],

        "E / I": [
            {
                values: [120, 6],
                question: "A load has 120 V across it and draws 6 A. What is its resistance?",
                answer: 20
            },
            {
                values: [240, 6],
                question: "A load has 240 V across it and draws 6 A. What is its resistance?",
                answer: 40
            },
            {
                values: [120, 12],
                question: "A load has 120 V across it and draws 12 A. What is its resistance?",
                answer: 10
            }
        ],

        "E² / P": [
            {
                values: [120, 720],
                question: "A 120 V load uses 720 W. What is its resistance?",
                answer: 20
            },
            {
                values: [240, 1440],
                question: "A 240 V load uses 1440 W. What is its resistance?",
                answer: 40
            },
            {
                values: [120, 1440],
                question: "A 120 V load uses 1440 W. What is its resistance?",
                answer: 10
            }
        ],

        "P / I²": [
            {
                values: [500, 5],
                question: "A load uses 500 W while drawing 5 A. What is its resistance?",
                answer: 20
            },
            {
                values: [720, 6],
                question: "A load uses 720 W while drawing 6 A. What is its resistance?",
                answer: 20
            },
            {
                values: [1440, 12],
                question: "A load uses 1440 W while drawing 12 A. What is its resistance?",
                answer: 10
            }
        ]

    };


    /* =========================================================
       DOM ELEMENTS
    ========================================================= */

    const wheelWrapper =
        document.querySelector("#wheelWrapper");

    const wheelOverlay =
        document.querySelector(".wheel-hotspots");

    const hotspots =
        document.querySelectorAll(".wheel-hotspot");

    const selectedEquation =
        document.querySelector("#selectedEquation");

    const equationDescription =
        document.querySelector("#equationDescription");

    const calculatorInputs =
        document.querySelector("#calculatorInputs");

    const resultValue =
        document.querySelector("#resultValue");

    const fieldUse =
        document.querySelector("#fieldUse");

    const fieldExample =
        document.querySelector("#fieldExample");

    const fieldUseExample =
        document.querySelector("#fieldUseExample");

    const practiceButton =
        document.querySelector("#practiceButton");

    const practiceBox =
        document.querySelector("#practiceBox");

    const keystrokeDisplay =
        document.querySelector("#keystrokeDisplay");


    /* =========================================================
       CURRENT EQUATION
    ========================================================= */

    let currentEquation = null;


    /* =========================================================
       NUMBER FORMATTER
    ========================================================= */

    function formatNumber(value) {

        if (!Number.isFinite(value)) {
            return "—";
        }

        if (Math.abs(value) >= 1000) {

            return value.toLocaleString("en-US", {
                maximumFractionDigits: 2
            });

        }

        return Number(value.toFixed(2)).toString();
    }


    /* =========================================================
       SCIENTIFIC CALCULATOR KEYSTROKES
    ========================================================= */

    function getKeystrokeSequence(equationKey, values) {

        if (!values || values.length === 0) {
            return [];
        }


        const numbers =
            values.map(value => formatNumber(value));


        switch (equationKey) {

            /* =============================================
               POWER
            ============================================= */

            case "E × I":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "×",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            case "R × I²":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "×",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "x²",
                        type: "function"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            case "E² / R":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "x²",
                        type: "function"
                    },
                    {
                        text: "÷",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            /* =============================================
               VOLTAGE
            ============================================= */

            case "R × I":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "×",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            case "P / I":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "÷",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            case "√(P × R)":

                return [
                    {
                        text: "√",
                        type: "function"
                    },
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "×",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            /* =============================================
               RESISTANCE
            ============================================= */

            case "E / I":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "÷",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            case "E² / P":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "x²",
                        type: "function"
                    },
                    {
                        text: "÷",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            case "P / I²":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "÷",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "x²",
                        type: "function"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            /* =============================================
               CURRENT
            ============================================= */

            case "E / R":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "÷",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            case "P / E":

                return [
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "÷",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            case "√(P / R)":

                return [
                    {
                        text: "√",
                        type: "function"
                    },
                    {
                        text: numbers[0],
                        type: "number"
                    },
                    {
                        text: "÷",
                        type: "operator"
                    },
                    {
                        text: numbers[1],
                        type: "number"
                    },
                    {
                        text: "=",
                        type: "equals"
                    }
                ];


            default:

                return [];

        }

    }


    /* =========================================================
       UPDATE SCIENTIFIC KEYSTROKES
    ========================================================= */

    function updateKeystrokes(values) {

        if (!keystrokeDisplay) {
            return;
        }


        if (!currentEquation) {

            keystrokeDisplay.textContent =
                "Select an equation";

            return;
        }


        const sequence =
            getKeystrokeSequence(
                currentEquation,
                values
            );


        keystrokeDisplay.innerHTML = "";


        sequence.forEach(key => {

            const keyElement =
                document.createElement("span");

            keyElement.className =
                `scientific-key ${key.type}`;

            keyElement.textContent =
                key.text;

            keystrokeDisplay.appendChild(
                keyElement
            );

        });

    }


    /* =========================================================
       CLEAR WHEEL SELECTION
    ========================================================= */

    function clearWheelSelection() {

        hotspots.forEach(hotspot => {

            hotspot.classList.remove("selected");
            hotspot.classList.remove("hovered");

            hotspot.setAttribute(
                "fill",
                "transparent"
            );

            hotspot.setAttribute(
                "fill-opacity",
                "0"
            );

            hotspot.setAttribute(
                "stroke",
                "none"
            );

        });


        if (wheelOverlay) {

            wheelOverlay.classList.remove(
                "has-selection"
            );

        }


        if (wheelWrapper) {

            wheelWrapper.classList.remove(
                "has-selection"
            );

        }

    }


    /* =========================================================
       SET WHEEL SELECTION
    ========================================================= */

    function setWheelSelection(selectedHotspot) {

        hotspots.forEach(hotspot => {

            hotspot.classList.remove("selected");
            hotspot.classList.remove("hovered");

        });


        if (selectedHotspot) {

            selectedHotspot.classList.add(
                "selected"
            );

            selectedHotspot.setAttribute(
                "fill",
                "#000000"
            );

            selectedHotspot.setAttribute(
                "fill-opacity",
                "0.55"
            );

            selectedHotspot.setAttribute(
                "stroke",
                "none"
            );

        }


        if (wheelOverlay) {

            wheelOverlay.classList.toggle(
                "has-selection",
                !!selectedHotspot
            );

        }


        if (wheelWrapper) {

            wheelWrapper.classList.toggle(
                "has-selection",
                !!selectedHotspot
            );

        }

    }


    /* =========================================================
       LOAD EQUATION
    ========================================================= */

    function loadEquation(
        equationKey,
        selectedHotspot = null
    ) {

        const equation =
            equations[equationKey];


        if (!equation) {

            console.warn(
                `Equation "${equationKey}" was not found.`
            );

            return;

        }


        currentEquation =
            equationKey;


        /* -----------------------------------------------------
           WHEEL SELECTION
        ----------------------------------------------------- */

        if (selectedHotspot) {

            setWheelSelection(
                selectedHotspot
            );

        } else {

            hotspots.forEach(hotspot => {

                if (
                    hotspot.dataset.equation ===
                    equationKey
                ) {

                    setWheelSelection(
                        hotspot
                    );

                }

            });

        }


        /* -----------------------------------------------------
           HEADER
        ----------------------------------------------------- */

        if (selectedEquation) {

            selectedEquation.textContent =
                equationKey;

        }


        if (equationDescription) {

            equationDescription.textContent =
                equation.description;

        }


        /* -----------------------------------------------------
           FIELD APPLICATION
        ----------------------------------------------------- */

        if (fieldUse) {

            fieldUse.textContent =
                equation.field;

        }


        if (fieldExample) {

            fieldExample.textContent =
                equation.why;

        }


        if (fieldUseExample) {

            fieldUseExample.textContent =
                equation.what;

        }


        /* -----------------------------------------------------
           CLEAR OLD INPUTS
        ----------------------------------------------------- */

        if (!calculatorInputs) {
            return;
        }


        calculatorInputs.innerHTML = "";


        /* =====================================================
           CREATE INPUTS
        ===================================================== */

        equation.inputs.forEach(
            (input, index) => {

                const group =
                    document.createElement("div");

                group.className =
                    "input-group";


                /* ---------------------------------------------
                   LABEL
                --------------------------------------------- */

                const label =
                    document.createElement("label");


                label.innerHTML = `

                    <span>
                        ${input.name}
                        <strong>${input.symbol}</strong>
                    </span>

                    <span class="live-value">

                        <button
                            type="button"
                            class="editable-value"
                            id="value-${index}"
                            aria-label="Edit ${input.name} value"
                        >
                            ${formatNumber(input.value)}
                        </button>

                        ${input.unit}

                    </span>

                `;


                /* ---------------------------------------------
                   SLIDER
                --------------------------------------------- */

                const slider =
                    document.createElement("input");


                slider.type =
                    "range";


                slider.setAttribute(
                    "inputmode",
                    "decimal"
                );


                slider.min =
                    input.min;


                slider.max =
                    input.max;


                slider.step =
                    input.step;


                slider.value =
                    input.value;


                slider.className =
                    "value-slider";


                slider.dataset.index =
                    index;


                slider.setAttribute(
                    "aria-label",
                    `${input.name} ${input.symbol}`
                );


                /* ---------------------------------------------
                   EDITABLE VALUE
                --------------------------------------------- */

                const editableValue =
                    label.querySelector(
                        ".editable-value"
                    );


                editableValue.addEventListener(
                    "click",
                    () => {

                        const inputField =
                            document.createElement("input");


                        inputField.type =
                            "number";


                        inputField.min =
                            input.min;


                        inputField.max =
                            input.max;


                        inputField.step =
                            input.step;


                        inputField.value =
                            slider.value;


                        inputField.className =
                            "editable-value-input";


                        inputField.inputMode =
                            "decimal";


                        inputField.setAttribute(
                            "aria-label",
                            `Enter ${input.name} value`
                        );


                        editableValue.replaceWith(
                            inputField
                        );


                        inputField.focus();
                        inputField.select();


                        /* -------------------------------------
                           APPLY VALUE
                        ------------------------------------- */

                        const applyValue = () => {

                            let value =
                                Number(
                                    inputField.value
                                );


                            if (
                                !Number.isFinite(
                                    value
                                )
                            ) {

                                value =
                                    Number(
                                        slider.value
                                    );

                            }


                            value =
                                Math.max(
                                    Number(input.min),

                                    Math.min(
                                        Number(input.max),
                                        value
                                    )
                                );


                            slider.value =
                                value;


                            editableValue.textContent =
                                formatNumber(value);


                            inputField.replaceWith(
                                editableValue
                            );


                            updateCalculator();

                        };


                        /* -------------------------------------
                           CLICK / TOUCH AWAY
                        ------------------------------------- */

                        inputField.addEventListener(
                            "blur",
                            applyValue
                        );


                        /* -------------------------------------
                           ENTER / ESCAPE
                        ------------------------------------- */

                        inputField.addEventListener(
                            "keydown",
                            event => {

                                if (
                                    event.key ===
                                    "Enter"
                                ) {

                                    event.preventDefault();

                                    inputField.blur();

                                }


                                if (
                                    event.key ===
                                    "Escape"
                                ) {

                                    event.preventDefault();

                                    inputField.replaceWith(
                                        editableValue
                                    );

                                }

                            }
                        );

                    }
                );


                /* ---------------------------------------------
                   SLIDER INPUT
                --------------------------------------------- */

                slider.addEventListener(
                    "input",
                    () => {

                        editableValue.textContent =
                            formatNumber(
                                Number(
                                    slider.value
                                )
                            );


                        updateCalculator();

                    }
                );


                /* ---------------------------------------------
                   ADD CONTROLS
                --------------------------------------------- */

                group.appendChild(
                    label
                );


                group.appendChild(
                    slider
                );


                calculatorInputs.appendChild(
                    group
                );

            }
        );


        /* -----------------------------------------------------
           INITIAL CALCULATION
        ----------------------------------------------------- */

        updateCalculator();


        /* -----------------------------------------------------
           RESET PRACTICE MESSAGE
        ----------------------------------------------------- */

        if (practiceBox) {

            practiceBox.textContent =
                "Click PRACTICE THIS EQUATION to generate a problem.";

        }

    }


    /* =========================================================
       UPDATE CALCULATOR
    ========================================================= */

    function updateCalculator() {

        if (!currentEquation) {
            return;
        }


        const equation =
            equations[currentEquation];


        if (!calculatorInputs) {
            return;
        }


        const sliders =
            calculatorInputs.querySelectorAll(
                ".value-slider"
            );


        const values =
            Array.from(sliders).map(
                slider =>
                    Number(slider.value)
            );


        /* -----------------------------------------------------
           UPDATE LIVE VALUES
        ----------------------------------------------------- */

        sliders.forEach(
            (slider, index) => {

                const display =
                    document.querySelector(
                        `#value-${index}`
                    );


                if (display) {

                    display.textContent =
                        formatNumber(
                            values[index]
                        );

                }

            }
        );


        /* -----------------------------------------------------
           UPDATE SCIENTIFIC KEYSTROKES
        ----------------------------------------------------- */

        updateKeystrokes(
            values
        );


        /* -----------------------------------------------------
           CALCULATE
        ----------------------------------------------------- */

        let result;


        try {

            result =
                equation.calculate(
                    values
                );

        } catch (error) {

            console.error(
                "Calculation error:",
                error
            );

            result =
                NaN;

        }


        /* -----------------------------------------------------
           DISPLAY RESULT
        ----------------------------------------------------- */

        if (
            Number.isFinite(result) &&
            result >= 0
        ) {

            resultValue.textContent =
                `${formatNumber(result)} ${equation.resultUnit}`;

        } else {

            resultValue.textContent =
                "—";

        }

    }


    /* =========================================================
       WHEEL EVENTS
    ========================================================= */

    hotspots.forEach(
        hotspot => {

            /* -------------------------------------------------
               CLICK
            ------------------------------------------------- */

            hotspot.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    const equation =
                        hotspot.dataset.equation;


                    if (!equations[equation]) {

                        console.warn(
                            `No calculator exists for "${equation}".`
                        );

                        return;

                    }


                    loadEquation(
                        equation,
                        hotspot
                    );


                    console.log(
                        "CLICKED:",
                        hotspot.dataset.equation
                    );

                }
            );


            /* -------------------------------------------------
               HOVER
            ------------------------------------------------- */

            hotspot.addEventListener(
                "mouseenter",
                () => {

                    hotspot.classList.add(
                        "hovered"
                    );

                }
            );


            hotspot.addEventListener(
                "mouseleave",
                () => {

                    hotspot.classList.remove(
                        "hovered"
                    );

                }
            );

        }
    );


    /* =========================================================
       PRACTICE BUTTON
    ========================================================= */

    let currentPracticeProblem = null;


    if (practiceButton) {

        practiceButton.addEventListener(
            "click",
            () => {

                if (!currentEquation) {

                    practiceBox.textContent =
                        "Select an equation on the wheel first.";

                    return;

                }


                const problems =
                    practiceProblems[
                        currentEquation
                    ];


                if (
                    !problems ||
                    problems.length === 0
                ) {

                    practiceBox.textContent =
                        "No practice problems are available for this equation.";

                    return;

                }


                /* ---------------------------------------------
                   SELECT RANDOM PROBLEM
                --------------------------------------------- */

                const randomIndex =
                    Math.floor(
                        Math.random() *
                        problems.length
                    );


                currentPracticeProblem =
                    problems[randomIndex];


                /* ---------------------------------------------
                   DISPLAY PROBLEM
                --------------------------------------------- */

                practiceBox.innerHTML = `

                    <strong>
                        PRACTICE PROBLEM
                    </strong>

                    <p>
                        ${currentPracticeProblem.question}
                    </p>

                    <div class="practice-answer">

                        <label for="practiceAnswer">
                            Your Answer
                        </label>

                        <input
                            id="practiceAnswer"
                            type="number"
                            inputmode="decimal"
                            step="any"
                            autocomplete="off"
                        >

                        <button
                            id="checkPracticeAnswer"
                            type="button"
                        >
                            CHECK ANSWER
                        </button>

                    </div>

                    <div id="practiceResult"></div>

                `;


                /* ---------------------------------------------
                   GET PRACTICE CONTROLS
                --------------------------------------------- */

                const answerInput =
                    document.querySelector(
                        "#practiceAnswer"
                    );


                const checkButton =
                    document.querySelector(
                        "#checkPracticeAnswer"
                    );


                const practiceResult =
                    document.querySelector(
                        "#practiceResult"
                    );


                /* ---------------------------------------------
                   CHECK ANSWER
                --------------------------------------------- */

                checkButton.addEventListener(
                    "click",
                    () => {

                        const userAnswer =
                            Number(
                                answerInput.value
                            );


                        if (
                            !Number.isFinite(
                                userAnswer
                            )
                        ) {

                            practiceResult.textContent =
                                "Enter an answer first.";

                            return;

                        }


                        const correctAnswer =
                            currentPracticeProblem.answer;


                        const difference =
                            Math.abs(
                                userAnswer -
                                correctAnswer
                            );


                        const tolerance =
                            Math.max(
                                0.01,
                                Math.abs(
                                    correctAnswer
                                ) * 0.001
                            );


                        /* -----------------------------------------
                           CORRECT
                        ----------------------------------------- */

                        if (
                            difference <=
                            tolerance
                        ) {

                            practiceResult.innerHTML = `

                                <strong>
                                    CORRECT
                                </strong>

                                <p>
                                    Your answer:
                                    ${formatNumber(userAnswer)}
                                </p>

                                <button
                                    id="newPracticeProblem"
                                    type="button"
                                >
                                    NEW PROBLEM
                                </button>

                            `;

                        }


                        /* -----------------------------------------
                           INCORRECT
                        ----------------------------------------- */

                        else {

                            practiceResult.innerHTML = `

                                <strong>
                                    NOT QUITE
                                </strong>

                                <p>
                                    Your answer:
                                    ${formatNumber(userAnswer)}
                                </p>

                                <p>
                                    Correct answer:
                                    ${formatNumber(correctAnswer)}
                                </p>

                                <button
                                    id="newPracticeProblem"
                                    type="button"
                                >
                                    NEW PROBLEM
                                </button>

                            `;

                        }


                        /* -----------------------------------------
                           NEW PROBLEM BUTTON
                        ----------------------------------------- */

                        const newProblemButton =
                            document.querySelector(
                                "#newPracticeProblem"
                            );


                        if (newProblemButton) {

                            newProblemButton.addEventListener(
                                "click",
                                () => {

                                    practiceButton.click();

                                }
                            );

                        }

                    }
                );


                /* ---------------------------------------------
                   FOCUS ANSWER FIELD
                --------------------------------------------- */

                answerInput.focus();

            }
        );

    }


    /* =========================================================
       CLICK OUTSIDE WHEEL
    ========================================================= */

    document.addEventListener(
        "click",
        event => {

            /*
               Keep the selection when clicking directly
               on the color wheel or its SVG hotspots.
            */

            if (
                event.target.closest(
                    ".color-wheel, .wheel-hotspots"
                )
            ) {

                return;

            }


            /*
               Clicking anywhere else on the page
               clears the wheel selection.
            */

            clearWheelSelection();

        }
    );


    /* =========================================================
       VALIDATE WHEEL AGAINST EQUATION DATA
    ========================================================= */

    const wheelEquationNames =
        Array.from(hotspots).map(
            hotspot =>
                hotspot.dataset.equation
        );


    wheelEquationNames.forEach(
        equation => {

            if (!equations[equation]) {

                console.warn(
                    `Wheel hotspot "${equation}" has no matching calculator.`
                );

            }

        }
    );


    Object.keys(equations).forEach(
        equation => {

            if (
                !wheelEquationNames.includes(
                    equation
                )
            ) {

                console.warn(
                    `Calculator equation "${equation}" has no matching wheel hotspot.`
                );

            }

        }
    );


    /* =========================================================
       INITIAL STATE
    ========================================================= */

    if (selectedEquation) {

        selectedEquation.textContent =
            "Select an equation above";

    }


    if (equationDescription) {

        equationDescription.textContent =
            "Click on one of the equations to begin.";

    }


    if (keystrokeDisplay) {

        keystrokeDisplay.textContent =
            "Select an equation";

    }


    console.log(
        `Loaded ${Object.keys(equations).length} equations.`
    );

});


/* =========================================================
   BASIC CALCULATOR
========================================================= */

const basicDisplay =
    document.getElementById(
        "basicDisplay"
    );


const basicButtons =
    document.querySelectorAll(
        "[data-calc]"
    );


let basicCurrentValue = "0";
let basicStoredValue = null;
let basicOperator = null;
let basicExpression = "";
let basicWaitingForValue = false;
let basicJustCalculated = false;


/* =========================================================
   DISPLAY
========================================================= */

function updateBasicDisplay() {

    basicDisplay.textContent =
        basicExpression ||
        basicCurrentValue;

}


/* =========================================================
   NUMBER INPUT
========================================================= */

function enterBasicNumber(value) {

    if (
        basicCurrentValue ===
        "ERROR"
    ) {

        clearBasicCalculator();

    }


    /* Start a new calculation after pressing = */

    if (basicJustCalculated) {

        basicCurrentValue =
            value === "."
                ? "0."
                : value;


        basicExpression =
            basicCurrentValue;


        basicStoredValue =
            null;


        basicOperator =
            null;


        basicWaitingForValue =
            false;


        basicJustCalculated =
            false;


        updateBasicDisplay();

        return;

    }


    /* Start the second number */

    if (basicWaitingForValue) {

        basicCurrentValue =
            value === "."
                ? "0."
                : value;


        basicExpression +=
            basicCurrentValue;


        basicWaitingForValue =
            false;


        updateBasicDisplay();

        return;

    }


    /* Prevent multiple decimal points */

    if (
        value === "." &&
        basicCurrentValue.includes(".")
    ) {

        return;

    }


    /* Replace initial zero */

    if (
        basicCurrentValue === "0" &&
        value !== "."
    ) {

        basicCurrentValue =
            value;


        if (
            basicExpression === "0"
        ) {

            basicExpression =
                value;

        } else {

            basicExpression +=
                value;

        }

    } else {

        basicCurrentValue +=
            value;

        basicExpression +=
            value;

    }


    updateBasicDisplay();

}


/* =========================================================
   OPERATOR
========================================================= */

function chooseBasicOperator(operator) {

    if (
        basicCurrentValue ===
        "ERROR"
    ) {

        return;

    }


    /* Change operator if one was just entered */

    if (basicWaitingForValue) {

        basicOperator =
            operator;


        basicExpression =
            basicExpression.slice(0, -3) +
            " " +
            getBasicOperatorSymbol(operator) +
            " ";


        updateBasicDisplay();

        return;

    }


    if (
        basicStoredValue !== null &&
        basicOperator
    ) {

        const result =
            calculateBasic(
                basicStoredValue,
                basicCurrentValue,
                basicOperator
            );


        if (
            result === "ERROR"
        ) {

            basicCurrentValue =
                "ERROR";


            basicExpression =
                "ERROR";


            basicStoredValue =
                null;


            basicOperator =
                null;


            updateBasicDisplay();

            return;

        }


        basicCurrentValue =
            String(result);


        basicStoredValue =
            result;

    } else {

        basicStoredValue =
            Number(
                basicCurrentValue
            );

    }


    basicOperator =
        operator;


    basicExpression +=
        " " +
        getBasicOperatorSymbol(operator) +
        " ";


    basicWaitingForValue =
        true;


    basicJustCalculated =
        false;


    updateBasicDisplay();

}


/* =========================================================
   OPERATOR SYMBOL
========================================================= */

function getBasicOperatorSymbol(operator) {

    switch (operator) {

        case "+":
            return "+";

        case "-":
            return "−";

        case "*":
            return "×";

        case "/":
            return "÷";

        default:
            return operator;

    }

}


/* =========================================================
   CALCULATION
========================================================= */

function calculateBasic(
    first,
    second,
    operator
) {

    const a =
        Number(first);

    const b =
        Number(second);


    switch (operator) {

        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":

            if (b === 0) {
                return "ERROR";
            }

            return a / b;

        default:
            return b;

    }

}


/* =========================================================
   EQUALS
========================================================= */

function completeBasicCalculation() {

    if (
        basicStoredValue === null ||
        basicOperator === null ||
        basicCurrentValue === "ERROR"
    ) {

        return;

    }


    const secondValue =
        basicCurrentValue;


    const result =
        calculateBasic(
            basicStoredValue,
            secondValue,
            basicOperator
        );


    if (
        result === "ERROR"
    ) {

        basicCurrentValue =
            "ERROR";


        basicExpression =
            "ERROR";

    } else {

        basicExpression +=
            " = " +
            String(result);


        basicCurrentValue =
            String(result);

    }


    basicStoredValue =
        null;


    basicOperator =
        null;


    basicWaitingForValue =
        false;


    basicJustCalculated =
        true;


    updateBasicDisplay();

}


/* =========================================================
   CLEAR
========================================================= */

function clearBasicCalculator() {

    basicCurrentValue =
        "0";


    basicStoredValue =
        null;


    basicOperator =
        null;


    basicExpression =
        "0";


    basicWaitingForValue =
        false;


    basicJustCalculated =
        false;


    updateBasicDisplay();

}


/* =========================================================
   BUTTONS
========================================================= */

basicButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const action =
                    button.dataset.calc;


                const value =
                    button.dataset.value;


                if (
                    action ===
                    "number"
                ) {

                    enterBasicNumber(
                        value
                    );

                }


                if (
                    action ===
                    "operator"
                ) {

                    chooseBasicOperator(
                        value
                    );

                }


                if (
                    action ===
                    "equals"
                ) {

                    completeBasicCalculation();

                }


                if (
                    action ===
                    "clear"
                ) {

                    clearBasicCalculator();

                }

            }
        );

    }
);


/* =========================================================
   INITIAL DISPLAY
========================================================= */

updateBasicDisplay();