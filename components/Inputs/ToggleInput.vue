<template>
  <div class="toggle">
    <span class="toggle__text">No</span>
    <label class="switch">
      <input type="checkbox" :checked="true" :value="true" :name="'toggle'" />
      <div class="slider round"></div>
    </label>
    <span class="toggle__text">Yes</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.toggle {
  display: flex;
  align-items: flex-end;
}

.toggle__text {
  font-size: 14px;
  color: rgb(71 85 105);
  letter-spacing: 1px;
  font-weight: 500;
}

.switch-text {
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #19202c;
}

.switch {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
  width: 52px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 2px;
  bottom: 2px;
  background-color: rgb(148 163 184);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider:before {
  background-color: rgb(96 165 250);
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(96 165 250);
}

input:checked + .slider:before {
  transform: translateX(24px);
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
}

.toggle .switch-text {
  font-size: 10px;
  line-height: 13px;
}
</style>
