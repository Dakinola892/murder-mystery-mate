import ConfirmationAbilityEvent from "../ConfirmationAbilityEvent.js"
import EventTypes from "../../../EventTypes.js"

export default class Steal extends ConfirmationAbilityEvent {
    constructor(id, user, targetPlayer, requestTime, isActive = true, confirmationTime, goal) {
        super(id, EventTypes.steal, user, targetPlayer, requestTime, isActive, confirmationTime);
        this.goal = goal;
    }

    confirm(success) {
        //add to character inventory
        //note in item log
        super.confirm(success);
    }
}