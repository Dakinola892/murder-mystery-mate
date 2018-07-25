import Vue from 'vue';
import Vuex from 'vuex';
import Character from './models/Character';
import Event from './models/events/Event';
import Item from './models/Item'
import { isEmpty } from "lodash";
import abilities from "./abilities";

import Kill from "./models/events/abilities/Kill";
import Save from "./models/events/abilities/Save";
import Protect from "./models/events/abilities/Protect";
import Silence from "./models/events/abilities/Silence";
import Steal from "./models/events/abilities/Steal";
import Truthtell from "./models/events/abilities/Truthtell";
import Coerce from "./models/events/abilities/Coerce";
import Message from "./models/events/abilities/Message";

Vue.use(Vuex);

const Mystery = new Vuex.Store({    
    state: {
        title: "Test Mystery",
        currentTime: new Date(),
        currentPage: 1,
        newEvent: false,
        selectedEvent: 1,
        characters: [
            new Character(0, "Annie Adams"),
            new Character(1, "Barry Bonds"),
            new Character(2, "Carrie Cross"),
            new Character(3, "Darren Dart"),
            new Character(4, "Emily Ericson"),
            new Character(5, "Fred Farnsworth")
        ],
        events: [
            
        ],
        abilities: abilities, 
        items: [
            new Item(0, "Ruby Necklace", "Annie Adams"),
            new Item(1, "Secret Document", "Barry Bonds"),
            new Item(2, "Skeleton Key", "Carrie Cross"),
            new Item(3, "Picture of Mysterious Girl", "Darren Dart"),
            new Item(4, "Poison Vial", "Emily Ericson"),
            new Item(5, "Antidote", "Fred Farnsworth")
        ]
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        }, 
        addNewEvent(state, newEvent) {
            state.events.push(newEvent);
            state.newEvent = false;
        },
        createNewEvent(state) {
            state.newEvent = true;
        }
    },
    actions: {
        createNewEvent({ commit }) {
            commit('createNewEvent');
        },
        addKill({ commit, getters }, { user, target }) {
            let kill = new Kill(getters.newId, user, target, getters.currentTime);
            const targetProtected = !isEmpty(target.protects);
            if (targetProtected) {
                let protect = target.protects[0];
                kill.outcome = protect;
                protect.blockedKills.push(kill);
                kill.resolve;
            }
            target.kills.push(kill);
            commit('addNewEvent', kill);
        },
        addSave({ commit, getters }, { user, target }) {
            let kill = target.kills.shift();
            let save = new Save(getters.newId, user, target, getters.currentTime, kill);
            save.kill.outcome = save;
            commit('addNewEvent', save);
        },
        addProtect({ commit, getters }, { user, target }) {
            let protect = new Protect(getters.newId, user, target, getters.currentTime);
            target.protects.push(protect);
            commit('addNewEvent', protect);
        },
        addSilence({ commit, getters }, { user, target, topic }) {
            let silence = new Silence(getters.newId, user, target, getters.currentTime, topic);
            target.silences.push(silence);
            commit('addNewEvent', silence);
        },
        addSteal({ commit, getters }, { user, target, targetItemOrAbility, immediateConfirm, isSuccessful }) {
            let steal = new Steal(getters.newId, user, target, getters.currentTime, targetItemOrAbility);
            if (immediateConfirm) {
                steal.confirmationTime = getters.currentTime;
                steal.isActive = false;
                steal.isSuccessful = isSuccessful;
                if (isSuccessful && steal.targetItemOrAbility instanceof Item) {
                    const stolenItemIndex = target.items.findIndex(item => item.id === steal.targetItemOrAbility.id);
                    const StolenItem = target.items.splice(stolenItemIndex, 1)[0];
                    user.items.push(StolenItem);
                    //add in logic w/ item log
                }
            }
            commit('addNewEvent', steal);
        },
        addCoerce({ commit, getters }, { user, target, targetAbility, immediateConfirm, isSuccessful, secondaryTarget }) {
            let coerce = new Coerce(getters.newId, user, target, targetAbility, secondaryTarget, getters.currentTime);
            if (immediateConfirm) {
                coerce.confirmationTime = getters.currentTime;
                coerce.isActive = false;
                coerce.isSuccessful = isSuccessful;
                if (isSuccessful) {
                    //open modal to use secondary ability?
                }
            }
            commit('addNewEvent', coerce);
        }, 
        addTruthtell({ commit, getters }, { user, target, immediateConfirm, question, answer }) {
            let truthtell = new Truthtell(getters.newId, user, target, getters.currentTime);
            if (immediateConfirm) {
                truthtell.confirmationTime = getters.currentTime;
                truthtell.isActive = false;
                truthtell.question = question;
                truthtell.answer = answer;
            }
            commit('addNewEvent', truthtell);
        }, 
        addMessage({ commit, getters }, { user, message, immediateConfirm, target = "all Players" }) {
            let messageOrAnnouncement = new Message(getters.newId, user, getters.currentTime, target);
            if (immediateConfirm) {
                messageOrAnnouncement.confirmationTime = getters.currentTime;
                messageOrAnnouncement.isActive = false;
                messageOrAnnouncement.message = message;
            }
            commit('addNewEvent', messageOrAnnouncement)
        }
    },
    getters: {
        currentTime(state) {
            return state.currentTime.toLocaleTimeString('en-GB');
        },
        characterNames(state) {
            return state.characters.map(character => character.name);
        },
        newId(state) {
            return state.events.length || 0;
        },
        timelineEvents(state) {
            return state.events.reverse();
        },
        dropdownItems(state) {
            return state.items.map(item => ({
                text: item.name,
                value: item.id
            }));
        },
        dropdownCharacters(state) {
            return state.characters.map(character => ({
                text: character.name,
                value: character.id
            }));
        }, 
        dropdownAbilities(state) {
            return state.abilities.map(ability => ({
                text: ability.name,
                value: ability.type
            }));
        },
        abilityNames(state) {
            return state.abilities.map(ability => ability.text);
        }
    }
});

export default Mystery;
