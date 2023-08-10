<template>
  <textarea
    type="text"
    class="html-editor"
    v-model="htmlCodeValue"
    @input.lazy="$emit('updateHtml', htmlCodeValue)"
    ref="textarea"
  >
  </textarea>
</template>

<script setup lang="ts">
const props = defineProps(["markup"]);
const htmlCodeValue = ref(props.markup);
</script>

<style scoped>
.html-editor {
  @apply w-full h-[200px] resize-none border rounded-none outline-none p-3;
}
</style>
