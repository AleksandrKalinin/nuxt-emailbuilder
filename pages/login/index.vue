<template>
  <div>login</div>
</template>

<script setup lang="ts">
import { useTemplateStore } from "@/store/templateStore";

const { selectTemplate, fetchTemplates } = useTemplateStore();

onMounted(() => {
  //fetchTemplates();
});
</script>

<style scoped></style>
