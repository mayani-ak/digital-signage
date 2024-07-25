<template>
    <div>
        <h2>Content</h2>
        <div v-if="content">
            <pre>{{ content }}</pre> 
            <!-- Ideally, response data needs to be parsed and assign to various DOM elements in order to display the formatted content -->
        </div>
        <div v-else>
            <p>"To err is human; to blame it on the software is even more human!"</p>
        </div>
        <div>
            <button @click="refreshContent">Refresh</button>
            <button @click="loadHomePage"> Home </button>
        </div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const content = ref(null);
const router = useRouter();

function loadHomePage(event) {
    router.push('/');
}
function refreshContent(event) {
    alert(`Hello!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

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