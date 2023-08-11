<template>
  <textarea
    ref="textarea"
    v-model="htmlCodeValue"
    type="text"
    class="html-editor"
    @input="$emit('updateHtml', htmlCodeValue)"
  >
  </textarea>
</template>

<script setup lang="ts">
const props = defineProps(["markup"]);
defineEmits(["updateHtml"]);
const htmlCodeValue = ref(props.markup);
</script>

<style scoped>
.html-editor {
  @apply w-full h-[200px] resize-none border rounded-none outline-none p-3;
}
</style>
