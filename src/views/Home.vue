<template>
    <div>
        <h1>Welcome to the Digital Signage System</h1>
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/content">Content</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    };
</script>