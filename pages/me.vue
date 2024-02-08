<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

let email = ref();
let name = ref();


const fetchData = async () => {
  const res = await axios.get('/user');
  const  data = res.data;
  email.value = data.email
  name.value = data.name
};

fetchData();

</script>

<template>
  <p><strong>User Name:</strong> {{ name }}</p>
  <p><strong>User Email:</strong> {{ email }}</p>
</template>
