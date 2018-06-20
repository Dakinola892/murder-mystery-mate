import TimedAbilityEvent from "../TimedAbilityEvent.js"
import EventTypes from "../../../EventTypes.js"

export default class Kill extends TimedAbilityEvent {
    constructor(id, user, target, startTime, isActive = true, secondsLeft, outcome = {}) {
        super(id, EventTypes.kill, user, target, startTime, isActive, secondsLeft);
        this.outcome = outcome;
    }

    resolve(/*event*/) {
        
    }
    

}