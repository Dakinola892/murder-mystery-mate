import Event from "./Event"
import EventTypes from "../../EventTypes"

export default class Death extends Event {
    constructor(id, murderer, victim, kill, accomplices = []) {
        super(id, EventTypes.death);
        this.murderer = murderer;
        this.victim = victim;
        this.kill = kill;
        this.accomplices = accomplices;
    }
}