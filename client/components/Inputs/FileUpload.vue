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
      <input
        type="file"
        accept="image/*"
        class="upload__input"
        @change="onFileChanged($event)"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
const file = ref<File | null>(null);
const encodedImage = ref<string>("");
const currentImage = ref<string>("");

async function onFileChanged($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    file.value = target.files[0];
    encodedImage.value = (await toBase64(file.value)) as string;
    currentImage.value = encodedImage.value;
  }
}

const toBase64 = (fileInput: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileInput);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
</script>

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
