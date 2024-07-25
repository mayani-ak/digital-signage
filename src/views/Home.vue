<template>
    <div>
        <h1>Welcome to the Digital Signage System</h1>
        <nav>
            <router-link to="/register">Register</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/content" v-if="showContent"> Content</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        computed: {
            showContent() {
                return localStorage.getItem('authToken') ? true : false;
            }
        }
    };
</script>