import AbilityEvent from "./AbilityEvent.js"

export default class TimedAbilityEvent extends AbilityEvent {
    constructor(id, type, user, target, startTime, isActive = true, secondsLeft) {
        super(id, type, user, target, startTime, isActive);
        this.secondsLeft = secondsLeft;
    }

    startCountdown() {
        //setInterval something
    }

    pauseCountdown() {

    }
}