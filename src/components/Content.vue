<template>
    <div>
      <h2>Content</h2>
      <div v-if="content">
        <p>{{ content }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';

  export default {
    setup() {
      const content = ref(null);

      onMounted(() => {
        axios.get('http://localhost:8080/content')
          .then(response => {
            content.value = response.data;
          }).catch(error => {
            alert('Error fetching content: ' + error);
          });
      });

      return {
        content,
      };
    },
  };
  </script>