<template>
    <div>
        <h2>Content</h2>
        <div v-if="content">
            <p>{{ content }}</p> 
            <!-- Ideally, response data needs to be parsed and assign to various DOM elements in order to display the formatted content -->
        </div>
        <div v-else>
            <p>"To err is human; to blame it on the software is even more human!"</p>
        </div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const content = ref(null);

onMounted(() => {
    axios.get('http://localhost:8080/restricted/content', {
        headers: {
            "Authorization": 'Bearer ' + localStorage.getItem("authToken")
        }
    }).then(response => {
        content.value = response.data;
    }).catch(error => {
        alert('Error fetching content: ' + error);
    });
});

</script>