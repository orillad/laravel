<script setup lang="ts">
import { watch, ref } from "vue"
import axios from "axios"
import { RegisterPaylaod } from "~~/types";
import { FormKitNode } from "@formkit/core";
import { FormKit } from "@formkit/vue";


definePageMeta({
  layout: "centered",
  middleware: ["guests"],
});

const { register } = useAuth();


async function handleRegister(payload: RegisterPaylaod, node?:FormKitNode) {
  console.log(payload);
  
  try{
    await register(payload)
  }catch(error){
    handleInvalitdForm(error, node)
  }
  
}


</script>
<template>
  <div class="register">
    <h1>Register</h1>
    <FormKit type="form" submit-label="Register" @submit="handleRegister">
      <FormKit label="Name" name="name" type="text"/>
      <FormKit label="Email" name="email" type="email"/>
      <FormKit label="Password" name="password" type="password"/>
      <FormKit label="Confirm password" name="password_confirmation" type="password"/>
    </FormKit>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
  </div>
</template>


<style>
.error {
  color: #a00;
}
</style>