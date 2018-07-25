import AbilityEvent from "../AbilityEvent"
import EventTypes from "../../../EventTypes"

export default class Save extends AbilityEvent {
    constructor(id, user, target, time, kill = {}, isActive = false) {
        super(id, EventTypes.save, user, target, time, isActive);
        this.kill = kill;
    }
    

}