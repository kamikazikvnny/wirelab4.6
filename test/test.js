/* =========================================================
   WIRELAB TESTING SYSTEM
   100-QUESTION ELECTRICAL KNOWLEDGE TEST
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       QUESTION BANK — 100 QUESTIONS
    ===================================================== */

    const testQuestions = [

        /* =================================================
           1–8 — SAFETY & BASIC ELECTRICITY
        ================================================= */

        {
            category: "SAFETY",
            question: "What is the primary purpose of electrical PPE?",
            choices: [
                "Increase circuit voltage",
                "Protect the worker from electrical hazards",
                "Increase conductor ampacity",
                "Reduce voltage drop"
            ],
            answer: 1,
            explanation: "Electrical PPE helps protect workers from hazards such as shock, arc flash, and burns."
        },

        {
            category: "SAFETY",
            question: "Before working on an electrical circuit, what should be done first?",
            choices: [
                "Increase the circuit voltage",
                "De-energize the circuit when possible",
                "Remove the grounding conductor",
                "Replace the circuit breaker"
            ],
            answer: 1,
            explanation: "De-energizing equipment before work is an important electrical safety practice."
        },

        {
            category: "SAFETY",
            question: "What is the purpose of lockout/tagout procedures?",
            choices: [
                "Increase equipment speed",
                "Prevent unexpected energization",
                "Increase conductor size",
                "Improve circuit efficiency"
            ],
            answer: 1,
            explanation: "Lockout/tagout procedures help prevent equipment from being energized unexpectedly while work is being performed."
        },

        {
            category: "SAFETY",
            question: "Which condition creates a potential electrical shock hazard?",
            choices: [
                "Contact with an energized conductor",
                "Using a properly rated ladder",
                "Reading a wiring diagram",
                "Measuring resistance on a de-energized circuit"
            ],
            answer: 0,
            explanation: "Contact with an energized conductor can allow current to pass through the body."
        },

        {
            category: "SAFETY",
            question: "Why should electrical tools and equipment be inspected before use?",
            choices: [
                "To increase voltage",
                "To identify damage or unsafe conditions",
                "To reduce conductor resistance",
                "To increase motor speed"
            ],
            answer: 1,
            explanation: "Inspection can identify damaged cords, insulation, plugs, guards, and other unsafe conditions."
        },

        {
            category: "SAFETY",
            question: "What is a major danger associated with an arc flash?",
            choices: [
                "Low resistance",
                "Heat and explosive energy",
                "Reduced frequency",
                "Low conductor temperature"
            ],
            answer: 1,
            explanation: "An arc flash can produce extreme heat, pressure, light, and flying debris."
        },

        {
            category: "SAFETY",
            question: "Why should jewelry generally be removed when working around electrical equipment?",
            choices: [
                "It increases voltage",
                "It can become energized or create a short circuit",
                "It reduces current",
                "It changes frequency"
            ],
            answer: 1,
            explanation: "Metal jewelry can conduct electricity and may create a shock or short-circuit hazard."
        },

        {
            category: "SAFETY",
            question: "What is the safest assumption when dealing with an unfamiliar electrical conductor?",
            choices: [
                "It is always grounded",
                "It is de-energized",
                "It may be energized until properly verified",
                "It carries no current"
            ],
            answer: 2,
            explanation: "An unfamiliar conductor should be treated as potentially energized until its condition is properly verified."
        },


        /* =================================================
           9–15 — ATOMIC STRUCTURE & FUNDAMENTALS
        ================================================= */

        {
            category: "BASIC ELECTRICITY",
            question: "Which particle is primarily responsible for electric current in a metal conductor?",
            choices: [
                "Proton",
                "Neutron",
                "Electron",
                "Nucleus"
            ],
            answer: 2,
            explanation: "Electric current in a metal conductor results primarily from the movement of electrons."
        },

        {
            category: "BASIC ELECTRICITY",
            question: "What electrical charge does a proton have?",
            choices: [
                "Negative",
                "Positive",
                "Neutral",
                "Variable"
            ],
            answer: 1,
            explanation: "A proton carries a positive electrical charge."
        },

        {
            category: "BASIC ELECTRICITY",
            question: "What electrical charge does an electron have?",
            choices: [
                "Positive",
                "Negative",
                "Neutral",
                "No charge"
            ],
            answer: 1,
            explanation: "An electron carries a negative electrical charge."
        },

        {
            category: "BASIC ELECTRICITY",
            question: "Which material is generally considered a good electrical conductor?",
            choices: [
                "Copper",
                "Rubber",
                "Glass",
                "Dry wood"
            ],
            answer: 0,
            explanation: "Copper has many mobile electrons and is widely used as an electrical conductor."
        },

        {
            category: "BASIC ELECTRICITY",
            question: "Which material is commonly used as an electrical insulator?",
            choices: [
                "Copper",
                "Aluminum",
                "Rubber",
                "Silver"
            ],
            answer: 2,
            explanation: "Rubber is commonly used as an electrical insulating material."
        },

        {
            category: "BASIC ELECTRICITY",
            question: "What is electric current?",
            choices: [
                "Opposition to electron flow",
                "The flow of electric charge",
                "Electrical pressure only",
                "Stored electrical energy only"
            ],
            answer: 1,
            explanation: "Electric current is the movement or flow of electric charge."
        },

        {
            category: "BASIC ELECTRICITY",
            question: "What unit is used to measure electric current?",
            choices: [
                "Volt",
                "Ohm",
                "Ampere",
                "Watt"
            ],
            answer: 2,
            explanation: "Electric current is measured in amperes, commonly called amps."
        },


        /* =================================================
           16–25 — OHM'S LAW & ELECTRICAL MATH
        ================================================= */

        {
            category: "OHM'S LAW",
            question: "Which formula represents Ohm's Law for voltage?",
            choices: [
                "E = I × R",
                "E = I ÷ R",
                "E = R ÷ I",
                "E = P × R"
            ],
            answer: 0,
            explanation: "Ohm's Law states that voltage equals current multiplied by resistance: E = I × R."
        },

        {
            category: "OHM'S LAW",
            question: "A circuit has 20 Ω of resistance and 5 A of current. What is the voltage?",
            choices: [
                "4 V",
                "25 V",
                "100 V",
                "400 V"
            ],
            answer: 2,
            explanation: "E = I × R. Therefore, 5 A × 20 Ω = 100 V."
        },

        {
            category: "OHM'S LAW",
            question: "A 120 V load draws 10 A. How much power does the load consume?",
            choices: [
                "12 W",
                "120 W",
                "1,200 W",
                "12,000 W"
            ],
            answer: 2,
            explanation: "P = E × I. Therefore, 120 V × 10 A = 1,200 W."
        },

        {
            category: "OHM'S LAW",
            question: "What is the resistance of a circuit drawing 5 A from a 120 V source?",
            choices: [
                "12 Ω",
                "24 Ω",
                "60 Ω",
                "600 Ω"
            ],
            answer: 1,
            explanation: "R = E ÷ I. Therefore, 120 V ÷ 5 A = 24 Ω."
        },

        {
            category: "OHM'S LAW",
            question: "What is the current of a 240 V load with 20 Ω of resistance?",
            choices: [
                "2 A",
                "8 A",
                "12 A",
                "24 A"
            ],
            answer: 2,
            explanation: "I = E ÷ R. Therefore, 240 V ÷ 20 Ω = 12 A."
        },

        {
            category: "OHM'S LAW",
            question: "What unit is used to measure electrical resistance?",
            choices: [
                "Volt",
                "Ampere",
                "Ohm",
                "Watt"
            ],
            answer: 2,
            explanation: "Electrical resistance is measured in ohms."
        },

        {
            category: "OHM'S LAW",
            question: "Which formula calculates power using voltage and current?",
            choices: [
                "P = E × I",
                "P = E ÷ I",
                "P = I ÷ E",
                "P = R ÷ I"
            ],
            answer: 0,
            explanation: "Electrical power can be calculated using P = E × I."
        },

        {
            category: "OHM'S LAW",
            question: "A 1,500 W heater operates at 120 V. Approximately how much current does it draw?",
            choices: [
                "5 A",
                "10 A",
                "12.5 A",
                "18 A"
            ],
            answer: 2,
            explanation: "I = P ÷ E. Therefore, 1,500 W ÷ 120 V = 12.5 A."
        },

        {
            category: "OHM'S LAW",
            question: "If resistance increases while voltage remains constant, what happens to current?",
            choices: [
                "Current increases",
                "Current decreases",
                "Current becomes zero automatically",
                "Frequency increases"
            ],
            answer: 1,
            explanation: "According to Ohm's Law, I = E ÷ R, so increasing resistance decreases current when voltage remains constant."
        },

        {
            category: "OHM'S LAW",
            question: "If voltage increases while resistance remains constant, what happens to current?",
            choices: [
                "Current decreases",
                "Current increases",
                "Current remains zero",
                "Resistance automatically doubles"
            ],
            answer: 1,
            explanation: "According to Ohm's Law, increasing voltage increases current when resistance remains constant."
        },


        /* =================================================
           26–34 — BASIC ELECTRIC CIRCUITS
        ================================================= */

        {
            category: "CIRCUITS",
            question: "In a series circuit, what is the same through every component?",
            choices: [
                "Voltage",
                "Current",
                "Resistance",
                "Power"
            ],
            answer: 1,
            explanation: "The same current flows through every component in a series circuit."
        },

        {
            category: "CIRCUITS",
            question: "In a parallel circuit, what is the same across each branch?",
            choices: [
                "Current",
                "Resistance",
                "Voltage",
                "Power"
            ],
            answer: 2,
            explanation: "Each parallel branch is connected across the same source voltage."
        },

        {
            category: "CIRCUITS",
            question: "What happens to total resistance when additional resistors are added in series?",
            choices: [
                "It increases",
                "It decreases",
                "It always becomes zero",
                "It becomes equal to voltage"
            ],
            answer: 0,
            explanation: "Series resistances add together, increasing total resistance."
        },

        {
            category: "CIRCUITS",
            question: "What happens to total resistance when another branch is added to a parallel circuit?",
            choices: [
                "It increases",
                "It decreases",
                "It becomes infinite",
                "It cannot change"
            ],
            answer: 1,
            explanation: "Adding another parallel path generally decreases the circuit's total resistance."
        },

        {
            category: "CIRCUITS",
            question: "What is required for current to flow continuously in a basic electrical circuit?",
            choices: [
                "An open path",
                "A complete path",
                "An unlimited resistance",
                "No source"
            ],
            answer: 1,
            explanation: "A complete electrical path is required for continuous current flow."
        },

        {
            category: "CIRCUITS",
            question: "What condition exists when a circuit path is interrupted?",
            choices: [
                "Short circuit",
                "Open circuit",
                "Parallel circuit",
                "Grounded circuit"
            ],
            answer: 1,
            explanation: "An open circuit has an interrupted path that prevents normal current flow."
        },

        {
            category: "CIRCUITS",
            question: "What is a short circuit?",
            choices: [
                "A path with very low resistance",
                "A path with infinite resistance",
                "A normal open switch",
                "A circuit with no source"
            ],
            answer: 0,
            explanation: "A short circuit provides an unintended low-resistance path that can produce excessive current."
        },

        {
            category: "CIRCUITS",
            question: "What does a switch normally do in a basic circuit?",
            choices: [
                "Controls whether the circuit path is open or closed",
                "Creates resistance automatically",
                "Changes AC into DC",
                "Increases conductor ampacity"
            ],
            answer: 0,
            explanation: "A switch opens or closes a circuit path to control current flow."
        },

        {
            category: "CIRCUITS",
            question: "In a parallel circuit, what happens if one branch opens while other branches remain intact?",
            choices: [
                "All branches necessarily stop conducting",
                "The remaining branches can continue operating",
                "The source disappears",
                "All resistance becomes zero"
            ],
            answer: 1,
            explanation: "Parallel branches provide separate current paths, so other intact branches can continue operating."
        },


        /* =================================================
           35–42 — RESISTORS & RESISTANCE
        ================================================= */

        {
            category: "RESISTORS",
            question: "What is the primary function of a resistor?",
            choices: [
                "Limit or control current",
                "Generate magnetic fields only",
                "Store mechanical energy",
                "Increase conductor size"
            ],
            answer: 0,
            explanation: "Resistors oppose current flow and are used to control voltage and current in circuits."
        },

        {
            category: "RESISTORS",
            question: "What resistance value is represented by brown-black-black-gold?",
            choices: [
                "1 Ω ±5%",
                "10 Ω ±5%",
                "100 Ω ±5%",
                "1,000 Ω ±5%"
            ],
            answer: 1,
            explanation: "Brown is 1, black is 0, black is the multiplier ×1, and gold represents ±5% tolerance."
        },

        {
            category: "RESISTORS",
            question: "What does the gold band on a common four-band resistor usually indicate?",
            choices: [
                "The first digit",
                "The second digit",
                "Tolerance",
                "Power rating"
            ],
            answer: 2,
            explanation: "On a common four-band resistor, gold usually indicates a ±5% tolerance."
        },

        {
            category: "RESISTORS",
            question: "What happens to resistance in a conductor as temperature increases in many metallic conductors?",
            choices: [
                "It generally increases",
                "It always becomes zero",
                "It always decreases",
                "It becomes equal to voltage"
            ],
            answer: 0,
            explanation: "The resistance of many metallic conductors increases as temperature rises."
        },

        {
            category: "RESISTORS",
            question: "What unit is commonly used for large resistance values?",
            choices: [
                "Kilohm",
                "Kilovolt",
                "Kilowatt",
                "Ampere"
            ],
            answer: 0,
            explanation: "A kilohm equals 1,000 ohms and is commonly used for larger resistance values."
        },

        {
            category: "RESISTORS",
            question: "Two 10 Ω resistors connected in series have a total resistance of:",
            choices: [
                "5 Ω",
                "10 Ω",
                "20 Ω",
                "100 Ω"
            ],
            answer: 2,
            explanation: "Series resistances add: 10 Ω + 10 Ω = 20 Ω."
        },

        {
            category: "RESISTORS",
            question: "Two identical resistors connected in parallel have a total resistance that is:",
            choices: [
                "Greater than either resistor",
                "Equal to their sum",
                "Less than either individual resistor",
                "Always zero"
            ],
            answer: 2,
            explanation: "Parallel resistance is lower than the resistance of any individual branch."
        },

        {
            category: "RESISTORS",
            question: "What does resistor tolerance describe?",
            choices: [
                "The acceptable variation from its rated resistance",
                "Its operating voltage only",
                "Its wire size",
                "Its frequency"
            ],
            answer: 0,
            explanation: "Tolerance indicates how far the actual resistance may vary from the marked value."
        },


        /* =================================================
           43–50 — TEST INSTRUMENTS
        ================================================= */

        {
            category: "TEST INSTRUMENTS",
            question: "How should an ammeter normally be connected when measuring current?",
            choices: [
                "In parallel",
                "In series",
                "Across the source",
                "To ground only"
            ],
            answer: 1,
            explanation: "An ammeter is connected in series so circuit current flows through the meter."
        },

        {
            category: "TEST INSTRUMENTS",
            question: "Which instrument is used to measure resistance?",
            choices: [
                "Ammeter",
                "Voltmeter",
                "Ohmmeter",
                "Wattmeter"
            ],
            answer: 2,
            explanation: "An ohmmeter measures electrical resistance."
        },

        {
            category: "TEST INSTRUMENTS",
            question: "How is a voltmeter normally connected?",
            choices: [
                "In series",
                "In parallel",
                "Only to ground",
                "Across a fuse only"
            ],
            answer: 1,
            explanation: "A voltmeter is connected across the points where voltage is being measured."
        },

        {
            category: "TEST INSTRUMENTS",
            question: "Why should resistance normally be measured on a de-energized circuit?",
            choices: [
                "To increase current",
                "To protect the meter and obtain a valid measurement",
                "To increase voltage",
                "To energize the load"
            ],
            answer: 1,
            explanation: "Resistance measurements are normally made on de-energized circuits because the meter supplies its own test voltage."
        },

        {
            category: "TEST INSTRUMENTS",
            question: "What does a continuity test check?",
            choices: [
                "Whether a conductive path exists",
                "Whether voltage is always 120 V",
                "Whether frequency is exactly 60 Hz",
                "Whether a breaker is oversized"
            ],
            answer: 0,
            explanation: "A continuity test checks whether a conductive path exists between two points."
        },

        {
            category: "TEST INSTRUMENTS",
            question: "What should be verified before using a meter on an electrical circuit?",
            choices: [
                "That the meter is properly rated for the measurement",
                "That the circuit has no conductors",
                "That the battery is removed",
                "That the meter is set to resistance regardless of the circuit"
            ],
            answer: 0,
            explanation: "The meter and test leads should be properly rated and the correct function selected for the measurement."
        },

        {
            category: "TEST INSTRUMENTS",
            question: "What instrument can commonly measure voltage, resistance, and current?",
            choices: [
                "Multimeter",
                "Thermometer",
                "Tachometer",
                "Megaphone"
            ],
            answer: 0,
            explanation: "A multimeter can perform several electrical measurements depending on its functions and configuration."
        },

        {
            category: "TEST INSTRUMENTS",
            question: "What is a common mistake when measuring voltage with a multimeter?",
            choices: [
                "Connecting the meter across the points being tested",
                "Selecting the correct voltage function",
                "Using properly rated test leads",
                "Accidentally leaving the meter configured for current measurement"
            ],
            answer: 3,
            explanation: "Leaving a meter configured for current measurement and placing it across a voltage source can create a dangerous condition."
        },


        /* =================================================
           51–58 — WIRE SIZES & CONDUCTORS
        ================================================= */

        {
            category: "WIRE & CONDUCTORS",
            question: "What does AWG stand for?",
            choices: [
                "American Wire Gauge",
                "Applied Wattage Guide",
                "Alternating Wire Ground",
                "American Wiring Group"
            ],
            answer: 0,
            explanation: "AWG stands for American Wire Gauge."
        },

        {
            category: "WIRE & CONDUCTORS",
            question: "In the AWG system, which is generally larger: 10 AWG or 14 AWG?",
            choices: [
                "14 AWG",
                "10 AWG",
                "They are the same",
                "Size cannot be compared"
            ],
            answer: 1,
            explanation: "A smaller AWG number represents a larger conductor diameter."
        },

        {
            category: "WIRE & CONDUCTORS",
            question: "What is ampacity?",
            choices: [
                "The resistance of a conductor",
                "The maximum current a conductor can carry under specified conditions",
                "The voltage of a conductor",
                "The physical length of a conductor"
            ],
            answer: 1,
            explanation: "Ampacity is the current-carrying capacity of a conductor under specified conditions."
        },

        {
            category: "WIRE & CONDUCTORS",
            question: "Which material is commonly used for electrical conductors?",
            choices: [
                "Copper",
                "Rubber",
                "Glass",
                "Ceramic"
            ],
            answer: 0,
            explanation: "Copper is widely used because of its good conductivity and practical mechanical properties."
        },

        {
            category: "WIRE & CONDUCTORS",
            question: "Why can conductor temperature affect ampacity?",
            choices: [
                "Higher temperatures can affect insulation and conductor performance",
                "Temperature has no electrical effect",
                "It automatically doubles voltage",
                "It eliminates resistance"
            ],
            answer: 0,
            explanation: "Conductor temperature and insulation temperature ratings are important factors in determining allowable current."
        },

        {
            category: "WIRE & CONDUCTORS",
            question: "What is voltage drop?",
            choices: [
                "An increase in voltage along a conductor",
                "A reduction in voltage across a circuit component or conductor",
                "A complete short circuit",
                "An increase in conductor diameter"
            ],
            answer: 1,
            explanation: "Voltage drop is the reduction in voltage that occurs as current flows through resistance or impedance."
        },

        {
            category: "WIRE & CONDUCTORS",
            question: "What generally happens to voltage drop when conductor resistance increases and current remains the same?",
            choices: [
                "Voltage drop increases",
                "Voltage drop decreases",
                "Voltage drop becomes zero",
                "Frequency doubles"
            ],
            answer: 0,
            explanation: "Using E = I × R, greater resistance produces greater voltage drop at the same current."
        },

        {
            category: "WIRE & CONDUCTORS",
            question: "Why are conductors properly terminated at electrical devices?",
            choices: [
                "To create a reliable electrical connection",
                "To eliminate all resistance",
                "To increase frequency",
                "To make the conductor shorter electrically"
            ],
            answer: 0,
            explanation: "Proper terminations provide reliable electrical and mechanical connections."
        },


        /* =================================================
           59–65 — GFCI & AFCI
        ================================================= */

        {
            category: "GFCI",
            question: "What condition is a GFCI primarily designed to detect?",
            choices: [
                "Excessive voltage",
                "Current imbalance between conductors",
                "Low frequency",
                "High resistance only"
            ],
            answer: 1,
            explanation: "A GFCI monitors for an imbalance between current leaving and returning through the circuit conductors."
        },

        {
            category: "GFCI",
            question: "What is the primary purpose of GFCI protection?",
            choices: [
                "Protect people from certain ground-fault shock hazards",
                "Increase motor speed",
                "Increase circuit voltage",
                "Reduce normal load current"
            ],
            answer: 0,
            explanation: "GFCI protection is designed to reduce the risk of electric shock from certain ground-fault conditions."
        },

        {
            category: "GFCI",
            question: "What should happen when a properly functioning GFCI detects a sufficient imbalance?",
            choices: [
                "It should interrupt the circuit",
                "It should increase voltage",
                "It should increase current",
                "It should close an open switch"
            ],
            answer: 0,
            explanation: "A GFCI is designed to interrupt the circuit when it detects the specified imbalance."
        },

        {
            category: "GFCI",
            question: "What is the purpose of the TEST button on a GFCI device?",
            choices: [
                "To simulate a fault condition and verify operation",
                "To increase the circuit rating",
                "To measure resistance",
                "To reset a circuit breaker"
            ],
            answer: 0,
            explanation: "The TEST function is used to verify that the GFCI protection mechanism operates."
        },

        {
            category: "GFCI",
            question: "What is the purpose of the RESET button on a GFCI device?",
            choices: [
                "Restore the protected circuit after an interruption when conditions permit",
                "Increase voltage",
                "Measure current",
                "Change AC to DC"
            ],
            answer: 0,
            explanation: "RESET restores the device after it has tripped, provided the conditions allow it to reset."
        },

        {
            category: "AFCI",
            question: "What type of condition is an AFCI primarily intended to detect?",
            choices: [
                "Certain dangerous arcing conditions",
                "Low water pressure",
                "Motor speed",
                "Normal conductor temperature"
            ],
            answer: 0,
            explanation: "AFCI protection is designed to detect certain electrical arcing conditions that can create fire hazards."
        },

        {
            category: "GFCI",
            question: "If a GFCI trips repeatedly, what should an electrician consider?",
            choices: [
                "Investigating the circuit and connected equipment for a fault",
                "Immediately bypassing the GFCI",
                "Installing a larger fuse without testing",
                "Removing the grounding conductor"
            ],
            answer: 0,
            explanation: "Repeated tripping can indicate a fault or problem that should be investigated rather than bypassed."
        },


        /* =================================================
           66–71 — NEC & INSTALLATION CONCEPTS
        ================================================= */

        {
            category: "NEC & INSTALLATION",
            question: "What is the primary purpose of the National Electrical Code?",
            choices: [
                "Provide requirements intended to safeguard people and property from electrical hazards",
                "Teach advanced mathematics",
                "Set the price of electrical materials",
                "Replace every manufacturer's instruction"
            ],
            answer: 0,
            explanation: "The NEC provides electrical installation requirements intended to protect people and property from electrical hazards."
        },

        {
            category: "NEC & INSTALLATION",
            question: "What is the purpose of good electrical workmanship?",
            choices: [
                "Create safe, reliable, and properly installed electrical systems",
                "Increase voltage beyond equipment ratings",
                "Eliminate all circuit protection",
                "Reduce conductor size"
            ],
            answer: 0,
            explanation: "Proper workmanship helps create safe, reliable, and durable electrical installations."
        },

        {
            category: "NEC & INSTALLATION",
            question: "Why are electrical boxes used in wiring systems?",
            choices: [
                "To enclose and protect wiring connections and devices",
                "To increase circuit voltage",
                "To eliminate grounding",
                "To replace circuit protection"
            ],
            answer: 0,
            explanation: "Electrical boxes provide an enclosure for wiring connections and electrical devices."
        },

        {
            category: "NEC & INSTALLATION",
            question: "Why are electrical connections properly secured inside an enclosure?",
            choices: [
                "To reduce the chance of accidental contact and unreliable connections",
                "To increase frequency",
                "To remove all resistance",
                "To eliminate the need for conductors"
            ],
            answer: 0,
            explanation: "Properly secured connections help prevent accidental contact, mechanical damage, and poor electrical connections."
        },

        {
            category: "GROUNDING & BONDING",
            question: "What is the general purpose of electrical bonding?",
            choices: [
                "Provide an electrically conductive path between metal parts as required",
                "Increase normal load voltage",
                "Reduce conductor size",
                "Eliminate circuit protection"
            ],
            answer: 0,
            explanation: "Bonding connects conductive parts together to establish the required conductive path."
        },

        {
            category: "GROUNDING & BONDING",
            question: "What is an important purpose of the equipment grounding path?",
            choices: [
                "Provide a path for fault current to help operate protective devices",
                "Carry normal load current continuously",
                "Increase equipment voltage",
                "Replace the neutral conductor"
            ],
            answer: 0,
            explanation: "The equipment grounding path helps provide a low-impedance path for fault current so protective devices can operate."
        },


        /* =================================================
           72–77 — AC CIRCUITS
        ================================================= */

        {
            category: "AC CIRCUITS",
            question: "What does AC stand for?",
            choices: [
                "Alternating Current",
                "Applied Current",
                "Automatic Conduction",
                "Ampere Circuit"
            ],
            answer: 0,
            explanation: "AC stands for Alternating Current."
        },

        {
            category: "AC CIRCUITS",
            question: "What does frequency describe in an AC waveform?",
            choices: [
                "Cycles per second",
                "Resistance per foot",
                "Voltage drop per amp",
                "Conductor diameter"
            ],
            answer: 0,
            explanation: "Frequency is the number of cycles completed per second and is measured in hertz."
        },

        {
            category: "AC CIRCUITS",
            question: "What unit is used to measure frequency?",
            choices: [
                "Ohm",
                "Ampere",
                "Hertz",
                "Watt"
            ],
            answer: 2,
            explanation: "Frequency is measured in hertz (Hz)."
        },

        {
            category: "AC CIRCUITS",
            question: "What does RMS commonly represent in AC measurements?",
            choices: [
                "An effective value related to the heating or power-producing capability",
                "Maximum conductor diameter",
                "Resistance of insulation",
                "Frequency only"
            ],
            answer: 0,
            explanation: "RMS is an effective AC value commonly used for voltage and current measurements."
        },

        {
            category: "AC CIRCUITS",
            question: "What is inductance?",
            choices: [
                "The property of a circuit that opposes changes in current",
                "The ability to measure voltage",
                "The physical length of a conductor",
                "The resistance of an insulator"
            ],
            answer: 0,
            explanation: "Inductance is the property of a circuit that opposes changes in current."
        },

        {
            category: "AC CIRCUITS",
            question: "What component is commonly associated with inductance?",
            choices: [
                "Coil",
                "Fuse",
                "Switch handle",
                "Receptacle cover"
            ],
            answer: 0,
            explanation: "A coil or winding produces inductance because of its magnetic field."
        },


        /* =================================================
           78–82 — RL CIRCUITS & VARS
        ================================================= */

        {
            category: "RL CIRCUITS",
            question: "What does an RL circuit contain?",
            choices: [
                "Resistance and inductance",
                "Only capacitance",
                "Only voltage",
                "Only switches"
            ],
            answer: 0,
            explanation: "An RL circuit contains resistance and inductance."
        },

        {
            category: "RL CIRCUITS",
            question: "What is inductive reactance?",
            choices: [
                "Opposition to AC current caused by inductance",
                "DC conductor size",
                "Normal voltage drop only",
                "The resistance of copper at zero temperature"
            ],
            answer: 0,
            explanation: "Inductive reactance is the opposition to AC current produced by inductance."
        },

        {
            category: "AC POWER",
            question: "What are VARs associated with?",
            choices: [
                "Reactive power",
                "Conductor diameter",
                "Temperature only",
                "Mechanical horsepower only"
            ],
            answer: 0,
            explanation: "VAR stands for volt-ampere reactive and is associated with reactive power."
        },

        {
            category: "AC POWER",
            question: "What type of power is measured in watts?",
            choices: [
                "Real power",
                "Reactive power",
                "Apparent power only",
                "Resistance"
            ],
            answer: 0,
            explanation: "Real power is measured in watts."
        },

        {
            category: "AC POWER",
            question: "What happens to inductive reactance when AC frequency increases, assuming inductance stays constant?",
            choices: [
                "It increases",
                "It decreases",
                "It becomes zero",
                "It becomes resistance only"
            ],
            answer: 0,
            explanation: "Inductive reactance increases as frequency increases when inductance remains constant."
        },


        /* =================================================
           83–88 — TRANSFORMERS
        ================================================= */

        {
            category: "TRANSFORMERS",
            question: "What does a transformer normally use to transfer electrical energy between its windings?",
            choices: [
                "Mechanical friction",
                "Electromagnetic induction",
                "Chemical reaction",
                "Static pressure"
            ],
            answer: 1,
            explanation: "Transformers transfer energy between windings through electromagnetic induction."
        },

        {
            category: "TRANSFORMERS",
            question: "What winding is connected to the source in a basic transformer?",
            choices: [
                "Primary winding",
                "Secondary winding",
                "Ground winding",
                "Control winding only"
            ],
            answer: 0,
            explanation: "The primary winding is connected to the source in a basic transformer."
        },

        {
            category: "TRANSFORMERS",
            question: "What winding normally supplies the transformed output to the load?",
            choices: [
                "Primary",
                "Secondary",
                "Grounding",
                "Shield only"
            ],
            answer: 1,
            explanation: "The secondary winding normally supplies the transformed output."
        },

        {
            category: "TRANSFORMERS",
            question: "What generally happens in a step-down transformer?",
            choices: [
                "Secondary voltage is lower than primary voltage",
                "Secondary voltage is always higher",
                "There is no magnetic field",
                "Frequency is automatically doubled"
            ],
            answer: 0,
            explanation: "A step-down transformer produces a lower secondary voltage than its primary voltage."
        },

        {
            category: "TRANSFORMERS",
            question: "What generally happens in a step-up transformer?",
            choices: [
                "Secondary voltage is higher than primary voltage",
                "Secondary voltage is always zero",
                "Resistance disappears",
                "Frequency becomes zero"
            ],
            answer: 0,
            explanation: "A step-up transformer produces a higher secondary voltage than its primary voltage."
        },

        {
            category: "TRANSFORMERS",
            question: "What determines the basic voltage relationship between transformer windings?",
            choices: [
                "Turns ratio",
                "Wire color only",
                "Box size",
                "Conduit length only"
            ],
            answer: 0,
            explanation: "The turns ratio between the primary and secondary windings determines the basic voltage relationship."
        },


        /* =================================================
           89–93 — MOTORS & ELECTRICAL MACHINES
        ================================================= */

        {
            category: "MOTORS",
            question: "What is the basic purpose of an electric motor?",
            choices: [
                "Convert electrical energy into mechanical energy",
                "Convert heat into resistance only",
                "Store electrical charge permanently",
                "Measure voltage"
            ],
            answer: 0,
            explanation: "An electric motor converts electrical energy into mechanical energy."
        },

        {
            category: "MOTORS",
            question: "What creates the rotating magnetic field in many AC motors?",
            choices: [
                "The interaction of magnetic fields produced by the windings",
                "A fuse opening",
                "A grounding conductor alone",
                "A resistor color code"
            ],
            answer: 0,
            explanation: "Motor windings create magnetic fields that interact to produce rotational motion."
        },

        {
            category: "MOTORS",
            question: "What is the purpose of motor overload protection?",
            choices: [
                "Protect the motor from damaging overload conditions",
                "Increase motor voltage",
                "Increase shaft size",
                "Eliminate the need for disconnects"
            ],
            answer: 0,
            explanation: "Overload protection helps protect motor windings from excessive current caused by overload conditions."
        },

        {
            category: "MOTORS",
            question: "What can happen if a motor is mechanically overloaded?",
            choices: [
                "Motor current can increase",
                "Current must become zero",
                "Voltage automatically disappears",
                "Frequency becomes negative"
            ],
            answer: 0,
            explanation: "A mechanical overload can cause a motor to draw increased current and overheat."
        },

        {
            category: "MOTORS",
            question: "Why is motor starting current often higher than running current?",
            choices: [
                "The motor requires significant current while establishing operating conditions",
                "The motor has infinite resistance while running",
                "The grounding conductor supplies all current",
                "The frequency becomes zero"
            ],
            answer: 0,
            explanation: "Motors can draw substantially higher current during starting than during normal operation."
        },


        /* =================================================
           94–97 — HEATING & ELECTRICAL EQUIPMENT
        ================================================= */

        {
            category: "HEATING",
            question: "What is the primary purpose of an electric resistance heater?",
            choices: [
                "Convert electrical energy into heat",
                "Convert heat into voltage",
                "Reduce conductor size",
                "Generate magnetic fields only"
            ],
            answer: 0,
            explanation: "Resistance heating converts electrical energy into heat."
        },

        {
            category: "HEATING",
            question: "Which electrical property is directly involved in producing heat in a resistive load?",
            choices: [
                "Resistance",
                "Frequency only",
                "Conductor color",
                "Grounding alone"
            ],
            answer: 0,
            explanation: "Electrical resistance causes energy to be dissipated as heat."
        },

        {
            category: "ELECTRICAL EQUIPMENT",
            question: "Why should electrical equipment be supplied with the voltage it is designed for?",
            choices: [
                "To operate safely and properly",
                "To eliminate all current",
                "To increase resistance indefinitely",
                "To bypass protective devices"
            ],
            answer: 0,
            explanation: "Equipment is designed to operate within specified electrical ratings."
        },

        {
            category: "ELECTRICAL EQUIPMENT",
            question: "Why must equipment conductors and circuit protection be properly matched to the installation?",
            choices: [
                "To help provide safe and reliable operation",
                "To eliminate all voltage drop",
                "To increase frequency",
                "To make every conductor the same size"
            ],
            answer: 0,
            explanation: "Proper conductor and overcurrent protection selection is essential for safe electrical installations."
        },


        /* =================================================
           98–100 — TROUBLESHOOTING & APPLIED KNOWLEDGE
        ================================================= */

        {
            category: "TROUBLESHOOTING",
            question: "A light does not operate. What is a logical first step when troubleshooting?",
            choices: [
                "Immediately replace every component",
                "Verify the problem and check for the presence of power safely",
                "Remove the grounding conductor",
                "Install a larger breaker"
            ],
            answer: 1,
            explanation: "A systematic troubleshooting process begins by verifying the symptom and safely determining whether power is present."
        },

        {
            category: "TROUBLESHOOTING",
            question: "A circuit breaker trips repeatedly when a load is turned on. What should be investigated?",
            choices: [
                "Possible overload or fault condition",
                "Whether the breaker should always be bypassed",
                "Whether the grounding conductor should be removed",
                "Whether voltage should be increased"
            ],
            answer: 0,
            explanation: "Repeated breaker operation can indicate an overload, short circuit, or another fault that requires investigation."
        },

        {
            category: "TROUBLESHOOTING",
            question: "A receptacle has no power while other receptacles on the circuit work. What is a useful troubleshooting approach?",
            choices: [
                "Trace the circuit and check connections and devices systematically",
                "Immediately replace the service panel",
                "Remove all grounding conductors",
                "Increase the circuit voltage"
            ],
            answer: 0,
            explanation: "Systematic troubleshooting involves tracing the circuit and checking likely points of failure such as connections and devices."
        }

    ];


    /* =====================================================
       STORAGE
    ===================================================== */

    const STORAGE_KEY = "wirelabTestingProgress";

    let progress = {
        completed: 0,
        correct: 0,
        answeredQuestions: []
    };


    /* =====================================================
       LOAD SAVED PROGRESS
    ===================================================== */

    function loadProgress() {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return;
        }

        try {

            const parsed = JSON.parse(saved);

            if (parsed && typeof parsed === "object") {

                progress = {

                    completed:
                        Number(parsed.completed) || 0,

                    correct:
                        Number(parsed.correct) || 0,

                    answeredQuestions:
                        Array.isArray(parsed.answeredQuestions)
                            ? parsed.answeredQuestions
                            : []

                };

            }

        } catch (error) {

            console.warn(
                "Could not load testing progress.",
                error
            );

        }

    }


    /* =====================================================
       SAVE PROGRESS
    ===================================================== */

    function saveProgress() {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(progress)
        );

    }


    /* =====================================================
       DOM
    ===================================================== */

    const testStart =
        document.querySelector("#testStart");

    const questionArea =
        document.querySelector("#questionArea");

    const testComplete =
        document.querySelector("#testComplete");

    const startTestButton =
        document.querySelector("#startTestButton");

    const continueTestButton =
        document.querySelector("#continueTestButton");

    const resetProgressButton =
        document.querySelector("#resetProgressButton");

    const questionNumber =
        document.querySelector("#questionNumber");

    const questionCategory =
        document.querySelector("#questionCategory");

    const progressBar =
        document.querySelector("#progressBar");

    const questionText =
        document.querySelector("#questionText");

    const answerChoices =
        document.querySelector("#answerChoices");

    const answerFeedback =
        document.querySelector("#answerFeedback");

    const nextQuestionButton =
        document.querySelector("#nextQuestionButton");

    const completedCount =
        document.querySelector("#completedCount");

    const correctCount =
        document.querySelector("#correctCount");

    const accuracyPercent =
        document.querySelector("#accuracyPercent");

    const finalScore =
        document.querySelector("#finalScore");


    /* =====================================================
       CURRENT QUESTION
    ===================================================== */

    let currentQuestionIndex = null;
    let currentQuestion = null;


    /* =====================================================
       UPDATE PROGRESS DISPLAY
    ===================================================== */

    function updateProgressDisplay() {

        completedCount.textContent =
            progress.completed;

        correctCount.textContent =
            progress.correct;

        const accuracy =
            progress.completed > 0
                ? Math.round(
                    (
                        progress.correct /
                        progress.completed
                    ) * 100
                )
                : 0;

        accuracyPercent.textContent =
            `${accuracy}%`;

    }


    /* =====================================================
       GET NEXT RANDOM QUESTION
    ===================================================== */

    function getNextQuestion() {

        const unanswered =
            testQuestions.filter(
                (_, index) =>
                    !progress.answeredQuestions.includes(index)
            );

        if (unanswered.length === 0) {
            return null;
        }

        const randomIndex =
            Math.floor(
                Math.random() *
                unanswered.length
            );

        return testQuestions.indexOf(
            unanswered[randomIndex]
        );

    }


    /* =====================================================
       SHOW QUESTION
    ===================================================== */

    function showQuestion() {

        const nextIndex =
            getNextQuestion();

        if (nextIndex === null) {

            showComplete();

            return;

        }

        currentQuestionIndex =
            nextIndex;

        currentQuestion =
            testQuestions[
                currentQuestionIndex
            ];


        testStart.hidden =
            true;

        testComplete.hidden =
            true;

        questionArea.hidden =
            false;


        questionNumber.textContent =
            `QUESTION ${progress.completed + 1} OF ${testQuestions.length}`;


        questionCategory.textContent =
            currentQuestion.category;


        questionText.textContent =
            currentQuestion.question;


        answerChoices.innerHTML =
            "";


        answerFeedback.textContent =
            "";


        nextQuestionButton.hidden =
            true;


        const progressPercent =
            (
                progress.completed /
                testQuestions.length
            ) * 100;


        progressBar.style.width =
            `${Math.min(progressPercent, 100)}%`;


        /* =================================================
           ANSWER BUTTONS
        ================================================= */

        currentQuestion.choices.forEach(
            (choice, index) => {

                const button =
                    document.createElement("button");

                button.type =
                    "button";

                button.className =
                    "answer-choice";

                button.textContent =
                    choice;

                button.addEventListener(
                    "click",
                    () => {

                        checkAnswer(
                            index,
                            button
                        );

                    }
                );

                answerChoices.appendChild(
                    button
                );

            }
        );

    }


    /* =====================================================
       CHECK ANSWER
    ===================================================== */

    function checkAnswer(
        selectedIndex,
        selectedButton
    ) {

        const buttons =
            answerChoices.querySelectorAll(
                ".answer-choice"
            );


        buttons.forEach(
            button => {

                button.disabled =
                    true;

            }
        );


        const isCorrect =
            selectedIndex ===
            currentQuestion.answer;


        if (isCorrect) {

            selectedButton.classList.add(
                "correct"
            );

            answerFeedback.innerHTML =
                `
                <strong>CORRECT!</strong>
                <br>
                ${currentQuestion.explanation}
                `;

            progress.correct++;

        } else {

            selectedButton.classList.add(
                "incorrect"
            );

            buttons[
                currentQuestion.answer
            ].classList.add(
                "correct"
            );

            answerFeedback.innerHTML =
                `
                <strong>NOT QUITE.</strong>
                <br>
                ${currentQuestion.explanation}
                `;

        }


        progress.completed++;


        progress.answeredQuestions.push(
            currentQuestionIndex
        );


        saveProgress();

        updateProgressDisplay();


        const updatedProgressPercent =
            (
                progress.completed /
                testQuestions.length
            ) * 100;


        progressBar.style.width =
            `${Math.min(updatedProgressPercent, 100)}%`;


        nextQuestionButton.hidden =
            false;

    }


    /* =====================================================
       COMPLETE TEST
    ===================================================== */

    function showComplete() {

        questionArea.hidden =
            true;

        testStart.hidden =
            true;

        testComplete.hidden =
            false;


        const accuracy =
            progress.completed > 0
                ? Math.round(
                    (
                        progress.correct /
                        progress.completed
                    ) * 100
                )
                : 0;


        finalScore.innerHTML =
            `
            <strong>TEST COMPLETE</strong>
            <br><br>
            ${progress.correct} correct out of ${progress.completed}
            <br>
            Accuracy: ${accuracy}%
            <br><br>
            You have completed all ${testQuestions.length} questions in this test bank.
            `;

    }


    /* =====================================================
       START TEST
    ===================================================== */

    startTestButton.addEventListener(
        "click",
        () => {

            showQuestion();

        }
    );


    /* =====================================================
       CONTINUE TEST
    ===================================================== */

    continueTestButton.addEventListener(
        "click",
        () => {

            showQuestion();

        }
    );


    /* =====================================================
       NEXT QUESTION
    ===================================================== */

    nextQuestionButton.addEventListener(
        "click",
        () => {

            showQuestion();

        }
    );


    /* =====================================================
       RESET PROGRESS
    ===================================================== */

    resetProgressButton.addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "Reset all WireLab testing progress?"
                );


            if (!confirmed) {
                return;
            }


            progress = {

                completed: 0,

                correct: 0,

                answeredQuestions: []

            };


            saveProgress();

            updateProgressDisplay();


            progressBar.style.width =
                "0%";


            questionArea.hidden =
                true;

            testComplete.hidden =
                true;

            testStart.hidden =
                false;

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    loadProgress();

    updateProgressDisplay();


    const initialProgressPercent =
        (
            progress.completed /
            testQuestions.length
        ) * 100;


    progressBar.style.width =
        `${Math.min(initialProgressPercent, 100)}%`;


    if (
        progress.answeredQuestions.length >=
        testQuestions.length
    ) {

        showComplete();

    }

});