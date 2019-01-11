import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mainAccount: '',
        mainUid: ''
    },
    mutations: {
        UserLogin(state, user) {
            state.mainAccount = user.email;
            state.mainUid = user.uid;
        }
    },
    actions: {

    }
})