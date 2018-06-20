import ConfirmationAbilityEvent from "../ConfirmationAbilityEvent.js"
import EventTypes from "../../../EventTypes.js"

export default class Coerce extends ConfirmationAbilityEvent {
    constructor(id, user, coerceTargetPlayer, requestTime, isActive = true, confirmationTime,
         coerceTargetAbility, abilityTargetPlayer) {
        super(id, EventTypes.coerce, user, coerceTargetPlayer, requestTime, isActive, confirmationTime);
        this.coerceTargetAbility = coerceTargetAbility;
        this.abilityTargetPlayer = abilityTargetPlayer;
    }

    confirm(success) {
        //case for each possible ability
        super.confirm(success);
    }
}