import Vue from 'vue';
import Vuex from 'vuex';
import Character from './models/Character';
import Event from './models/events/Event';
import Item from './models/Item'

Vue.use(Vuex);

const Mystery = new Vuex.Store({    
    state: {
        title: "Test Mystery",
        currentTime: new Date(),
        currentPage: 1,
        characters: [
            new Character(0, "Annie Adams"),
            new Character(1, "Barry Bonds"),
            new Character(2, "Carrie Cross"),
            new Character(3, "Darren Dart"),
            new Character(4, "Emily Ericson"),
            new Character(5, "Fred Farnsworth")
        ],
        events: [],
        abilities: [
            "Kill",
            "Save",
            "Protect",
            "Silence",
            "Steal",
            "Coerce",
            "Truthtell",
            "Message",
            "Announcement"
        ], 
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
        }
    },
    actions: {

    },
    getters: {
        currentTime(state) {
            return state.currentTime.toLocaleTimeString('en-GB');
        },
        characterNames(state) {
            return state.characters.map(character => character.name);
        }
    }
});

export default Mystery;
