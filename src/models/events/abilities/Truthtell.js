import ConfirmationAbilityEvent from "../ConfirmationAbilityEvent.js"
import EventTypes from "../../../EventTypes.js"

export default class Truthtell extends ConfirmationAbilityEvent {
    constructor(id, user, target, requestTime, isActive = true, confirmationTime,
         question = "", answer = "") {
        super(id, EventTypes.truthtell, user, target, requestTime, isActive, confirmationTime);
        this.coerceTargetAbility = question;
        this.abilityTargetPlayer = answer;
    }

    confirm(success = true, question, answer) {
        this.question = question;
        this.answer = answer;
        super.confirm(success);
    }
}