/**
 * Updates the user's XP based on the XP earned from a correct answer.
 * @param {number} currentXP - The user's current XP.
 * @param {number} earnedXP - The XP to add for the correct answer.
 * @returns {number} The updated XP total.
 */
function counterXP(currentXP, earnedXP) {
    return currentXP + earnedXP;
}

export default counterXP;