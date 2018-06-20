import Event from './Event.js'

export default class AbilityEvent extends Event {
    constructor(id, type, user, target, startTime, isActive = true) {
        super(id, type);
        this.user = user;
        this.target = target;
        this.startTime = startTime;
        this.isActive = isActive;
    } 
}