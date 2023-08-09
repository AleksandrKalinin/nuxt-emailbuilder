/*
import type { PostgrestError, RealtimeChannel } from "@supabase/supabase-js";

const client = useSupabaseClient();
let realtimeChannel: RealtimeChannel;

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
*/
