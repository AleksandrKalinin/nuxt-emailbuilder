<template>
  <div class="social-group">
    <div class="options">
      <span
        v-for="(icon, index) in items"
        :key="index"
        class="options-icon"
        @click="addIcon(icon)"
      >
        <img :src="icon.src" :alt="icon.title" :title="icon.title" />
      </span>
    </div>
    <div class="links">
      <div
        v-for="icon in selectedIcons"
        :key="icon.property"
        class="links__item links-item"
      >
        <span
          class="links-item__delete"
          title="Delete icon"
          @click="deleteIcon(icon)"
        >
          <Icon name="radix-icons:cross-2" size="20px" />
        </span>
        <div class="links-item__header links-header">
          <img class="links-header__icon" :src="icon.src" />
          <p class="links-header__name">{{ icon.name }}</p>
        </div>
        <div class="links-item__block links-block">
          <span class="links-block__url"> URL </span>
          <input
            class="links-block__input"
            type="text"
            :value="icon.link"
            @input="updateIconLink(icon, $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";

interface SocialGroupProps {
  items: {
    name: string;
    property: string;
    src: string;
    title: string;
    link: string;
  }[];
  selectedIcons: {
    name: string;
    property: string;
    src: string;
    title: string;
    link: string;
  }[];
}

const props = defineProps<SocialGroupProps>();

const emit = defineEmits(["updateNestedIcons"]);

const deleteIcon = (selectedIcon: SocialIcon) => {
  const icons = props.selectedIcons.filter(
    (icon) => icon.property !== selectedIcon.property
  );
  emit("updateNestedIcons", icons);
};

const addIcon = (selectedIcon: SocialIcon) => {
  const index = props.selectedIcons.findIndex(
    (icon: SocialIcon) => icon.property === selectedIcon.property
  );

  if (index === -1) {
    const icons = [...props.selectedIcons, selectedIcon];
    emit("updateNestedIcons", icons);
  }
};

const updateIconLink = useDebounceFn(
  (selectedIcon: SocialIcon, event: Event) => {
    const target = event.target as HTMLInputElement;

    const icons = props.selectedIcons.map((icon: SocialIcon) => {
      if (icon.property === selectedIcon.property) {
        icon.link = target.value;
      }
      return icon;
    });
    emit("updateNestedIcons", icons);
  },
  1000
);
</script>

<style scoped>
.options {
  @apply flex flex-wrap gap-2 mb-7;
}

.options-icon {
  @apply w-[40px] h-[40px] cursor-pointer;
}

.links-item {
  @apply relative p-4 mb-2 bg-white w-full border border-slate-200 rounded-md;
}

.links-item__header {
  @apply flex items-center mb-3;
}

.links-item__delete {
  @apply cursor-pointer absolute top-[10px] right-[10px];
}

.links-header__icon {
  @apply h-[30px] w-[30px];
}

.links-header__name {
  @apply ml-2 text-lg;
}

.links-block {
  @apply flex;
}

.links-block__url {
  @apply flex justify-center items-center h-[35px] bg-slate-200 px-2 py-1 rounded-l-md;
}

.links-block__input {
  @apply h-[35px] border border-slate-200 rounded-none outline-none px-2 w-full rounded-r-md;
}
</style>
