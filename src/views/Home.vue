<template>
  <v-layout>
    <p>
      това е на викасата сайта. ако искате нещо за принтиране направете поръчка
    </p>
    <v-btn v-if="this.$store.getters.getIsLogged" @click="logout">Logout</v-btn>
  </v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({}),
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(res => {
          this.$router.replace('/')
        })
    }
  }
}
</script>
