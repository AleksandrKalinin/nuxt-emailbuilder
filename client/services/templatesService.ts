import type { RealtimeChannel } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import type { Database } from "~/types/supabase";

const client = useSupabaseClient<Database>();

let realtimeChannel: RealtimeChannel;

class TemplatesService {
  async fetchTemplates() {
    const { data, error } = await client
      .from("templates")
      .select(
        "id, created_at, template_id, name, preview, type, content, category"
      );
    return { data, error };
  }

  async fetchSelectedTemplate(id: number) {
    const { data, error } = await client
      .from("templates")
      .select(
        "id, created_at, template_id, name, preview, type, content, category"
      )
      .eq("id", id);
    return { data, error };
  }

  async uploadTemplate(template: EditorRow[], preview: string) {
    const initialValues = {
      created_at: new Date().toISOString(),
      template_id: uuidv4(),
      name: "Generic name",
      preview,
      type: "free",
      content: template,
      category: "General",
    };

    const { error } = await client.from("templates").insert([initialValues]);
    if (error) {
      throw new Error(error.message);
    }
  }

  async uploadImage(filename: string, image: File) {
    const { data, error } = await client.storage
      .from("templates")
      .upload(`${filename}.png`, image, {
        cacheControl: "3600",
        upsert: false,
        contentType: "image/png",
      });
    if (error) {
      throw new Error(error.message);
    }
    return { data, error };
  }

  getImageUrl(url: string) {
    const path = client.storage.from("templates").getPublicUrl(url)
      .data.publicUrl;
    return path;
  }

  subscribeToTemplatesUpdates = () => {
    realtimeChannel = client
      .channel("table-db-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "templates" },
        () => this.fetchTemplates()
      );
    realtimeChannel.subscribe();
  };

  unsubscribeFromTemplatesUpdates = () => {
    client.removeChannel(realtimeChannel);
  };
}

const templatesService = new TemplatesService();

export default templatesService;
