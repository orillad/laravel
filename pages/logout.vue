<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const fetchData = async () => {
  try {
    const res = await axios.post('/logout');
    router.push('/login');
  } catch (error) {
    console.error('Logout failed', error);
  }
};

onMounted(() => {
  fetchData();
});

</script>

<template>
  <div>Logging Out...</div>
</template>
