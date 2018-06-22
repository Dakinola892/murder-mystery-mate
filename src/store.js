import Vue from 'vue'
import Vuex from 'vuex'
import Character from './models/Character'
// import Event from './models/events/Event'

Vue.use(Vuex)

const testCharacters = [];
testCharacters.push(new Character(0, "Annie Adams"));
testCharacters.push(new Character(1, "Barry Bonds"));
testCharacters.push(new Character(2, "Carrie Cross"));
testCharacters.push(new Character(3, "Darren Dart"));
testCharacters.push(new Character(4, "Emily Ericson"));
testCharacters.push(new Character(5, "Fred Farnsworth"));

const Mystery = new Vuex.Store({
  state: {
    title: "Test Mystery",
    currentTime: new Date(),
    characters: testCharacters,
    events: [],
    currentPage: 0
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
    }
  }
});



export default Mystery;
