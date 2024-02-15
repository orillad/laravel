<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';



definePageMeta({
  middleware:["auth"],
});

const { user, initUser } = useAuth();

// let email = ref();
// let name = ref();


// const fetchData = async () => {
//   const res = await axios.get('/user');
//   const  data = res.data;
//   email.value = data.email
//   name.value = data.name
// };

// fetchData();

initUser();
</script>

<template>
  <p><strong>User Name:</strong> {{ user?.name }}</p>
  <p><strong>User Email:</strong> {{ user?.email }}</p>
</template>
