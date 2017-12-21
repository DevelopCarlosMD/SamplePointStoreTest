<template>
	<div class="sign-up">
		<p>Let's create a new account!</p>
		<input type="text" v-model="email" placeholder="Email"><br>
		<input type="password" v-model="password" placeholder="Password"><br>
		<button v-on:click="signUp"> Sign Up </button>
		<span> or go back to <router-link to="/login">login</router-link>.</span>
	</div>
</template>

<script>
	import firebase from 'firebase'
	
	export default {
	  name: 'signUp',
	  data: function () {
	    return {
	      email: '',
	      password: ''
	    }
	  },
	  methods: {
	    signUp: function () {
	      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
	      function (user) {
	        alert('Your account has been created!')
	      },
	      function (err) {
	        alert('Ooops. ' + err.message)
	      })
	    }
	  }
	}
</script>

<style scoped>
 .signUp {
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
 span {
   display: block;
   margin-top: 20px;
   font-size: 16px;
 }
</style>