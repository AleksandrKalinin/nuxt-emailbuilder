<template>
  <div class="editor-menu__item menu-item">
    <Icon name="radix-icons:image" color="#475569" size="40px" class="mb-1" />
    <p class="menu-item__heading">Image</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.menu-item {
  @apply cursor-pointer transition ease-in-out duration-100 hover:scale-105 hover:shadow-xl hover:shadow-slate-300/90 w-[100px] h-[120px] border border-slate-300 rounded-md bg-slate-50 flex justify-center items-center flex-col;
}

.menu-item__heading {
  @apply uppercase text-slate-600 tracking-[1.5px] text-sm;
}
</style>
