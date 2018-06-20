import AbilityEvent from "../AbilityEvent.js"
import EventTypes from "../../../EventTypes.js"

export default class Save extends AbilityEvent {
    constructor(id, user, target, startTime, isActive = true, kill) {
        super(id, EventTypes.save, user, target, startTime, isActive);
        this.kill = kill;
    }
    

}