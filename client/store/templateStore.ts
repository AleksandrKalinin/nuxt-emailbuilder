import * as htmlToImage from "html-to-image";
import { v4 as uuidv4 } from "uuid";
import { defineStore } from "pinia";
import type { PostgrestError } from "@supabase/supabase-js";
import { useEditorStore } from "@/store/editorStore";
import templatesService from "~/services/templatesService";
import emailService from "~/services/emailService";

export const useTemplateStore = defineStore("template", () => {
  const emailTemplates = ref<EmailTemplate[] | []>([]);

  const selectedType = ref<string>("all");

  const selectedCategories = ref([]);

  const selectType = (type: string) => {
    selectedType.value = type;
  };

  const filteredEmailTemplates = computed(() => {
    if (selectedType.value !== "all") {
      return emailTemplates.value.filter((item) => {
        return item.type === selectedType.value;
      });
    } else {
      return emailTemplates.value;
    }
  });

  const filteredByCategory = computed(() => {
    if (selectedCategories.value.length > 0) {
      const items = filteredEmailTemplates.value.filter(
        (template: EmailTemplate) => {
          if (selectedCategories.value.includes(template.category)) {
            return template;
          }
        }
      );
      return items;
    } else {
      return filteredEmailTemplates.value;
    }
  });

  const selectTemplate = async (template: EmailTemplate) => {
    const store = useEditorStore();
    const content = template.content as unknown as string;
    store.setEditorRows(template.content);
    store.extractFromTemplate(JSON.parse(content));
    store.selectEditorRow(template.id);
    await navigateTo("/editor");
  };

  const createTemplatePreview = async (targetEl: HTMLElement) => {
    const preview = await htmlToImage
      .toPng(targetEl)
      .then((dataUrl) => {
        emailService.saveImage(dataUrl);
        return fetch(dataUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const filename: string = uuidv4();
            const file = new File([blob], filename, { type: blob.type });
            return file;
          });
      })
      .catch(function (error) {
        throw new Error(error);
      });
    return preview;
  };

  const saveFile = async (template: EditorRow[]) => {
    await emailService.saveFile(template);
  };

  const saveTemplate = async (template: EditorRow[]) => {
    const targetEl = document.getElementById("editorContent") as HTMLElement;
    const fileRes = createTemplatePreview(targetEl);

    await fileRes.then(async (file) => {
      const { data, error } = await templatesService.uploadImage(
        file.name,
        file
      );
      if (error) throw Error;
      if (data?.path) {
        const path = templatesService.getImageUrl(data?.path);
        await templatesService.uploadTemplate(template, path);
      }
    });
  };

  const fetchTemplates = async () => {
    const { data, error } = await templatesService.fetchTemplates();
    if (error) {
      throw new Error(error.message);
    } else {
      emailTemplates.value = data as unknown as EmailTemplate[];
    }
  };

  const fetchSelectedTemplate = async (id: string | string[]) => {
    const { error } = await templatesService.fetchSelectedTemplate(Number(id));
    if (error) {
      throw new Error(error.message);
    }
  };

  const uploadTemplateToStorage = async (template: string) => {
    const id = uuidv4();
    const { data } = await emailService.uploadToStorage(id, template);
    if (data?.path) {
      const path = emailService.getTemplateUrl(data?.path);
      return path;
    }
  };

  return {
    selectType,
    selectedType,
    selectedCategories,
    emailTemplates,
    filteredEmailTemplates,
    filteredByCategory,
    selectTemplate,
    fetchTemplates,
    fetchSelectedTemplate,
    saveTemplate,
    saveFile,
    uploadTemplateToStorage,
  };
});
