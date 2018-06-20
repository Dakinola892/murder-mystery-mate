import AbilityEvent from "./AbilityEvent.js"

export default class ConfirmationAbilityEvent extends AbilityEvent {
    constructor(id, type, user, target, startTime, isActive = true, confirmationTime = {}) {
        super(id, type, user, target, startTime, isActive);
        this.confirmationTime = confirmationTime;
    }

    confirm(success) {
        this.isActive = false;
        Object.defineProperty(this, "isSuccessful", success)
        //this.confirmationTime = Mystery.getCurrentTime();
    }
}