import TimedAbilityEvent from "../TimedAbilityEvent.js"
import EventTypes from "../../../EventTypes.js"

export default class Silence extends TimedAbilityEvent {
    constructor(id, user, target, startTime, topic = "No topic added", isActive = true,  secondsLeft = 900,) {
        super(id, EventTypes.silence, user, target, startTime, isActive, secondsLeft);
        this.topic = topic;
    }

    resolve(/*event*/) {
        
    }
    

}