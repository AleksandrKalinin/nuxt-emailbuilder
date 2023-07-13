<template>
  <div class="settings-wrap">
    <div class="settings">
      <div class="settings-block settings__block">
        <h4 class="settings-block__header">Dimension</h4>
        <div class="settings-block__options settings-options">
          <div class="settings-options__item settings-item settings-item_col">
            <h5 class="settings-item__header">Padding</h5>
            <div class="settings-item__properties settings-props">
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Top
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Bottom
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Left
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Right
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="settings-options__item settings-item settings-item_col">
            <h5 class="settings-item__header">Margin</h5>
            <div class="settings-item__properties settings-props">
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Top
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Bottom
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Left
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Right
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Height</h5>
            <div class="settings-props__item item-props flex">
              <button class="item-props__button">
                <Icon name="radix-icons:plus" color="#475569" size="12px" />
              </button>
              <input
                type="text"
                class="item-props__input ml-[-1px]"
                placeholder="auto"
              />
              <span class="item-props__units ml-[-1px]">px</span>
              <button class="item-props__button ml-[-1px]">
                <Icon name="radix-icons:minus" color="#475569" size="12px" />
              </button>
            </div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Width</h5>
            <div class="settings-props__item item-props flex">
              <button class="item-props__button">
                <Icon name="radix-icons:plus" color="#475569" size="12px" />
              </button>
              <input
                type="text"
                class="item-props__input ml-[-1px]"
                placeholder="auto"
              />
              <span class="item-props__units ml-[-1px]">px</span>
              <button class="item-props__button ml-[-1px]">
                <Icon name="radix-icons:minus" color="#475569" size="12px" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="settings-block settings__block">
        <h4 class="settings-block__header">Typography</h4>
        <div class="settings-block__options settings-options">
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Font size</h5>
            <SelectionGroup />
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Font weight</h5>
            <div class="settings-item__toggle settings-toggle"></div>
          </div>
          <!--
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Font style</h5>
            <div class="settings-item__properties">Lorem ipsum</div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Font family</h5>
            <div class="settings-item__properties">Lorem ipsum</div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Letter spacing</h5>
            <div class="settings-item__properties">Lorem ipsum</div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Font color</h5>
            <div class="settings-item__properties">Lorem ipsum</div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Line height</h5>
            <div class="settings-item__properties">Lorem ipsum</div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Text align</h5>
            <div class="settings-item__properties">Lorem ipsum</div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Text transform</h5>
            <div class="settings-item__properties">Lorem ipsum</div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Text decoration</h5>
            <div class="settings-item__properties">Lorem ipsum</div>
          </div>
        --></div>
      </div>
      <div class="settings-block settings__block">
        <h4 class="settings-block__header">Decorations</h4>
        <div class="settings-block__options settings-options">
          <div class="settings-options__item settings-item settings-item_row">
            <div class="settings-props__block">
              <h6
                class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
              >
                Background
              </h6>
              <div class="setting-props__colorpicker settings-colorpicker">
                <input
                  class="settings-colorpicker__input"
                  type="text"
                  placeholder="none"
                /><input class="settings-colorpicker__picker" type="color" />
              </div>
            </div>
          </div>
          <div class="settings-options__item settings-item settings-item_col">
            <h5 class="settings-item__header">Border</h5>
            <div class="settings-item__properties settings-props">
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Width
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Style
                </h6>
                <select class="settings-props__dropdown settings-dropdown">
                  <option>Solid</option>
                  <option>Dashed</option>
                  <option>Dotted</option>
                </select>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Style
                </h6>
                <div class="setting-props__colorpicker settings-colorpicker">
                  <input
                    class="settings-colorpicker__input"
                    type="text"
                    placeholder="none"
                  /><input class="settings-colorpicker__picker" type="color" />
                </div>
              </div>
            </div>
          </div>
          <div class="settings-options__item settings-item settings-item_col">
            <h5 class="settings-item__header">Border radius</h5>
            <div class="settings-item__properties settings-props">
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Top
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Bottom
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Left
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Right
                </h6>
                <div class="settings-props__item item-props flex">
                  <button class="item-props__button">
                    <Icon name="radix-icons:plus" color="#475569" size="12px" />
                  </button>
                  <input
                    type="text"
                    class="item-props__input ml-[-1px]"
                    placeholder="auto"
                  />
                  <span class="item-props__units ml-[-1px]">px</span>
                  <button class="item-props__button ml-[-1px]">
                    <Icon
                      name="radix-icons:minus"
                      color="#475569"
                      size="12px"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Border collapse</h5>
            <div class="settings-props__item item-props flex">
              <button class="item-props__button">
                <Icon name="radix-icons:plus" color="#475569" size="12px" />
              </button>
              <input
                type="text"
                class="item-props__input ml-[-1px]"
                placeholder="auto"
              />
              <span class="item-props__units ml-[-1px]">px</span>
              <button class="item-props__button ml-[-1px]">
                <Icon name="radix-icons:minus" color="#475569" size="12px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.settings-wrap {
  @apply bg-slate-100 w-[380px] flex justify-center h-full overflow-y-auto;
}
.settings {
  @apply flex flex-wrap w-full min-h-full h-auto justify-start items-start py-[20px] mb-auto;
}

.settings-block {
  @apply w-full mb-[10px];
}

.settings-block__header {
  @apply bg-slate-200 py-[10px] px-[15px] w-full text-slate-800 cursor-pointer uppercase text-sm tracking-[1.5px];
}

.settings-block__options {
  @apply w-full;
}

.settings-item {
  @apply w-full px-[15px] py-[15px] border-b border-slate-300 flex;
}

.settings-item_col {
  @apply flex-col;
  .settings-item__header {
    @apply mb-2;
  }
}

.settings-item_row {
  @apply justify-between items-center;
}

.settings-item__header {
  @apply text-base text-slate-800 font-medium tracking-[0.5px];
}

.settings-item__properties {
  @apply flex flex-wrap justify-between;
  gap: 20px;
}

.settings-props__dropdown {
  @apply h-[30px] px-[10px] border border-slate-300 outline-none;
}

.item-props__button {
  @apply z-10 w-[30px] h-[30px] bg-white flex justify-center items-center border border-slate-300 transition duration-100 hover:border-slate-400;
}

.item-props__input {
  @apply w-[60px] h-[30px] border border-slate-300 px-[5px] outline-none leading-[30px];
}

.item-props__input::placeholder {
  line-height: 22px;
  font-weight: 300;
}

.item-props__units {
  @apply w-[30px] h-[30px] bg-slate-100 flex justify-center items-center border border-slate-300 text-sm text-slate-800;
}

.settings-colorpicker {
  @apply h-[30px] flex items-start;
}

.settings-colorpicker__input {
  @apply h-[30px] border border-slate-300 px-[5px] outline-none leading-[30px];
}

.settings-colorpicker__input::placeholder {
  line-height: 30px;
}

.settings-colorpicker__picker {
  @apply min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px];
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  outline: 0;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

.settings-colorpicker__picker::-webkit-color-swatch {
  border: none;
  @apply min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] mt-[-4px] ml-[-2px];
}

.settings-colorpicker__picker::-moz-color-swatch {
  border: none;
  @apply min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] mt-[-4px] ml-[-2px];
}
</style>
