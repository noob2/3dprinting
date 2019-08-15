import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = false
firebase.initializeApp({
  apiKey: 'AIzaSyAmkdm4dRnwFBX5YGEG7SWkqYzqgtbmQus',
  authDomain: 'viksataprinti.firebaseapp.com',
  databaseURL: 'https://viksataprinti.firebaseio.com',
  projectId: 'viksataprinti',
  storageBucket: '',
  messagingSenderId: '1073711848596',
  appId: '1:1073711848596:web:1b692e96748793fb'
})

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = true
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
