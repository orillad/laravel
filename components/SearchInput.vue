<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, required: true },
});

const emit = defineEmits<{
  (e: "update:modelValue", payload: string): void;
}>();

const localValue = ref(props.modelValue);
const debouncedLocalValue = refDebounced(localValue, 500);

watch(debouncedLocalValue, () => {
  emit("update:modelValue", localValue.value);
});
</script>
<template>
  <div class="relative">
    <IconSearch
      class="w-3 w-3 absolute top-[50%] translate-y-[-50%] left-2 opacity-30"
    />

    <input
      type="text"
      placeholder="Search"
      class="p-2 pl-10 rounded"
      v-model="localValue"
    />
  </div>
</template>