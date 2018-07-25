import ConfirmationAbilityEvent from "../ConfirmationAbilityEvent.js"
import EventTypes from "../../../EventTypes.js"

export default class Message extends ConfirmationAbilityEvent {
    constructor(id, user, requestTime, target = "all Players", isActive = true, confirmationTime = "", message = "") {
        const type = target === "all Players" ? EventTypes.announcement : EventTypes.message;
        super(id, type, user, target, requestTime, isActive, confirmationTime);
        this.message = message;
    }

    confirm(success) {
        super.confirm(success);
    }
}