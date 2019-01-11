import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false

const config = {
    apiKey: "AIzaSyCNpteFz_n_YmH7v4l6-1MY91DE9yJPC0M",
    authDomain: "linebot-ironcat.firebaseapp.com",
    databaseURL: "https://linebot-ironcat.firebaseio.com",
    projectId: "linebot-ironcat",
    storageBucket: "linebot-ironcat.appspot.com",
    messagingSenderId: "865864555674"
};
firebase.initializeApp(config);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')