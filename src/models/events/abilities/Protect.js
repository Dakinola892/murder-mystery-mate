import TimedAbilityEvent from "../TimedAbilityEvent.js"
import EventTypes from "../../../EventTypes.js"

export default class Protect extends TimedAbilityEvent {
    constructor(id, user, target, startTime, isActive = true, secondsLeft, blockedKills = []) {
        super(id, EventTypes.protect, user, target, startTime, isActive, secondsLeft);
        this.blockedKills = blockedKills;
    }

    resolve(/*event*/) {
        
    }
    

}