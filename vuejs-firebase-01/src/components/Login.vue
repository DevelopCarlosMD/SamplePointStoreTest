<template>
	<div class="login">
		<input type="text" v-model="email" placeholder="Email"><br>
		<input type="password" v-model="password" placeholder="Password"><br>
		<button v-on:click="signIn"> Connection </button>
		<p> You don't have an account ? You can <router-link to="/sign-up"> create one </router-link></p>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          // this.$router.replace('main-menu')
          alert('Well done! You are now connected')

        },
        function (err) {
          alert('Ooops. ' + err.message)
        })
    }
  }
}
</script>

<style scoped>
 .login {
   margin-top: 40px;   
 }
 input {
   margin: 10px 0;
   width: 28%;
   padding: 8px;
 }
 button {
   margin-top: 20px;
   width: 10%;
   padding: 4px;
   cursor: pointer;
   background-color: #1FBBA6;
   color: #ffffff!important;
 }
 p {
   margin-top: 40px;
   font-size: 16px;
 }
 p a {
   text-decoration: underline;
   cursor: pointer;   
 }
</style>