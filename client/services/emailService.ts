import type { PostgrestError } from "@supabase/supabase-js";
import type { Database } from "~/types/supabase";

const client = useSupabaseClient<Database>();

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

class EmailService {
  async saveToLocal(template: string) {
    try {
      await useFetch("http://localhost:5000/create", {
        method: "post",
        body: {
          template,
        },
      });
    } catch (error) {
      if (error instanceof Error) return error.message;
    }
  }

  async saveToStorage(template: string) {
    try {
      await useFetch("http://localhost:5000/create", {
        method: "post",
        body: {
          template,
        },
      });
    } catch (error) {
      if (error instanceof Error) return error.message;
    }
  }

  async uploadToStorage(filename: string, file: string) {
    const { data, error } = await client.storage
      .from("emails")
      .upload(`${filename}.html`, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: "text/html; charset=UTF-8",
      });
    if (error) {
      throw new Error(error.message);
    }
    return { data, error };
  }

  getTemplateUrl(url: string) {
    const path = client.storage.from("emails").getPublicUrl(url).data.publicUrl;
    return path;
  }

  async saveFile(template: any) {
    try {
      await useFetch("http://localhost:5000/download", {
        method: "post",
        body: {
          template,
        },
      });
    } catch (error) {
      if (error instanceof Error) return error.message;
    }
  }

  async saveImage(image: any) {
    try {
      await useFetch("http://localhost:5000/image", {
        method: "post",
        body: {
          image,
        },
      });
    } catch (error) {
      if (error instanceof Error) return error.message;
    }
  }

  async sendEmail(email: string, template: string, filepath: string) {
    try {
      await useFetch("http://localhost:5000/send", {
        method: "post",
        body: {
          email,
          template,
          filepath,
        },
      });
    } catch (error) {
      if (error instanceof Error) return error.message;
    }
  }
}

const emailService = new EmailService();

export default emailService;
