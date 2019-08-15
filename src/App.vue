<template>
  <v-layout>
    <v-flex sm2>
      <v-card color="indigo darken-2" flat>
        <v-card elevation="12" width="256">
          <v-navigation-drawer floating>
            <v-list dense rounded>
              <v-list-item
                v-for="item in navMenu"
                :key="item.title"
                :to="item.to"
                @click="logout(item.action)"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-card>
    </v-flex>
    <v-flex sm10>
      <router-view class="container" />
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getIsLogged']),
    navMenu: function() {
      let that = this
      return this.items.filter(function(element) {
        if (!element.loginNeeded) {
          return true
        } else if (element.loginNeeded && that.$store.getters.getIsLogged) {
          return true
        } else {
          return false
        }
      })
    }
  },
  data: () => ({
    items: [
      { title: 'Начало', icon: 'fa-home', to: '/' },
      { title: 'Създай Поръчка', icon: 'fa-plus-circle', to: '/createOrder' },
      { title: 'Галерия', icon: 'fa-photo-video', to: '/gallery' },
      { title: 'За мен', icon: 'fa-user-astronaut', to: '/about' },
      {
        title: 'logout',
        icon: 'fa-user-lock',
        loginNeeded: true,
        action: 'logout'
      }
    ]
  }),
  methods: {
    logout: function(action) {
      if (action == 'logout') {
        firebase
          .auth()
          .signOut()
          .then(res => {
            this.$router.replace('/')
          })
      }
    }
  }
}
</script>
