import { defineStore } from "pinia";
import { templates } from "@/constants/templates";
import { useEditorStore } from "./editorStore";

export const useTemplateStore = defineStore("template", () => {
  const editorStore = useEditorStore();
  const { setEditorRows, selectEditorRow, extractFromTemplate } =
    useEditorStore();

  const emailTemplates = ref<EmailTemplate[] | []>([]);

  emailTemplates.value = templates;

  const selectedCategory = ref<string>("all");

  const selectCategory = (category: string) => {
    selectedCategory.value = category;
  };

  const filteredEmailTemplates = computed(() => {
    if (selectedCategory.value !== "all") {
      return emailTemplates.value.filter((item) => {
        return item.category === selectedCategory.value;
      });
    } else {
      return emailTemplates.value;
    }
  });

  const selectTemplate = async (template: EmailTemplate) => {
    setEditorRows(template.content);
    extractFromTemplate(template.content);
    selectEditorRow(template.id);
    await navigateTo("/editor");
  };

  return {
    selectCategory,
    selectedCategory,
    emailTemplates,
    filteredEmailTemplates,
    selectTemplate,
  };
});
