import * as htmlToImage from "html-to-image";
import { v4 as uuidv4 } from "uuid";
import { defineStore } from "pinia";
import { useEditorStore } from "@/store/editorStore";
import templatesService from "~/services/templatesService";
import emailService from "~/services/emailService";

export const useTemplateStore = defineStore("template", () => {
  const { selectEditorRow, extractFromTemplate, setEditorRows } =
    useEditorStore();

  const emailTemplates = ref<EmailTemplate[] | []>([]);

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
    const store = useEditorStore();
    const content = template.content as string;

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
      emailTemplates.value = data;
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
    const { data, error } = await emailService.uploadToStorage(id, template);
    if (error) {
      throw new Error(error.message);
    }
    if (data?.path) {
      const path = emailService.getTemplateUrl(data?.path);
      return path;
    }
  };

  return {
    selectCategory,
    selectedCategory,
    emailTemplates,
    filteredEmailTemplates,
    selectTemplate,
    fetchTemplates,
    fetchSelectedTemplate,
    saveTemplate,
    saveFile,
    uploadTemplateToStorage,
  };
});
