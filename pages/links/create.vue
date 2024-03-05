<script setup lang="ts">
import type {FormKitNode} from "@formkit/core"
import { nanoid } from 'nanoid'
import type { LoginPayload } from "~~/types";
import axios from "axios";
definePageMeta({
  middleware:["auth"],
});

async function createLink(payload: LoginPayload, node?:FormKitNode) {
  console.log("asd");

  try{
    await axios.post("/links",{
      ...payload,
      short_link: nanoid(8),
    });
  }catch(err){
    console.log("SDasd");
    
    handleInvalitdForm(err, node)
  }
}
</script>

<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Create Link" @submit="createLink">
    <FormKit type="url" name="full_link" label="Link" />
  </FormKit>
</template>
