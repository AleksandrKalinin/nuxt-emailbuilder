<template>
  <textarea
    ref="textarea"
    v-model="inputValue"
    type="text"
    class="editable resize-none"
    :style="calculatedStyles"
    @input="$emit('updateText', inputValue)"
  >
  </textarea>
</template>

<script setup lang="ts">
interface EditableProps {
  el: EditorElement;
  rowId: string;
  itemId: string;
  elementWidth: number | string;
}

const props = defineProps<EditableProps>();

const elWidth = ref(props.elementWidth);
const curWidth = ref(0);

const { textarea } = useTextareaAutosize();

const styleProps = computed(() => {
  const arr = props.el.inlineStyles.split(";");
  arr.pop();
  const mapped = arr.map((item) => {
    return item
      .trim()
      .split(":")
      .map((property) => property.trim());
  });

  const properties = Object.fromEntries(mapped);
  return properties;
});

const convertedElWidth = computed(() => {
  if (elWidth.value === "auto") {
    return 0;
  } else return Number(elWidth.value);
});

const calculatedStyles = computed(() => {
  const fontSize = styleProps.value["font-size"];
  const fontFamily = styleProps.value["font-family"];
  const paddingRight = parseFloat(styleProps.value["padding-right"]);
  const paddingLeft = parseFloat(styleProps.value["padding-left"]);

  const font = `${fontSize} ${fontFamily}`;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.font = font;

  const width = context?.measureText(inputValue.value as string).width;

  const diff = width - curWidth.value;

  const pureWidth = convertedElWidth.value - paddingLeft - paddingRight;

  let biggest =
    Math.ceil(width) >= pureWidth ? Math.ceil(width) : Math.ceil(pureWidth);
  if (curWidth.value !== 0) {
    biggest += Math.ceil(diff);
  }
  curWidth.value = width;

  const formattedWidth = Math.ceil(biggest) + paddingLeft + paddingRight + "px";
  const updatedStyles = styleProps.value;
  updatedStyles.width = formattedWidth;

  let styling = "";
  for (const key in updatedStyles) {
    styling += `${key} : ${updatedStyles[key]};`;
  }
  return styling;
});

const emit = defineEmits(["updateText", "updateElement", "setEditableBlock"]);

const inputValue = ref(props.el.placeholder);

const focusInput = () => {
  const target = textarea.value;
  target.focus();
  emit("setEditableBlock", props.rowId);
};

onMounted(() => {
  focusInput();
});

onClickOutside(textarea, () => {
  emit("updateElement", props.itemId, props.el.id, inputValue.value);
  inputValue.value = "";
});
</script>

<style scoped>
.editable {
  background: transparent;
  border-radius: 0;
  border: none;
  outline: 1px solid #60a5fa;
  box-sizing: border-box;
  resize: none;
  height: auto;
  overflow: hidden;
  max-width: 100%;
}
</style>
