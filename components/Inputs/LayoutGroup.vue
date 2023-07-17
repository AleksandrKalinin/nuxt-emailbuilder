<template>
  <div class="layout-group">
    <div
      class="layout-group__item layout-item"
      v-for="item in items"
      draggable="true"
    >
      <span class="layout-item__column" v-for="el in parseInt(item.number)">{{
        el
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["items"]);
console.log(props.items);
</script>

<style scoped>
.layout-group {
  @apply flex flex-wrap justify-between gap-y-2.5;
}
.layout-item {
  @apply w-[147px] flex hover:shadow-xl hover:shadow-slate-300/90 transition ease-in-out duration-100 cursor-pointer;
}

.layout-item .layout-item__column:not(:first-child) {
  @apply border-l-[1px] border-slate-300 min-w-[40px];
}

.layout-item__column {
  @apply flex grow bg-slate-200 border border-slate-300 px-3 h-[40px] justify-center items-center text-slate-600;
}
</style>
