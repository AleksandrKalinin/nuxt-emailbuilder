import type { PostgrestError, RealtimeChannel } from "@supabase/supabase-js";

const client = useSupabaseClient();

class EmailService {
  async saveToLocal(template: string) {
    try {
      await useFetch("http://localhost:5000/create", {
        method: "post",
        body: {
          template,
        },
      });
    } catch (err) {
      throw new Error(err);
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
    } catch (err) {
      throw new Error(err);
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
    } catch (err) {
      throw new Error(err);
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
    } catch (err) {
      throw new Error("Unable to save image");
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
    } catch (err) {
      throw new Error(err);
    }
  }
}

const emailService = new EmailService();

export default emailService;
