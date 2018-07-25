import TimedAbilityEvent from "../TimedAbilityEvent.js"
import EventTypes from "../../../EventTypes.js"

export default class Kill extends TimedAbilityEvent {
    constructor(id, user, target, startTime, isActive = true, secondsLeft = 900, outcome = {}, accomplices = []) {
        super(id, EventTypes.kill, user, target, startTime, isActive, secondsLeft);
        this.outcome = outcome;
        this.accomplices = accomplices;
    }

    resolve(/*event*/) {
        this.isActive = false;
        this.secondsLeft = 900;
    }
    

}