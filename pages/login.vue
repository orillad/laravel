<script setup lang="ts">
import { watch, ref } from "vue"
import axios, { Axios, AxiosError } from "axios"
import { useRoute, useRouter } from "vue-router";
import { LoginPayload } from "~~/types";
import type {FormKitNode} from "@formkit/core"
import { FormKit } from "@formkit/vue";

definePageMeta({
  layout: "centered",
  middleware: ["guests"]
});

interface FormData {
  email: string;
  password: string;
}


const router = useRouter();
const errors = ref({
  email: [],
  password: []
})


const { login } = useAuth();




async function handleLogin(payload: LoginPayload, node?:FormKitNode) {
  try{
    await login(payload)
  }catch(error){
    handleInvalitdForm(error, node)
  }
  
}

</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <FormKit type="form" submit-label="login" @submit="handleLogin">
      <FormKit label="Email" name="email" type="email"/>
      <FormKit label="Password" name="password" type="password"/>
    </FormKit>
    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register">Register now!</NuxtLink>
    </p>
  </div>
</template>
<style scoped>
.error {
  color: red;
  margin-top: 5px;
}
</style>