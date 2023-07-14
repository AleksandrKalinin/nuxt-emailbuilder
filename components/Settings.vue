<template>
  <div class="settings-wrap">
    <div class="settings">
      <div class="settings-block settings__block">
        <h4 class="settings-block__header">Image</h4>
        <div class="settings-block__options settings-options">
          <div class="settings-options__item settings-item settings-item_col">
            <h5 class="settings-item__header">Image</h5>
            <Upload />
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
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Bottom
                </h6>
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Left
                </h6>
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Right
                </h6>
                <InputGroup />
              </div>
            </div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Height</h5>
            <InputGroup />
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Width</h5>
            <InputGroup />
          </div>
        </div>
      </div>
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
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Bottom
                </h6>
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Left
                </h6>
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Right
                </h6>
                <InputGroup />
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
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Bottom
                </h6>
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Left
                </h6>
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Right
                </h6>
                <InputGroup />
              </div>
            </div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Height</h5>
            <InputGroup />
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Width</h5>
            <InputGroup />
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
            <SelectionGroup />
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
              <Colorpicker />
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
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Style
                </h6>
                <Dropdown />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Style
                </h6>
                <ColorPicker />
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
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Bottom
                </h6>
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Left
                </h6>
                <InputGroup />
              </div>
              <div class="settings-props__block">
                <h6
                  class="setting-props__header text-sm text-slate-500 font-medium tracking-[0.5px] mb-1"
                >
                  Right
                </h6>
                <InputGroup />
              </div>
            </div>
          </div>
          <div class="settings-options__item settings-item settings-item_row">
            <h5 class="settings-item__header">Border collapse</h5>
            <ToggleInput />
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
</style>
