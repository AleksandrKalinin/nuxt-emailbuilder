<template>
  <div class="upload">
    <label class="upload__area">
      <div class="upload__drag drag-area">
        <span
          class="pl-3 drag-area__placeholder text-xs leading-[36px] text-slate-600 opacity-75"
          >Drop a new image here</span
        >
      </div>
      <div class="upload__btn">Upload file</div>
      <input type="file" accept="image/*" class="upload__input" />
    </label>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.upload {
  @apply w-full;
}

.upload__area {
  @apply flex justify-center items-center;
}

.upload__input {
  display: none;
}
.upload__drag {
  @apply h-[36px] grow border border-slate-200 rounded-none border bg-white;
}

.upload__btn {
  @apply flex self-start items-center transition duration-200 hover:bg-blue-500 text-sm px-4 py-2 bg-blue-400 text-white  tracking-[1px];
}
</style>
