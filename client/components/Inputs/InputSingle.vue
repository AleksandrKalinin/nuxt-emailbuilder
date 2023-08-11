<template>
  <div class="input-single">
    <button class="input-single__button" @click.prevent="decreaseValue()">
      <Icon name="radix-icons:minus" color="#475569" size="12px" />
    </button>
    <input
      type="text"
      class="input-single__input ml-[-1px]"
      placeholder="auto"
      :value="inputValue"
      @input="updateValue($event)"
    />
    <span class="input-single__units ml-[-1px]">px</span>
    <button
      class="input-single__button ml-[-1px]"
      @click.prevent="increaseValue()"
    >
      <Icon name="radix-icons:plus" color="#475569" size="12px" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["property", "itemKey", "opt", "max", "min"]);

const emit = defineEmits(["updateEditorItem"]);

const inputValue = ref(props.property.value);

const decreaseValue = () => {
  if (inputValue.value > 0) {
    inputValue.value = Number(inputValue.value) - 1;
  }
  emit("updateEditorItem", props.itemKey, Number(inputValue.value));
};

const increaseValue = () => {
  inputValue.value = Number(inputValue.value) + 1;
  emit("updateEditorItem", props.itemKey, Number(inputValue.value));
};

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("updateEditorItem", props.itemKey, Number(target.value));
};
</script>

<style scoped>
.input-single {
  @apply flex;
}
.input-single__button {
  @apply z-10 w-[30px] h-[30px] bg-white flex justify-center items-center border border-slate-300 transition duration-100 hover:border-slate-400;
}

.input-single__input {
  @apply w-[60px] h-[30px] border border-slate-300 px-[5px] outline-none leading-[30px] text-sm;
}

.input-single__input::placeholder {
  line-height: 22px;
  font-weight: 300;
}

.input-single__units {
  @apply w-[30px] h-[30px] bg-slate-100 flex justify-center items-center border border-slate-300 text-sm text-slate-800;
}
</style>
