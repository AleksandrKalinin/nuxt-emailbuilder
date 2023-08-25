<template>
  <div class="flex" @click="toggleModal(true)">
    <slot name="trigger"></slot>
  </div>
  <Teleport to="body">
    <Transition>
      <div v-if="modalOpen" class="overlay">
        <div ref="modal" class="modal">
          <h1 class="modal__title">
            Download template
            <Icon
              class="modal__icon"
              name="ic:baseline-close"
              size="24px"
              title="Close"
              @click="toggleModal(false)"
            />
          </h1>
          <p class="modal__text">
            Please provide your email to download template
          </p>
          <form class="modal__form modal-form">
            <input
              v-model="email"
              type="text"
              placeholder="Your email"
              class="modal-form__input"
            />
            <div class="modal-form__buttons modal-button">
              <button
                class="button button_regular button_spaced button_error"
                @click.prevent="cancelDispatch()"
              >
                Cancel
              </button>
              <button
                class="button button_regular button_normal"
                @click.prevent="sendTemplate"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useEditorStore } from "@/store/editorStore";

const { sendEmail } = useEditorStore();

const email = ref("");
const modal = ref(null);
const modalOpen = ref(false);

const toggleModal = (isOpen: boolean) => {
  modalOpen.value = isOpen;
};

const clearInput = () => {
  email.value = "";
};

const sendTemplate = () => {
  clearInput();
  toggleModal(false);
  sendEmail("aleksandr_kalinin_1995@mail.ru");
};

const cancelDispatch = () => {
  clearInput();
  toggleModal(false);
};

onClickOutside(modal, () => {
  cancelDispatch();
});
</script>

<style scoped>
.overlay {
  @apply w-full h-full bg-slate-900/75 absolute top-0 left-0 flex justify-center items-center z-50;
}

.modal {
  @apply p-[20px] bg-white w-[600px]  rounded-lg;
}

.modal__title {
  @apply text-2xl flex justify-between items-center mb-4 pb-3 border-b-[1px] border-slate-200;
}

.modal__icon {
  @apply cursor-pointer;
}

.modal__text {
  @apply mb-2;
}

.modal-form {
  @apply w-full;
}
.modal-form__input {
  @apply h-[40px] bg-white border rounded-none px-3 text-base w-full;
}

.modal-form__buttons {
  @apply flex justify-end border-t-[1px] border-slate-200 pt-4 mt-12;
}
</style>
