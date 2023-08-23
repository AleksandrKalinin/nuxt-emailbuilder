// import type { PostgrestError, RealtimeChannel } from "@supabase/supabase-js";

const client = useSupabaseClient();

// let realtimeChannel: RealtimeChannel;

class TemplatesService {
  async fetchTemplates() {
    const { data, error } = await client
      .from("templates")
      .select("id, created_at, template_id, name, preview, category, content");
    return { data, error };
  }

  async fetchSelectedTemplate(id: number) {
    const { data, error } = await client
      .from("templates")
      .select("id, created_at, template_id, name, preview, category, content")
      .eq("id", id);
    return { data, error };
  }

  async uploadImage(filename: string, image: File) {
    const { data, error } = await client.storage
      .from("templates")
      .upload(`${filename}.png`, image, {
        cacheControl: "3600",
        upsert: false,
        contentType: "image/png",
      });
    return { data, error };
  }

  getImageUrl(url: string) {
    const path = client.storage.from("templates").getPublicUrl(url)
      .data.publicUrl;
    return path;
  }

  // subscribeToTemplatesUpdates = () => {
  //   realtimeChannel = client
  //     .channel("table-db-changes")
  //     .on(
  //       "postgres_changes",
  //       { event: "*", schema: "public", table: "templates" },
  //       () => this.fetchTemplates()
  //     );
  //   realtimeChannel.subscribe();
  // };

  // unsubscribeFromTemplatesUpdates = () => {
  //   client.removeChannel(realtimeChannel);
  // };
}

const templatesService = new TemplatesService();

export default templatesService;
