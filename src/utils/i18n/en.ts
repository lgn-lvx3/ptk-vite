const en = {
    disclaimer: {
        text: "This tool should NOT be considered as a substitute for any professional medical service, NOR as a substitute for clinical judgment.",
        understand: "I understand",
    },

    download: "Download",
    share: "Share",
    UDI6: {
        title: "UDI-6",
        subtitle: "Urogenital Distress Inventory",
        instructions: [
            "For each question, circle the number that best describes this problem for you over the past month:",
        ],
        prompts: [
            "Frequent urination?",
            "Urine leakage related to the feeling of urgency?",
            "Urine leakage related to physical activity, coughing or sneezing?",
            "Small amounts of urine leakage (that is drops)?",
            "Difficulty emptying your bladder?",
            "Pain or discomfort in the lower abdominal or genital area?",
        ],
        options: ["Not at all", "A little bit", "Moderately", "Greatly"],
        interpretation: {
            title: "Interpretation",
            content: [
                "The scale is from 0-100. The higher the score, the greater the impairment/disability.",
            ],
        },
        scoring: {
            title: "Scoring",
            content: [
                "Each item is scored between 0 (no problem) to 3 (bothered greatly).",
                "All scores are summed and multiplied by 6, then multiplied by 25 for the scale score.",
            ],
        },
        mcid: {
            title: "Minimum Important Difference (MID)",
            content: [
                "Reasonable estimates for MID is an -11 point change.",
                "Anchor-based MID ranged from -22.4 to -6.4 in the study assessing MID Barber, M. D., Spino, C., Janz, N. K., Brubaker, L., Nygaard, I., Nager, C. W., & Wheeler, T. L. (2009).",
            ],
        },
        references: {
            title: "References",
            content: [
                "Uebersax JS, Wyman JF, Shumaker SA, McClish DK, Fantl JA, Continence Program for Women Research Group. Short Forms to Assess Life Quality and Symptom Distress for Urinary Incontinence in Women: The Incontinence Impact Questionnaire and the Urogenital Distress Inventory. Neurourology and Urodynamics. 1995;14: 131-39.",
                "The minimum important differences for the urinary scales of the pelvic floor distress inventory and Pelvic Floor Impact Questionnaire. American Journal of Obstetrics and Gynecology, 200(5). https://doi.org/10.1016/j.ajog.2009.02.007",
            ],
        },
    },
}
export default en
export type Translations = typeof en
