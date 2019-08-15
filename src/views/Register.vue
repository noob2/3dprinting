<template>
  <v-flex>
    <h3>register</h3>
    <v-text-field v-model="email" label="email"></v-text-field>
    <v-flex xs12 sm6>
      <v-text-field
        v-model="password"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
    </v-flex>
    <v-btn @click="signUp">register</v-btn>
    <v-btn to="/login">login</v-btn>
  </v-flex>
</template>
<script>
import firebase from 'firebase'
export default {
  data: () => ({
    email: '',
    password: '',
    show1: false,
    icon: 'fa-user-secret',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('/')
          },
          err => {
            alert(err)
          }
        )
    }
  }
}
</script>
