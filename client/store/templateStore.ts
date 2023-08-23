import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { v4 as uuidv4 } from "uuid";
import { defineStore } from "pinia";
import { templates } from "@/constants/templates";
import { useEditorStore } from "@/store/editorStore";
import templatesService from "~/services/templatesService";
import emailService from "~/services/emailService";

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

  // const createTemplatePreview = (id: string) => {
  //   htmlToImage.toPng(document.getElementById(id)).then(function (dataUrl) {
  //     download(dataUrl, "my-node.png");
  //   });
  // };

  const createTemplatePreview = async (targetEl: HTMLElement) => {
    const preview = await htmlToImage
      .toPng(targetEl)
      .then((dataUrl) => {
        fetch(dataUrl)
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
    const targetEl = document.getElementById("editorArea") as HTMLElement;
    const file = createTemplatePreview(targetEl);
    await file.then((res) => {
      console.log(res);
    });
    const { data, error } = await templatesService.uploadImage(file.name, file);
    if (error) throw Error;
    if (data?.path) {
      const path = templatesService.getImageUrl(data?.path);
    }
  };

  const fetchTemplates = async () => {
    const { data, error } = await templatesService.fetchTemplates();
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
  };
});
