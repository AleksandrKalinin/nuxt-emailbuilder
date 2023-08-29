<template>
  <Transition>
    <div class="slider">
      <div class="slider__wrapper">
        <input
          ref="slider"
          :value="sliderValue"
          type="range"
          :min="min"
          :max="max"
          :step="step"
          class="slider__input slider-input cursor-pointer"
          @input="setValue($event)"
        />
        <div class="slider__labels slider-labels">
          <span>{{ sliderValue }}</span>
        </div>
      </div>
      <div class="slider__units slider-units">
        <label class="slider-units__label"
          ><input
            v-model="unitValue"
            type="radio"
            class="slider-units__input"
            value="px"
            @change="updateUnitValue(($event.target as HTMLInputElement).value)"
          />Pixels</label
        >
        <label class="slider-units__label"
          ><input
            v-model="unitValue"
            type="radio"
            class="slider-units__input"
            value="%"
            @change="updateUnitValue(($event.target as HTMLInputElement).value)"
          />Percents</label
        >
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  step: number;
  property: {
    property: string;
    value: number | string | boolean;
    unit?: string;
  };
  itemKey: string;
}>();

const emit = defineEmits(["updateEditorItem"]);

const sliderValue = ref(props.property.value);

const unitValue = ref(props.property.unit);

const updateUnitValue = (val: string) => {
  console.log(val);
};

// const sliderValue = computed(() => {
//   if (props.property.unit === "px") {
//     return 50;
//   } else {
//     return props.property.value;
//   }
// });

const slider: Ref<HTMLInputElement | null> = ref(null);

const min = 0;
const max = 100;

const setValue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  sliderValue.value = parseFloat(target.value);
};

const getProgress = (value: number, min: number, max: number): number => {
  return ((value - min) / (max - min)) * 100;
};

const setCSSProgress = (progress: number) => {
  if (slider.value) {
    slider.value.style.setProperty("--ProgressPercent", `${progress}%`);
  }
};

watchEffect(() => {
  if (slider.value) {
    const progress = getProgress(
      Number(sliderValue.value),
      Number(slider.value.min),
      Number(slider.value.max)
    );
    setCSSProgress(progress);
  }
});

watchDebounced(
  sliderValue,
  () => {
    emit("updateEditorItem", props.itemKey, Number(sliderValue.value));
  },
  { debounce: 100, maxWait: 500 }
);
</script>

<style scoped>
.slider__wrapper {
  --trackHeight: 5px;
  --thumbRadius: 1rem;
}

.slider__wrapper input[type="range"] {
  position: relative;
  appearance: none;
  border-radius: 999px;
  z-index: 0;
  width: 100%;
}

.slider__wrapper input[type="range"]::before {
  content: "";
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  background: #60a5fa;
  pointer-events: none;
  border-radius: 999px;
}

.slider__wrapper input[type="range"]::-webkit-slider-runnable-track {
  appearance: none;
  background: #e9e9e9;
  height: var(--trackHeight);
  border-radius: 999px;
}

.slider__wrapper input[type="range"]::-moz-range-track {
  appearance: none;
  background: #60a5fa;
  height: var(--trackHeight);
  border-radius: 999px;
}

.slider__wrapper input[type="range"]::-webkit-slider-thumb {
  position: relative;
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: #60a5fa;
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.slider-units {
  @apply flex items-center;
}

.slider-units__label {
  @apply flex items-center cursor-pointer;
}

.slider-units__input {
  @apply h-[16px] w-[16px] cursor-pointer mr-1;
}

.slider-units__label:not(:first-child) .slider-units__input {
  @apply ml-4;
}

.slider__labels {
  @apply flex w-full justify-end text-sm;
}
</style>
