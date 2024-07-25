<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
        <div>
            <label for="email">email:</label>
            <input type="text" v-model="email" id="email" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit">Login</button>
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
    const router = useRouter()
    
    const login = () => {
    axios.post('http://localhost:8080/login', {
        email: email.value,
        password: password.value,
    }).then(response => {
        alert('Login successful!');
        if (response && response.data) {
            localStorage.setItem("authToken", response.data.token);
        }
        router.push('/content');
    }).catch(error => {
        alert('Error during login: ' + error);
    });
    };

    return {
    email,
    password,
    login,
    };
},
};
</script>