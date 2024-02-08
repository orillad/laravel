<script setup lang="ts">
import { watch, ref } from "vue"
import axios, { Axios } from "axios"
import { useRoute, useRouter } from "vue-router";


definePageMeta({
  layout: "centered",
});

interface formData {
  email: string;
  password: string;
}

const form = ref<formData>({
  email: "",
  password: "",
})

const router = useRouter();

async function handleSubmit() {

  console.log(form.value.email);

  console.log(form);


  // const res = await axios.post("/login", {
  //   email: form.value.email,
  //   password: form.value.password,
  // })
  const data = {
    email: form.value.email,
    password: form.value.password
  }

  async function login(req: any) {
    try {
      let res = await axios.post('/login', req);
      await router.push("/me");
      return res.data; // or any other value you want to return
    } catch (error) {
      console.log(error.response);
      return error.response.data;
    }
  }

  login(data)


  // if (res.data.success) {
  //   await router.push("/me");
  // } else {
  //   console.error("Login failed");
  // }

}

</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        <div>Email</div>
        <input v-model="form.email" type="text" />
      </label>

      <label>
        <div>Password</div>
        <input v-model="form.password" type="password" />
      </label>
      <button class="btn">Login</button>
    </form>

    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register">Register now!</NuxtLink>
    </p>
  </div>
</template>
