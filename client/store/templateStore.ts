import { defineStore } from "pinia";
import { templates } from "@/constants/templates";
import { useEditorStore } from "./editorStore";
// import templatesService from "~/services/templatesService";

export const useTemplateStore = defineStore("template", () => {
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

  /*
  const fetchTemplates = async () => {
    const { data, error } = await templates.fetchTemplates();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  const fetchSelectedTemplate = async (id: string | string[]) => {
    const { data, error } = await templatesService.fetchSelectedTemplate(
      Number(id)
    );

    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };
*/
  return {
    selectCategory,
    selectedCategory,
    emailTemplates,
    filteredEmailTemplates,
    selectTemplate,
  };
});
