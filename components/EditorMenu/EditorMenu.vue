<template>
  <div class="editor-menu-wrap">
    <div class="editor-menu">
      <div class="editor-menu__item menu-item" v-for="item in header">
        <Icon :name="item.icon" color="#475569" size="40px" class="mb-1" />
        <p class="menu-item__heading">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { header } from "./data";
</script>

<style scoped>
.editor-menu {
  gap: 20px;
}

.editor-menu-wrap {
  @apply bg-slate-100 w-[380px] flex justify-center;
}

.editor-menu {
  @apply flex flex-wrap w-full justify-start items-start p-[20px] mb-auto;
}

.editor-menu__item {
  @apply cursor-pointer transition ease-in-out duration-100 hover:scale-105 hover:shadow-xl hover:shadow-slate-300/90 w-[100px] h-[100px] border border-slate-300 rounded-md bg-slate-50 flex justify-center items-center flex-col;
}

.menu-item__heading {
  @apply uppercase text-slate-600 tracking-[1.5px] text-sm;
}
</style>
