import EventTypes from "./EventTypes.js";

const abilities = [
    {
        name: "Kill", 
        type: EventTypes.kill, 
        description: "When a Player places a <strong>Kill</strong> on another player, the targeted player will be <i>dying</i> for the next 15 minutes. If the kill is not stopped by a Save or other ability, after 15 minutes, the player will have one final chance to be saved. If no-one saves them, the targeted player will <i>Die</i> and no longer be an active character in the mystery. A player can place multiple kills at once, and a target only needs to have one active kill on them to die.  Note, if a kill is placed on a target which is <i>protected</i>, the kill will be <i>blocked</i> and the target won't be affected.",
        icon: require("./assets/noun_733622_cc.svg")
    },
    {
        name: "Save", 
        type: EventTypes.save,
        description: "<strong>Save</strong> can be used on a player who is <i>dying</i> at least once. Using a save nullifies one kill on the target player.",
        icon: require("./assets/noun_1436968_cc.svg")
    },
    {
        name: "Protect",
        type: EventTypes.protect,
        description: "Using <strong>Protect</strong> on a player, <i>protects</i> from any kills placed on them for 15 minutes. Any kills placed on them are <i>blocked</i> and their affects are nullified. The <i>protected</i> player is not notified about if a protect is on them, nor any <i>blocked</i> kill attempts made on them. Players attempting to <strong>Kill</strong> a <i>protected</i> player will be notified that their kills failed.",
        icon: require("./assets/noun_904417_cc.svg")
    },
    {
        name: "Silence",
        type: EventTypes.silence,
        description: "Using <strong>Silence</strong> on a player, prohibits them from talking about a specific <i>topic</i> for 15 minutes. The target of the silence will be alerted when the silence starts, ends and the prohibited <i>topic</i>.",
        icon: require("./assets/noun_1476127_cc.svg")
    },
    {
        name: "Steal",
        type: EventTypes.steal,
        description: "Players request a <strong>Steal</strong> on another player and state the item/ability they are attempting to steal, the host will then return to them with the result. If <i>successful</i>, the target item/ability is added to the user of <strong>Steal</strong>. If <i>unsuccessful</i>, they have one more attempt to steal something from a player. After the second attempt, regardless of the outcome, the <strong>Steal</strong> is used up.",
        icon: require("./assets/noun_1368_cc.svg")
    },
    {
        name: "Coerce",
        type: EventTypes.coerce,
        description: "Players request a <strong>Coerce</strong> on another player, stating the ability they want the target of the <strong>Coerce</strong> to use, and the player for them to use it on. The host will then return to them with the result. If <i>successful</i>, the target ability will be used by the target of the coerce on a specified player. If <i>unsuccessful</i>, they have one more attempt to <strong>Coerce</strong>. After the second attempt, regardless of the outcome, the <strong>Coerce</strong> is used up.",
        icon: require("./assets/noun_1160993_cc.svg")
    },
    {
        name: "Truthtell",
        type: EventTypes.truthtell,
        description: "The user of <strong>Truthtell</strong> can ask the player can ask one question to a player of their choice, supervised by a host. The target of the <strong>Truthell</strong> must deliver an objectively truthful answer. The host can ask the target to give a clearer or more truthful answer if they believe the answer given is inadequate or objectively false.",
        icon: require("./assets/noun_15280.svg")
    },
    {
        name: "Message",
        type: EventTypes.message,
        description: "A player requests a <strong>Secret Message</strong> to be sent to a specified player. The message is delivered privately to target, and they are not informed of who sent the message.",
        icon: require("./assets/noun_1788527_cc.svg")
    },
    {
        name: "Announcement",
        type: EventTypes.announcement,
        description: "A player requests an <strong>Anonymous Announcement</strong> to be made to all players. An announcement is delievered by a host on behalf of the player, and the source of the annoncement is said to originate from an anonymous alias.",
        icon: require("./assets/noun_144092_cc.svg")
    },
]

export default abilities;