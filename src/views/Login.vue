<template>
  <v-card>
    <v-card-title>
      <span class="headline">Login</span>
    </v-card-title>
    <v-card-text>
      <v-flex>
        <v-text-field
          v-model="email"
          :rules="[emailRules.required, emailRules.email]"
          label="E-mail"
          append-icon="fa-envelope"
          outlined
          solo
        ></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field
          :append-icon="show1 ? 'fa-eye' : 'fa-eye-slash'"
          v-model="password"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="show1 ? 'text' : 'password'"
          label="password"
          hint="At least 4 characters"
          counter
          @click:append="show1 = !show1"
          outlined
          solo
        ></v-text-field>
      </v-flex>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="logIn">Login</v-btn>
      <v-btn color="blue darken-1" text to="/register">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import firebase from 'firebase'
export default {
  data: () => ({
    email: '',
    password: '',
    show1: false,
    emailRules: {
      required: value => !!value || 'Required.',
      counter: value => value.length <= 20 || 'Max 20 characters',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    },
    passwordRules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 4 || 'Min 4 characters',
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  methods: {
    logIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('/createOrder')
          },
          err => {
            alert(err)
          }
        )
    }
  }
}
</script>
