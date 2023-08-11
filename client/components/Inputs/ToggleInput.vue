<template>
  <div class="toggle">
    <label class="switch">
      <input
        type="checkbox"
        :checked="ifAuto"
        :value="ifAuto"
        :name="'toggle'"
        @change="setAutoProperty($event)"
      />
      <div class="slider round"></div>
    </label>
    <span class="toggle__text">{{ placeholder }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["placeholder", "itemKey", "property"]);

const emit = defineEmits(["updateEditorItem"]);

const ifAuto = computed(() => {
  if (props.property.value === "auto") {
    return true;
  } else {
    return false;
  }
});

const setAutoProperty = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value: number | string = target.checked ? "auto" : 100;
  emit("updateEditorItem", props.itemKey, value);
};
</script>

<style scoped>

.toggle {
  display: flex;
  align-items: center;
}

.toggle__text {
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
}

.switch-text {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 18px;
  margin: 0 8px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  width: 32px;
  border-radius: 16px;
  border: 1px solid rgb(148 163 184)
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background-color: rgb(148 163 184);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 50%;
}

input:checked + .slider:before {
  background-color: #16A34A;
}

input:focus + .slider {
  box-shadow: 0 0 1px #16A34A);
}

input:checked + .slider:before {
  transform: translateX(14px);
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
}

.toggle .switch-text {
  font-size: 10px;
  line-height: 13px;
}
</style>
