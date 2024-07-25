<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <label for="email">Email:</label>
          <input type="text" v-model="email" id="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>

  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'

  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const router = useRouter();
      const register = () => {
        axios.post('http://localhost:8080/signup', {
          username: "Archana",
          email: email.value,
          password: password.value,
        }).then(response => {
          alert('Registration successful!');
          router.push('/login');
          console.log(JSON.stringify(response));
          //document.cookie = "yummy_cookie=choco";
        }).catch(error => {
          alert('Error during registration: ' + error);
        });
      };

      return {
        email,
        password,
        register
      };
    },
  };
  </script>